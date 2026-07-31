/* =====================================================================
   CLOUDFLARE PAGES FUNCTION — /tts
   ---------------------------------------------------------------------
   Đây là "cầu nối" bí mật giữa app và ElevenLabs: trình duyệt của người
   dùng gọi tới đường dẫn /tts trên chính domain của bạn (không bao giờ
   thấy API key thật), function này mới là nơi gọi ElevenLabs bằng key
   bí mật lưu trong Cloudflare (Environment Variables).

   Cần cấu hình 3 biến môi trường trong Cloudflare Pages (Settings ->
   Environment variables), xem hướng dẫn kèm theo:
   - ELEVENLABS_API_KEY   (đánh dấu "Encrypt")
   - ELEVENLABS_VOICE_MALE
   - ELEVENLABS_VOICE_FEMALE

   Có cache ở edge Cloudflare 30 ngày: mỗi từ chỉ cần gọi ElevenLabs 1
   lần duy nhất (cho mỗi giọng nam/nữ), lần sau ai bấm nghe lại từ đó
   đều được phát từ cache, không tốn thêm hạn mức miễn phí.
   ===================================================================== */

export async function onRequestGet(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const text = (url.searchParams.get('text') || '').trim();
    const gender = url.searchParams.get('gender') === 'male' ? 'male' : 'female';

    if (!text) {
        return new Response('Thiếu tham số text', { status: 400 });
    }
    if (text.length > 200) {
        return new Response('Văn bản quá dài', { status: 400 });
    }

    // Kiểm tra cache ở edge Cloudflare trước — tránh gọi ElevenLabs lại
    // cho những từ đã từng có người phát trước đó.
    const cache = caches.default;
    const cacheKey = new Request(url.toString(), request);
    const cached = await cache.match(cacheKey);
    if (cached) return cached;

    const voiceId = gender === 'male' ? env.ELEVENLABS_VOICE_MALE : env.ELEVENLABS_VOICE_FEMALE;
    if (!voiceId || !env.ELEVENLABS_API_KEY) {
        return new Response('Chưa cấu hình TTS (thiếu biến môi trường trên Cloudflare)', { status: 500 });
    }

    let elevenRes;
    try {
        elevenRes = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
            method: 'POST',
            headers: {
                'xi-api-key': env.ELEVENLABS_API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: text,
                model_id: 'eleven_multilingual_v2',
                language_code: 'zh'
            })
        });
    } catch (err) {
        return new Response('Không gọi được ElevenLabs: ' + err.message, { status: 502 });
    }

    if (!elevenRes.ok) {
        const errText = await elevenRes.text();
        return new Response('Lỗi từ ElevenLabs: ' + errText, { status: elevenRes.status });
    }

    const audioBuffer = await elevenRes.arrayBuffer();
    const response = new Response(audioBuffer, {
        headers: {
            'Content-Type': 'audio/mpeg',
            'Cache-Control': 'public, max-age=2592000' // 30 ngày
        }
    });

    context.waitUntil(cache.put(cacheKey, response.clone()));
    return response;
}
