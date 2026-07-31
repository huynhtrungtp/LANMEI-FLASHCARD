        const DEFAULT_VOCABULARY = [
            // HSK 1
            { id: 'hsk1-1', hanzi: '你好', pinyin: 'nǐ hǎo', hanViet: 'Nhĩ Hảo', meaning: 'Xin chào', hsk: 'HSK1', category: 'Chào hỏi', exampleCn: '你好，很高兴认识你！', examplePinyin: 'Nǐ hǎo, hěn gāoxìng rènshí nǐ!', exampleVi: 'Xin chào, rất vui được quen biết bạn!' },
            { id: 'hsk1-2', hanzi: '大家', pinyin: 'dà jiā', hanViet: 'Đại Gia', meaning: 'Mọi người', hsk: 'HSK1', category: 'Chào hỏi', exampleCn: '大家好！', examplePinyin: 'Dàjiā hǎo!', exampleVi: 'Chào mọi người!' },
            { id: 'hsk1-3', hanzi: '谢谢', pinyin: 'xiè xie', hanViet: 'Tạ Tạ', meaning: 'Cảm ơn', hsk: 'HSK1', category: 'Giao tiếp', exampleCn: '非常谢谢你的帮助。', examplePinyin: 'Fēicháng xièxiè nǐ de bāngzhù.', exampleVi: 'Rất cảm ơn sự giúp đỡ của bạn.' },
            { id: 'hsk1-4', hanzi: '再见', pinyin: 'zài jiàn', hanViet: 'Tái Kiến', meaning: 'Tạm biệt', hsk: 'HSK1', category: 'Chào hỏi', exampleCn: '明天见，再见！', examplePinyin: 'Míngtiān jiàn, zàijiàn!', exampleVi: 'Hẹn gặp lại ngày mai, tạm biệt!' },
            { id: 'hsk1-5', hanzi: '水', pinyin: 'shuǐ', hanViet: 'Thủy', meaning: 'Nước', hsk: 'HSK1', category: 'Ăn uống', exampleCn: '我想喝一杯水。', examplePinyin: 'Wǒ xiǎng hē yī bēi shuǐ.', exampleVi: 'Tôi muốn uống một cốc nước.' },
            { id: 'hsk1-6', hanzi: '爱', pinyin: 'ài', hanViet: 'Ái', meaning: 'Yêu, thích', hsk: 'HSK1', category: 'Cảm xúc', exampleCn: '我爱我的爸爸妈妈。', examplePinyin: 'Wǒ ài wǒ de bàba māmā.', exampleVi: 'Tôi yêu bố mẹ tôi.' },
            { id: 'hsk1-7', hanzi: '爸爸', pinyin: 'bà ba', hanViet: 'Bá Bá', meaning: 'Bố, cha', hsk: 'HSK1', category: 'Gia đình', exampleCn: '我爸爸是一名医生。', examplePinyin: 'Wǒ bàba shì yī míng yīshēng.', exampleVi: 'Bố tôi là một bác sĩ.' },
            { id: 'hsk1-8', hanzi: '中国', pinyin: 'zhōng guó', hanViet: 'Trung Quốc', meaning: 'Trung Quốc', hsk: 'HSK1', category: 'Địa danh', exampleCn: '我想去中国旅游。', examplePinyin: 'Wǒ xiǎng qù zhōngguó lǚyóu.', exampleVi: 'Tôi muốn đi du lịch Trung Quốc.' },
            { id: 'hsk1-9', hanzi: '学习', pinyin: 'xué xí', hanViet: 'Học Tập', meaning: 'Học tập, học', hsk: 'HSK1', category: 'Học tập', exampleCn: '我们在学习汉语。', examplePinyin: 'Wǒmen zài xuéxí hànyǔ.', exampleVi: 'Chúng tôi đang học tiếng Trung.' },
            { id: 'hsk1-10', hanzi: '汉语', pinyin: 'hàn yǔ', hanViet: 'Hán Ngữ', meaning: 'Tiếng Trung', hsk: 'HSK1', category: 'Ngôn ngữ', exampleCn: '汉语很有趣。', examplePinyin: 'Hànyǔ hěn yǒuqù.', exampleVi: 'Tiếng Trung rất thú vị.' },
            { id: 'hsk1-11', hanzi: '朋友', pinyin: 'péng yǒu', hanViet: 'Bằng Hữu', meaning: 'Bạn bè', hsk: 'HSK1', category: 'Quan hệ', exampleCn: '他是我的好朋友。', examplePinyin: 'Tā shì wǒ de hǎo péngyǒu.', exampleVi: 'Anh ấy là bạn tốt của tôi.' },
            { id: 'hsk1-12', hanzi: '老师', pinyin: 'lǎo shī', hanViet: 'Lão Sư', meaning: 'Thầy / Cô giáo', hsk: 'HSK1', category: 'Nghề nghiệp', exampleCn: '王老师教我们汉语。', examplePinyin: 'Wáng lǎoshī jiāo wǒmen hànyǔ.', exampleVi: 'Thầy Vương dạy chúng tôi tiếng Trung.' },

            // HSK 2
            { id: 'hsk2-1', hanzi: '准备', pinyin: 'zhǔn bèi', hanViet: 'Chuẩn Bị', meaning: 'Chuẩn bị', hsk: 'HSK2', category: 'Hành động', exampleCn: '你准备好了吗？', examplePinyin: 'Nǐ zhǔnbèi hǎole ma?', exampleVi: 'Bạn đã chuẩn bị xong chưa?' },
            { id: 'hsk2-2', hanzi: '时间', pinyin: 'shí jiān', hanViet: 'Thời Gian', meaning: 'Thời gian', hsk: 'HSK2', category: 'Thời gian', exampleCn: '我没有很多时间。', examplePinyin: 'Wǒ méiyǒu hěn duō shíjiān.', exampleVi: 'Tôi không có nhiều thời gian.' },
            { id: 'hsk2-3', hanzi: '运动', pinyin: 'yùn dòng', hanViet: 'Vận Động', meaning: 'Thể thao, vận động', hsk: 'HSK2', category: 'Sức khỏe', exampleCn: '每天运动对身体好。', examplePinyin: 'Měitiān yùndòng duì shēntǐ hǎo.', exampleVi: 'Vận động mỗi ngày tốt cho sức khỏe.' },
            { id: 'hsk2-4', hanzi: '希望', pinyin: 'xī wàng', hanViet: 'Hy Vọng', meaning: 'Hy vọng, mong muốn', hsk: 'HSK2', category: 'Cảm xúc', exampleCn: '我希望你每天都快乐。', examplePinyin: 'Wǒ xīwàng nǐ měitiān dōu kuàilè.', exampleVi: 'Tôi hy vọng mỗi ngày bạn đều vui vẻ.' },

            // HSK 3
            { id: 'hsk3-1', hanzi: '关系', pinyin: 'guān xì', hanViet: 'Quan Hệ', meaning: 'Quan hệ, mối quan hệ', hsk: 'HSK3', category: 'Xã hội', exampleCn: '我们关系非常好。', examplePinyin: 'Wǒmen guānxì fēicháng hǎo.', exampleVi: 'Mối quan hệ của chúng tôi rất tốt.' },
            { id: 'hsk3-2', hanzi: '环境', pinyin: 'huán jìng', hanViet: 'Hoàn Cảnh', meaning: 'Môi trường, hoàn cảnh', hsk: 'HSK3', category: 'Tự nhiên', exampleCn: '这里的环境很安静。', examplePinyin: 'Zhèlǐ de huánjìng hěn ānjìng.', exampleVi: 'Môi trường ở đây rất yên tĩnh.' },

            // HSK 4
            { id: 'hsk4-1', hanzi: '成功', pinyin: 'chéng gōng', hanViet: 'Thành Công', meaning: 'Thành công', hsk: 'HSK4', category: 'Thành tựu', exampleCn: '坚持就是成功。', examplePinyin: 'Jiānchí jiùshì chénggōng.', exampleVi: 'Kiên trì chính là thành công.' },
            { id: 'hsk4-2', hanzi: '坚持', pinyin: 'jiān chí', hanViet: 'Kiên Trì', meaning: 'Kiên trì', hsk: 'HSK4', category: 'Phẩm chất', exampleCn: '只要坚持，就一定会成功。', examplePinyin: 'Zhǐyào jiānchí, jiù yīdìng huì chénggōng.', exampleVi: 'Chỉ cần kiên trì, nhất định sẽ thành công.' },

            // HSK 5
            { id: 'hsk5-1', hanzi: '梦想', pinyin: 'mèng xiǎng', hanViet: 'Mộng Tưởng', meaning: 'Ước mơ, hoài bão', hsk: 'HSK5', category: 'Tâm hồn', exampleCn: '勇敢追求你的梦想。', examplePinyin: 'Yǒnggǎn zhuīqiú nǐ de mèngxiǎng.', exampleVi: 'Hãy dũng cảm theo đuổi ước mơ của bạn.' }
        ];

        let appState = {
            vocabulary: [],
            favorites: JSON.parse(localStorage.getItem('zh_favs') || '[]'),
            mastered: JSON.parse(localStorage.getItem('zh_mastered') || '[]'),
            unlearned: JSON.parse(localStorage.getItem('zh_unlearned') || '[]'),
            streak: parseInt(localStorage.getItem('zh_streak') || '1'),
            lastStudied: localStorage.getItem('zh_last_date') || '',
            activeMode: 'flashcard',
            currentHsk: 'HSK1',
            statusFilter: localStorage.getItem('zh_status_filter') || 'ALL',
            filteredVocab: [],
            
            // Flashcard State
            cardIndex: 0,
            isCardFlipped: false,
            autoPlayTimer: null,
            autoPlayActive: false,
            autoPlaySpeed: parseInt(localStorage.getItem('zh_autoplay_speed') || '3'),
            voiceGender: localStorage.getItem('zh_voice_gender') || 'female',
            cardFieldsVisible: Object.assign(
                { hanzi: true, pinyin: true, hanviet: true, meaning: true },
                JSON.parse(localStorage.getItem('zh_card_fields') || '{}')
            ),

            // Writing Mode State
            wrIndex: 0,
            wrCharSubIdx: 0,
            wrMode: 'guided', // 'guided' (HanziWriter) or 'freehand' (Canvas)
            wrShowTraceHint: true,
            userStrokes: [],
            currentWriter: null,

            // Listening Quiz State
            listeningScore: 0,
            listeningTotal: 0,
            listeningStreak: 0,
            currentListeningQuestion: null,

            // MCQ Quiz State
            quizScore: 0,
            quizStreak: 0,
            currentQuizQuestion: null,

            // Pronunciation Recording & Scoring State (Flashcard mode)
            pronunIsRecording: false,
            pronunRecognition: null,
            pronunMediaRecorder: null,
            pronunAudioChunks: [],
            pronunRecordingUrl: null
        };

        // Heuristic keyword lists to detect voice gender from common mainland-Mandarin
        // TTS voice names across browsers/OSes (Windows, macOS/iOS, Chrome/Android, Edge).
        const MALE_VOICE_HINTS = ['male', 'kangkang', 'yunyang', 'yunxi', 'yunjian', 'yunfeng', 'li-mu', 'limu', 'yang', 'gang'];
        const FEMALE_VOICE_HINTS = ['female', 'huihui', 'yaoyao', 'xiaoxiao', 'xiaoyi', 'tingting', 'ting-ting', 'mei-jia', 'meijia', 'xiaoxuan'];

        function getMandarinVoices() {
            if (!('speechSynthesis' in window)) return [];
            const voices = window.speechSynthesis.getVoices() || [];
            // Prefer mainland simplified Mandarin (zh-CN); exclude Cantonese/Taiwan/HK where possible.
            return voices.filter(v => {
                const lang = (v.lang || '').toLowerCase();
                const name = (v.name || '').toLowerCase();
                if (lang.includes('hk') || lang.includes('yue') || name.includes('cantonese') || name.includes('hong kong')) return false;
                return lang === 'zh-cn' || lang === 'zh' || lang.startsWith('zh-cn') || name.includes('普通话') || name.includes('mandarin') || name.includes('china');
            });
        }

        function pickVoiceByGender(gender) {
            const candidates = getMandarinVoices();
            if (candidates.length === 0) return null;

            const hints = gender === 'male' ? MALE_VOICE_HINTS : FEMALE_VOICE_HINTS;
            const matched = candidates.find(v => hints.some(h => v.name.toLowerCase().includes(h)));
            if (matched) return matched;

            // No explicit gender match found in the voice name — fall back to the first
            // available mainland Mandarin voice so playback still works.
            return candidates[0];
        }

        function speakHanziDeviceVoice(text) {
            // Phương án dự phòng: dùng giọng đọc có sẵn trên máy/trình duyệt
            // (chỉ chạy khi dịch vụ giọng AI chuẩn ở dưới không phản hồi được).
            if (!('speechSynthesis' in window)) {
                showToast("Trình duyệt không hỗ trợ phát âm tự động", "error");
                return;
            }

            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'zh-CN';

            const voice = pickVoiceByGender(appState.voiceGender);
            if (voice) {
                utterance.voice = voice;
                utterance.lang = voice.lang;
            }

            const speedSelect = document.getElementById('audio-speed-select');
            if (speedSelect) {
                utterance.rate = parseFloat(speedSelect.value || 1.0);
            }

            window.speechSynthesis.speak(utterance);
        }

        function speakHanzi(text) {
            // Giọng AI chuẩn (ElevenLabs) qua cầu nối bí mật /tts trên chính
            // domain của app — không lộ API key, giống nhau trên mọi thiết bị.
            const gender = appState.voiceGender === 'male' ? 'male' : 'female';
            const speedSelect = document.getElementById('audio-speed-select');
            const rate = speedSelect ? parseFloat(speedSelect.value || 1.0) : 1.0;

            const url = `/tts?text=${encodeURIComponent(text)}&gender=${gender}`;

            let fallbackUsed = false;
            const fallback = () => {
                if (fallbackUsed) return;
                fallbackUsed = true;
                speakHanziDeviceVoice(text);
            };

            try {
                const audio = new Audio();
                audio.playbackRate = rate;
                audio.onerror = fallback;
                audio.src = url;
                const playPromise = audio.play();
                if (playPromise && typeof playPromise.catch === 'function') {
                    playPromise.catch(fallback);
                }
            } catch (err) {
                fallback();
            }
        }

        function setVoiceGender(gender) {
            appState.voiceGender = gender;
            localStorage.setItem('zh_voice_gender', gender);
            updateVoiceGenderUI();

            // Preview the new voice on the currently shown card, if any.
            const word = appState.filteredVocab[appState.cardIndex];
            if (word) speakHanzi(word.hanzi);
        }

        function updateVoiceGenderUI() {
            const maleBtn = document.getElementById('btn-voice-male');
            const femaleBtn = document.getElementById('btn-voice-female');
            if (!maleBtn || !femaleBtn) return;

            const activeClasses = ['bg-brand-500', 'shadow-sm'];
            const inactiveHoverClasses = ['hover:bg-brand-100'];

            if (appState.voiceGender === 'male') {
                maleBtn.classList.add(...activeClasses);
                maleBtn.classList.remove(...inactiveHoverClasses);
                femaleBtn.classList.remove(...activeClasses);
                femaleBtn.classList.add(...inactiveHoverClasses);
            } else {
                femaleBtn.classList.add(...activeClasses);
                femaleBtn.classList.remove(...inactiveHoverClasses);
                maleBtn.classList.remove(...activeClasses);
                maleBtn.classList.add(...inactiveHoverClasses);
            }
        }

        // ===================== 🔊 Luyện Phát Âm & Chấm Điểm (Ghi âm) =====================

        // Tính khoảng cách Levenshtein giữa 2 chuỗi (dùng để so khớp Hán tự nhận dạng được với từ mục tiêu)
        function levenshteinDistance(a, b) {
            const m = a.length, n = b.length;
            if (m === 0) return n;
            if (n === 0) return m;
            const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
            for (let i = 0; i <= m; i++) dp[i][0] = i;
            for (let j = 0; j <= n; j++) dp[0][j] = j;
            for (let i = 1; i <= m; i++) {
                for (let j = 1; j <= n; j++) {
                    if (a[i - 1] === b[j - 1]) {
                        dp[i][j] = dp[i - 1][j - 1];
                    } else {
                        dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
                    }
                }
            }
            return dp[m][n];
        }

        // Chấm điểm phát âm (0-100) bằng cách so sánh văn bản nhận dạng được với Hán tự mục tiêu
        function computePronunciationScore(targetHanzi, spokenText) {
            const clean = (s) => (s || '').replace(/[，。！？、,.!?\s]/g, '');
            const target = clean(targetHanzi);
            const spoken = clean(spokenText);
            if (!target || !spoken) return 0;
            const dist = levenshteinDistance(target, spoken);
            const maxLen = Math.max(target.length, spoken.length);
            return Math.round(Math.max(0, 1 - dist / maxLen) * 100);
        }

        function getPronunciationRecognitionCtor() {
            return window.SpeechRecognition || window.webkitSpeechRecognition || null;
        }

        function resetPronunciationUI() {
            if (appState.pronunRecognition && appState.pronunIsRecording) {
                try { appState.pronunRecognition.abort(); } catch (err) { /* ignore */ }
            }
            appState.pronunIsRecording = false;
            if (appState.pronunRecordingUrl) {
                URL.revokeObjectURL(appState.pronunRecordingUrl);
                appState.pronunRecordingUrl = null;
            }

            const btn = document.getElementById('btn-record-pronun');
            const icon = document.getElementById('btn-record-pronun-icon');
            const label = document.getElementById('btn-record-pronun-label');
            const scoreBadge = document.getElementById('pronun-score-badge');
            const feedbackText = document.getElementById('pronun-feedback-text');
            const playBtn = document.getElementById('btn-play-recording');
            if (!btn) return;

            btn.className = "flex-1 flex items-center justify-center gap-2 py-2 rounded-xl font-bold text-xs sm:text-sm transition border bg-rose-50 hover:bg-rose-100 text-rose-700 border-rose-200";
            icon.className = "fa-solid fa-microphone";
            label.innerText = "Ghi Âm Chấm Điểm";
            scoreBadge.classList.add('hidden');
            feedbackText.innerText = "";
            playBtn.disabled = true;
        }

        function setPronunciationRecordingUI(isRecording) {
            const btn = document.getElementById('btn-record-pronun');
            const icon = document.getElementById('btn-record-pronun-icon');
            const label = document.getElementById('btn-record-pronun-label');
            if (isRecording) {
                btn.className = "flex-1 flex items-center justify-center gap-2 py-2 rounded-xl font-bold text-xs sm:text-sm transition border bg-rose-500 text-white border-rose-500 shadow-md shadow-rose-500/20 animate-pulse";
                icon.className = "fa-solid fa-stop";
                label.innerText = "Đang nghe... (Bấm để dừng)";
            } else {
                setPronunciationProcessingUI();
            }
        }

        function setPronunciationProcessingUI() {
            const btn = document.getElementById('btn-record-pronun');
            const icon = document.getElementById('btn-record-pronun-icon');
            const label = document.getElementById('btn-record-pronun-label');
            btn.className = "flex-1 flex items-center justify-center gap-2 py-2 rounded-xl font-bold text-xs sm:text-sm transition border bg-brand-50 text-brand-600 border-brand-200 cursor-wait";
            icon.className = "fa-solid fa-spinner fa-spin";
            label.innerText = "Đang chấm điểm...";
        }

        function showPronunciationScore(score, spokenText) {
            const btn = document.getElementById('btn-record-pronun');
            const icon = document.getElementById('btn-record-pronun-icon');
            const label = document.getElementById('btn-record-pronun-label');
            const scoreBadge = document.getElementById('pronun-score-badge');
            const feedbackText = document.getElementById('pronun-feedback-text');

            btn.className = "flex-1 flex items-center justify-center gap-2 py-2 rounded-xl font-bold text-xs sm:text-sm transition border bg-rose-50 hover:bg-rose-100 text-rose-700 border-rose-200";
            icon.className = "fa-solid fa-microphone";
            label.innerText = "Ghi Âm Lại";

            scoreBadge.classList.remove('hidden');
            let scoreClasses, message;
            if (score >= 85) {
                scoreClasses = "bg-emerald-100 text-emerald-700 border-emerald-200";
                message = "Xuất sắc! Phát âm rất chuẩn 🎉";
            } else if (score >= 60) {
                scoreClasses = "bg-amber-100 text-amber-700 border-amber-200";
                message = "Khá tốt, hãy luyện thêm nhé 💪";
            } else {
                scoreClasses = "bg-rose-100 text-rose-700 border-rose-200";
                message = "Cần luyện tập nhiều hơn, thử lại nào 🔁";
            }
            scoreBadge.className = `text-xs font-bold px-2.5 py-0.5 rounded-full border whitespace-nowrap ${scoreClasses}`;
            scoreBadge.innerText = `${score} điểm`;
            feedbackText.innerHTML = `${message}${spokenText ? ` — Nhận dạng được: <span class="font-semibold text-brand-800">${spokenText}</span>` : ''}`;
        }

        function startPronunciationRecording() {
            const word = appState.filteredVocab[appState.cardIndex];
            if (!word) return;

            const RecognitionCtor = getPronunciationRecognitionCtor();
            if (!RecognitionCtor) {
                showToast("Trình duyệt không hỗ trợ ghi âm chấm điểm. Hãy thử Chrome trên máy tính/Android.", "error");
                return;
            }

            appState.pronunAudioChunks = [];
            if (appState.pronunRecordingUrl) {
                URL.revokeObjectURL(appState.pronunRecordingUrl);
                appState.pronunRecordingUrl = null;
                document.getElementById('btn-play-recording').disabled = true;
            }

            // Ghi âm thô song song để người học có thể nghe lại giọng của mình (không bắt buộc để chấm điểm)
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder) {
                navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
                    try {
                        const recorder = new MediaRecorder(stream);
                        appState.pronunMediaRecorder = recorder;
                        recorder.ondataavailable = (e) => {
                            if (e.data.size > 0) appState.pronunAudioChunks.push(e.data);
                        };
                        recorder.onstop = () => {
                            stream.getTracks().forEach(t => t.stop());
                            if (appState.pronunAudioChunks.length > 0) {
                                const blob = new Blob(appState.pronunAudioChunks, { type: 'audio/webm' });
                                appState.pronunRecordingUrl = URL.createObjectURL(blob);
                                document.getElementById('btn-play-recording').disabled = false;
                            }
                        };
                        recorder.start();
                    } catch (err) {
                        appState.pronunMediaRecorder = null;
                    }
                }).catch(() => {
                    appState.pronunMediaRecorder = null;
                });
            }

            const recognition = new RecognitionCtor();
            recognition.lang = 'zh-CN';
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;
            appState.pronunRecognition = recognition;

            recognition.onstart = () => {
                appState.pronunIsRecording = true;
                setPronunciationRecordingUI(true);
            };

            recognition.onresult = (event) => {
                const spokenText = event.results[0][0].transcript.trim();
                const score = computePronunciationScore(word.hanzi, spokenText);
                showPronunciationScore(score, spokenText);
            };

            recognition.onerror = (event) => {
                if (event.error === 'no-speech') {
                    showToast("Không nghe thấy giọng nói, hãy thử lại!", "error");
                } else if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
                    showToast("Vui lòng cấp quyền micro để luyện phát âm!", "error");
                } else {
                    showToast("Có lỗi khi ghi âm, hãy thử lại!", "error");
                }
            };

            recognition.onend = () => {
                appState.pronunIsRecording = false;
                if (appState.pronunMediaRecorder && appState.pronunMediaRecorder.state !== 'inactive') {
                    appState.pronunMediaRecorder.stop();
                }
                // Nếu không có kết quả nào được trả về (ví dụ bị lỗi/no-speech) thì khôi phục nút về trạng thái ban đầu
                const label = document.getElementById('btn-record-pronun-label');
                if (label && label.innerText === "Đang nghe... (Bấm để dừng)") {
                    resetPronunciationUI();
                }
            };

            try {
                recognition.start();
            } catch (err) {
                showToast("Không thể bắt đầu ghi âm, hãy thử lại!", "error");
            }
        }

        function stopPronunciationRecording() {
            if (appState.pronunRecognition && appState.pronunIsRecording) {
                setPronunciationProcessingUI();
                appState.pronunRecognition.stop();
            }
        }

        function playPronunciationRecording() {
            if (!appState.pronunRecordingUrl) return;
            const audio = new Audio(appState.pronunRecordingUrl);
            audio.play().catch(() => {
                showToast("Không thể phát lại bản ghi âm!", "error");
            });
        }

        function setupPronunciationRecordingEvents() {
            document.getElementById('btn-record-pronun').addEventListener('click', (e) => {
                e.stopPropagation();
                if (appState.pronunIsRecording) {
                    stopPronunciationRecording();
                } else {
                    startPronunciationRecording();
                }
            });

            document.getElementById('btn-play-recording').addEventListener('click', (e) => {
                e.stopPropagation();
                playPronunciationRecording();
            });
        }

        function showToast(message, type = "success") {
            const toast = document.getElementById('toast-notification');
            const msgEl = document.getElementById('toast-message');
            const iconEl = document.getElementById('toast-icon');
            
            msgEl.innerText = message;
            if (type === "error") {
                iconEl.className = "fa-solid fa-circle-exclamation text-rose-500 text-lg";
            } else {
                iconEl.className = "fa-solid fa-circle-check text-emerald-500 text-lg";
            }

            toast.classList.remove('translate-y-20', 'opacity-0');
            setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
            }, 2500);
        }

        (function() {
            const savedCustom = localStorage.getItem('zh_custom_vocab');
            if (savedCustom) {
                appState.vocabulary = [...DEFAULT_VOCABULARY, ...JSON.parse(savedCustom)];
            } else {
                appState.vocabulary = [...DEFAULT_VOCABULARY];
            }

            if ('speechSynthesis' in window) {
                window.speechSynthesis.getVoices();
                window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
            }

            setupNavigationEvents();
            setupFilterEvents();
            setupFlashcardEvents();
            setupWritingEvents();
            setupListeningEvents();
            setupQuizEvents();
            setupDictionaryEvents();
            setupModalEvents();
            setupSettingsModalEvents();

            applyFilter();
            updateStatsUI();
        })();

        function setupNavigationEvents() {
            const tabBtns = document.querySelectorAll('.tab-btn');
            tabBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const mode = btn.getAttribute('data-mode');
                    switchMode(mode);
                });
            });

        }

        function switchMode(mode) {
            if (mode !== 'flashcard') stopAutoPlay();
            appState.activeMode = mode;

            document.querySelectorAll('.tab-btn').forEach(btn => {
                const btnMode = btn.getAttribute('data-mode');
                if (btnMode === mode) {
                    btn.className = "tab-btn px-3.5 py-2 rounded-xl text-sm font-bold transition flex items-center gap-2 whitespace-nowrap bg-brand-500 text-white shadow-md shadow-brand-500/20";
                } else {
                    btn.className = "tab-btn px-3.5 py-2 rounded-xl text-sm font-semibold text-brand-800/70 hover:text-brand-900 hover:bg-brand-50 transition flex items-center gap-2 whitespace-nowrap";
                }
            });

            document.querySelectorAll('.study-mode').forEach(sec => sec.classList.add('hidden'));

            const targetSec = document.getElementById(`mode-${mode}`);
            if (targetSec) targetSec.classList.remove('hidden');

            if (mode === 'flashcard') renderFlashcard();
            else if (mode === 'writing') renderWritingPractice();
            else if (mode === 'listening') initListeningQuiz();
            else if (mode === 'quiz') initQuiz();
            else if (mode === 'dictionary') renderDictionary();
        }

        function setupFilterEvents() {
            const filterEl = document.getElementById('hsk-filter');
            filterEl.addEventListener('change', (e) => {
                appState.currentHsk = e.target.value;
                applyFilter();
            });
        }

        function applyFilter() {
            stopAutoPlay();
            const level = appState.currentHsk;
            if (level === 'ALL') {
                appState.filteredVocab = [...appState.vocabulary];
            } else if (level === 'FAV') {
                appState.filteredVocab = appState.vocabulary.filter(v => appState.favorites.includes(v.id));
            } else {
                appState.filteredVocab = appState.vocabulary.filter(v => v.hsk === level);
            }

            if (appState.statusFilter === 'REVIEW') {
                appState.filteredVocab = appState.filteredVocab.filter(v => !appState.mastered.includes(v.id));
            } else if (appState.statusFilter === 'MASTERED') {
                appState.filteredVocab = appState.filteredVocab.filter(v => appState.mastered.includes(v.id));
            }

            if (appState.filteredVocab.length === 0) {
                appState.filteredVocab = [...appState.vocabulary];
                showToast("Không có từ nào khớp bộ lọc, đang hiển thị toàn bộ từ vựng", "error");
            }

            appState.cardIndex = 0;
            appState.wrIndex = 0;
            appState.wrCharSubIdx = 0;
            appState.isCardFlipped = false;

            switchMode(appState.activeMode);
        }

        function updateStatsUI() {
            document.getElementById('streak-count').innerText = `${appState.streak} ngày`;
            document.getElementById('mastered-count').innerText = appState.mastered.length;
        }

        function setupFlashcardEvents() {
            const cardEl = document.getElementById('flashcard-element');
            const innerEl = document.getElementById('flashcard-inner');

            cardEl.addEventListener('click', (e) => {
                if (e.target.closest('#btn-audio-speak') || e.target.closest('#btn-fav-card') || e.target.closest('#pronunciation-practice-block')) return;
                appState.isCardFlipped = !appState.isCardFlipped;
                if (appState.isCardFlipped) {
                    innerEl.classList.add('rotate-y-180');
                } else {
                    innerEl.classList.remove('rotate-y-180');
                }
            });

            document.getElementById('btn-audio-speak').addEventListener('click', (e) => {
                e.stopPropagation();
                const word = appState.filteredVocab[appState.cardIndex];
                if (word) speakHanzi(word.hanzi);
            });

            document.getElementById('btn-voice-male').addEventListener('click', (e) => {
                e.stopPropagation();
                setVoiceGender('male');
            });

            document.getElementById('btn-voice-female').addEventListener('click', (e) => {
                e.stopPropagation();
                setVoiceGender('female');
            });

            updateVoiceGenderUI();
            setupPronunciationRecordingEvents();

            document.getElementById('btn-fav-card').addEventListener('click', (e) => {
                e.stopPropagation();
                const word = appState.filteredVocab[appState.cardIndex];
                if (!word) return;

                const idx = appState.favorites.indexOf(word.id);
                if (idx > -1) {
                    appState.favorites.splice(idx, 1);
                    showToast("Đã xóa khỏi danh sách yêu thích");
                } else {
                    appState.favorites.push(word.id);
                    showToast("Đã lưu vào từ vựng yêu thích ❤️");
                }
                localStorage.setItem('zh_favs', JSON.stringify(appState.favorites));
                renderFlashcard();
            });

            document.getElementById('btn-prev-card').addEventListener('click', () => {
                stopAutoPlay();
                if (appState.cardIndex > 0) {
                    appState.cardIndex--;
                    appState.isCardFlipped = false;
                    document.getElementById('flashcard-inner').classList.remove('rotate-y-180');
                    renderFlashcard();
                }
            });

            document.getElementById('btn-next-card').addEventListener('click', () => {
                stopAutoPlay();
                if (appState.cardIndex < appState.filteredVocab.length - 1) {
                    appState.cardIndex++;
                    appState.isCardFlipped = false;
                    document.getElementById('flashcard-inner').classList.remove('rotate-y-180');
                    renderFlashcard();
                }
            });

            document.getElementById('btn-auto-play').addEventListener('click', () => {
                if (appState.autoPlayActive) {
                    stopAutoPlay();
                } else {
                    startAutoPlay();
                }
            });

            document.getElementById('btn-mark-mastered').addEventListener('click', () => {
                const word = appState.filteredVocab[appState.cardIndex];
                if (!word) return;
                if (!appState.mastered.includes(word.id)) {
                    appState.mastered.push(word.id);
                    localStorage.setItem('zh_mastered', JSON.stringify(appState.mastered));
                    showToast("Đã đánh dấu thuộc từ này!");
                    updateStatsUI();
                    renderFlashcard();
                }
            });

            document.getElementById('btn-mark-unlearned').addEventListener('click', () => {
                const word = appState.filteredVocab[appState.cardIndex];
                if (!word) return;
                const mIdx = appState.mastered.indexOf(word.id);
                if (mIdx > -1) {
                    appState.mastered.splice(mIdx, 1);
                    localStorage.setItem('zh_mastered', JSON.stringify(appState.mastered));
                }
                showToast("Đã đưa vào danh sách cần ôn tập");
                updateStatsUI();
                renderFlashcard();
            });
        }

        function startAutoPlay() {
            if (appState.filteredVocab.length <= 1) return;
            appState.autoPlayActive = true;
            document.getElementById('btn-auto-play-icon').className = 'fa-solid fa-pause text-xs';
            document.getElementById('btn-auto-play').classList.add('bg-brand-500', 'text-white', 'border-brand-500');
            document.getElementById('btn-auto-play').classList.remove('bg-brand-50', 'text-brand-600', 'border-brand-200');

            appState.autoPlayTimer = setInterval(() => {
                appState.isCardFlipped = false;
                document.getElementById('flashcard-inner').classList.remove('rotate-y-180');
                appState.cardIndex = (appState.cardIndex + 1) % appState.filteredVocab.length;
                renderFlashcard();
            }, appState.autoPlaySpeed * 1000);
        }

        function stopAutoPlay() {
            if (appState.autoPlayTimer) {
                clearInterval(appState.autoPlayTimer);
                appState.autoPlayTimer = null;
            }
            appState.autoPlayActive = false;
            const icon = document.getElementById('btn-auto-play-icon');
            const btn = document.getElementById('btn-auto-play');
            if (icon) icon.className = 'fa-solid fa-play text-xs';
            if (btn) {
                btn.classList.remove('bg-brand-500', 'text-white', 'border-brand-500');
                btn.classList.add('bg-brand-50', 'text-brand-600', 'border-brand-200');
            }
        }

        function renderFlashcard() {
            if (appState.filteredVocab.length === 0) return;
            const word = appState.filteredVocab[appState.cardIndex];
            if (!word) return;

            document.getElementById('card-counter').innerText = `Từ ${appState.cardIndex + 1} / ${appState.filteredVocab.length}`;
            document.getElementById('card-seq-badge').innerText = `${appState.cardIndex + 1}`;
            document.getElementById('card-hsk-level').innerText = word.hsk;
            document.getElementById('card-hanzi').innerText = word.hanzi;
            document.getElementById('card-pinyin').innerText = word.pinyin;
            document.getElementById('card-hanviet').innerText = `Âm Hán Việt: ${word.hanViet || 'N/A'}`;
            document.getElementById('card-back-hanzi').innerText = word.hanzi;
            document.getElementById('card-meaning').innerText = word.meaning;

            document.getElementById('card-front-meaning').innerText = word.meaning;

            const fv = appState.cardFieldsVisible;
            document.getElementById('card-hanzi').classList.toggle('hidden', !fv.hanzi);
            document.getElementById('card-pinyin').classList.toggle('hidden', !fv.pinyin);
            document.getElementById('card-hanviet').classList.toggle('hidden', !fv.hanviet);
            document.getElementById('card-front-meaning').classList.toggle('hidden', !fv.meaning);
            
            document.getElementById('card-example-cn').innerText = word.exampleCn || word.hanzi;
            document.getElementById('card-example-pinyin').innerText = word.examplePinyin || word.pinyin;
            document.getElementById('card-example-vi').innerText = word.exampleVi || word.meaning;

            const isFav = appState.favorites.includes(word.id);
            const favBtn = document.getElementById('btn-fav-card');
            favBtn.innerHTML = isFav ? '<i class="fa-solid fa-heart text-rose-500"></i>' : '<i class="fa-regular fa-heart"></i>';

            const statusBadge = document.getElementById('card-status-badge');
            if (appState.mastered.includes(word.id)) {
                statusBadge.className = "px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 font-bold";
                statusBadge.innerText = "Đã thuộc";
            } else {
                statusBadge.className = "px-2.5 py-0.5 rounded-full bg-accent-100 text-accent-700 border border-accent-200 font-bold";
                statusBadge.innerText = "Cần Ôn Tập";
            }

            const pct = Math.round(((appState.cardIndex + 1) / appState.filteredVocab.length) * 100);
            document.getElementById('flashcard-progress').style.width = `${pct}%`;

            resetPronunciationUI();
        }

        function setupWritingEvents() {
            // Mode toggle buttons
            document.getElementById('btn-wr-mode-guided').onclick = () => {
                appState.wrMode = 'guided';
                document.getElementById('btn-wr-mode-guided').className = "px-3 py-1.5 rounded-lg text-xs font-bold transition bg-teal-600 text-white shadow-xs";
                document.getElementById('btn-wr-mode-freehand').className = "px-3 py-1.5 rounded-lg text-xs font-bold transition text-teal-800 hover:bg-teal-100";
                
                document.getElementById('wr-guided-container').classList.remove('hidden');
                document.getElementById('wr-freehand-container').classList.add('hidden');
                renderWritingPractice();
            };

            document.getElementById('btn-wr-mode-freehand').onclick = () => {
                appState.wrMode = 'freehand';
                document.getElementById('btn-wr-mode-freehand').className = "px-3 py-1.5 rounded-lg text-xs font-bold transition bg-teal-600 text-white shadow-xs";
                document.getElementById('btn-wr-mode-guided').className = "px-3 py-1.5 rounded-lg text-xs font-bold transition text-teal-800 hover:bg-teal-100";
                
                document.getElementById('wr-freehand-container').classList.remove('hidden');
                document.getElementById('wr-guided-container').classList.add('hidden');
                renderWritingPractice();
            };

            // HanziWriter Controls
            document.getElementById("wrAnimate").onclick = () => {
                if (appState.wrMode === 'guided' && appState.currentWriter) {
                    document.getElementById('wr-status-text').innerText = "Đang phát minh họa thứ tự các nét...";
                    appState.currentWriter.animateCharacter({
                        onComplete: () => {
                            document.getElementById('wr-status-text').innerText = "Đã hoàn thành nét vẽ minh họa!";
                        }
                    });
                } else {
                    showToast("Hãy chuyển sang chế độ Luyện nét chuẩn HanziWriter", "error");
                }
            };

            document.getElementById("wrQuizMode").onclick = () => {
                if (appState.wrMode === 'guided' && appState.currentWriter) {
                    document.getElementById('wr-status-text').innerText = "Thử thách: Viết theo thứ tự các nét trong ô!";
                    appState.currentWriter.quiz({
                        onComplete: (summary) => {
                            document.getElementById('wr-status-text').innerText = `Chúc mừng! Hoàn thành xuất sắc (${summary.totalMistakes} lỗi nhỏ)`;
                            confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
                        }
                    });
                } else {
                    showToast("Hãy chuyển sang chế độ Luyện nét chuẩn HanziWriter", "error");
                }
            };

            document.getElementById("wrToggleHint").onclick = () => {
                appState.wrShowTraceHint = !appState.wrShowTraceHint;
                const icon = document.getElementById("wrHintIcon");
                
                if (appState.wrMode === 'guided' && appState.currentWriter) {
                    if (appState.wrShowTraceHint) {
                        appState.currentWriter.showOutline();
                        icon.className = "fa-solid fa-eye text-teal-600";
                    } else {
                        appState.currentWriter.hideOutline();
                        icon.className = "fa-solid fa-eye-slash text-slate-400";
                    }
                } else {
                    drawFreehandCanvasBackground();
                }
            };

            document.getElementById("wrClear").onclick = () => {
                if (appState.wrMode === 'guided' && appState.currentWriter) {
                    appState.currentWriter.quiz();
                    document.getElementById('wr-status-text').innerText = "Đã xóa nét. Hãy bắt đầu viết!";
                } else {
                    appState.userStrokes = [];
                    drawFreehandCanvasBackground();
                }
            };

            document.getElementById("wrListen").onclick = () => {
                const vocab = appState.filteredVocab;
                if (vocab && vocab[appState.wrIndex]) {
                    speakHanzi(vocab[appState.wrIndex].hanzi);
                }
            };

            document.getElementById("wrPrev").onclick = () => {
                if (appState.filteredVocab.length === 0) return;
                appState.wrIndex = (appState.wrIndex - 1 + appState.filteredVocab.length) % appState.filteredVocab.length;
                appState.wrCharSubIdx = 0;
                renderWritingPractice();
            };

            document.getElementById("wrNext").onclick = () => {
                if (appState.filteredVocab.length === 0) return;
                appState.wrIndex = (appState.wrIndex + 1) % appState.filteredVocab.length;
                appState.wrCharSubIdx = 0;
                renderWritingPractice();
            };

            setupFreehandCanvasEvents();
        }

        function renderWritingPractice() {
            const vocab = appState.filteredVocab;
            if (!vocab || vocab.length === 0) return;

            const item = vocab[appState.wrIndex];
            if (!item) return;

            document.getElementById("wr-hsk-badge").innerText = item.hsk;
            document.getElementById("wr-pinyin").innerText = item.pinyin || "";
            document.getElementById("wr-vietnamese").innerText = item.meaning || "";
            document.getElementById("wr-hanviet").innerText = `Âm Hán Việt: ${item.hanViet || 'N/A'}`;

            const chars = (item.hanzi || "").split('');
            if (appState.wrCharSubIdx >= chars.length) appState.wrCharSubIdx = 0;

            const charSelector = document.getElementById("wr-char-selector");
            charSelector.innerHTML = "";

            if (chars.length > 1) {
                chars.forEach((ch, idx) => {
                    const btn = document.createElement("button");
                    const isActive = idx === appState.wrCharSubIdx;
                    btn.className = isActive 
                        ? "px-3.5 py-1.5 rounded-xl font-hanzi font-bold text-lg bg-teal-600 text-white shadow-sm border border-teal-600"
                        : "px-3.5 py-1.5 rounded-xl font-hanzi font-bold text-lg bg-teal-50 text-teal-800 hover:bg-teal-100 border border-teal-200 transition";
                    btn.innerText = `Chữ ${idx + 1}: ${ch}`;
                    btn.onclick = () => {
                        appState.wrCharSubIdx = idx;
                        renderWritingPractice();
                    };
                    charSelector.appendChild(btn);
                });
            }

            const activeChar = chars[appState.wrCharSubIdx] || chars[0] || '你';

            if (appState.wrMode === 'guided') {
                initHanziWriter(activeChar);
            } else {
                appState.userStrokes = [];
                drawFreehandCanvasBackground();
            }
        }

        function initHanziWriter(character) {
            const holder = document.getElementById('hanzi-writer-holder');
            holder.innerHTML = ''; // Clear previous SVG

            const targetWidth = Math.min(250, window.innerWidth - 80);

            try {
                if (typeof HanziWriter !== 'undefined') {
                    appState.currentWriter = HanziWriter.create('hanzi-writer-holder', character, {
                        width: targetWidth,
                        height: targetWidth,
                        padding: 12,
                        showOutline: appState.wrShowTraceHint,
                        strokeAnimationSpeed: 1.2,
                        delayBetweenStrokes: 150,
                        strokeColor: '#0f766e',
                        radicalColor: '#dc2626',
                        outlineColor: '#cbd5e1',
                        drawingWidth: 16,
                        showHintAfterMisses: 1,
                        highlightOnComplete: true,
                        onComplete: function() {
                            document.getElementById('wr-status-text').innerText = "Tuyệt vời! Bạn đã hoàn thành đúng chữ này 🎉";
                        }
                    });

                    // Start guided quiz mode
                    appState.currentWriter.quiz();
                    document.getElementById('wr-status-text').innerText = "Dùng chuột/tay viết theo từng nét Chữ Hán bên trên!";
                } else {
                    document.getElementById('wr-status-text').innerText = "Đang tải thư viện HanziWriter...";
                }
            } catch (err) {
                console.error("HanziWriter error:", err);
                document.getElementById('wr-status-text').innerText = "Vui lòng chọn chế độ Vẽ tự do Canvas.";
            }
        }

        let isDrawing = false;
        let lastDrawPos = null;

        function setupFreehandCanvasEvents() {
            const canvas = document.getElementById("wrCanvas");
            if (!canvas) return;

            canvas.addEventListener("mousedown", startDrawing);
            canvas.addEventListener("mousemove", drawMove);
            canvas.addEventListener("mouseup", endDrawing);
            canvas.addEventListener("mouseleave", endDrawing);

            canvas.addEventListener("touchstart", startDrawing, { passive: false });
            canvas.addEventListener("touchmove", drawMove, { passive: false });
            canvas.addEventListener("touchend", endDrawing);
        }

        function drawFreehandCanvasBackground() {
            const canvas = document.getElementById("wrCanvas");
            if (!canvas) return;
            const ctx = canvas.getContext("2d");

            const w = canvas.width, h = canvas.height;
            ctx.clearRect(0, 0, w, h);

            const item = appState.filteredVocab[appState.wrIndex];
            if (item && item.hanzi && appState.wrShowTraceHint) {
                const currentCh = item.hanzi[appState.wrCharSubIdx] || item.hanzi[0];
                ctx.font = "185px 'Noto Serif SC', 'Kaiti SC', serif";
                ctx.fillStyle = "rgba(15, 118, 110, 0.18)";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(currentCh, w / 2, h / 2 + 10);
            }

            if (appState.userStrokes.length > 0) {
                ctx.strokeStyle = "#0f766e";
                ctx.lineWidth = 8;
                ctx.lineCap = "round";
                ctx.lineJoin = "round";

                appState.userStrokes.forEach(stroke => {
                    if (stroke.length < 2) return;
                    ctx.beginPath();
                    ctx.moveTo(stroke[0].x, stroke[0].y);
                    for (let i = 1; i < stroke.length; i++) {
                        ctx.lineTo(stroke[i].x, stroke[i].y);
                    }
                    ctx.stroke();
                });
            }
        }

        function getCanvasPos(e, canvas) {
            const rect = canvas.getBoundingClientRect();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            return {
                x: (clientX - rect.left) * (canvas.width / rect.width),
                y: (clientY - rect.top) * (canvas.height / rect.height)
            };
        }

        function startDrawing(e) {
            isDrawing = true;
            const canvas = document.getElementById("wrCanvas");
            lastDrawPos = getCanvasPos(e, canvas);
            appState.userStrokes.push([lastDrawPos]);
            e.preventDefault();
        }

        function drawMove(e) {
            if (!isDrawing) return;
            const canvas = document.getElementById("wrCanvas");
            const ctx = canvas.getContext("2d");
            const currentPos = getCanvasPos(e, canvas);

            ctx.strokeStyle = "#0f766e";
            ctx.lineWidth = 8;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";

            ctx.beginPath();
            ctx.moveTo(lastDrawPos.x, lastDrawPos.y);
            ctx.lineTo(currentPos.x, currentPos.y);
            ctx.stroke();

            lastDrawPos = currentPos;
            const currentStroke = appState.userStrokes[appState.userStrokes.length - 1];
            if (currentStroke) currentStroke.push(currentPos);

            e.preventDefault();
        }

        function endDrawing() {
            isDrawing = false;
        }

        function setupListeningEvents() {
            document.getElementById('btn-repeat-listening-audio').addEventListener('click', () => {
                if (appState.currentListeningQuestion) {
                    speakHanzi(appState.currentListeningQuestion.hanzi);
                }
            });

            document.getElementById('btn-listening-main-play').addEventListener('click', () => {
                if (appState.currentListeningQuestion) {
                    speakHanzi(appState.currentListeningQuestion.hanzi);
                }
            });

            document.getElementById('btn-toggle-listening-hint').addEventListener('click', () => {
                const hintContainer = document.getElementById('listening-hint-container');
                hintContainer.classList.toggle('hidden');
            });

            document.getElementById('btn-listening-next').addEventListener('click', () => {
                initListeningQuiz();
            });
        }

        function initListeningQuiz() {
            if (appState.filteredVocab.length === 0) return;

            document.getElementById('listening-feedback').classList.add('hidden');
            document.getElementById('btn-listening-next').classList.add('hidden');
            document.getElementById('listening-hint-container').classList.add('hidden');

            const randIndex = Math.floor(Math.random() * appState.filteredVocab.length);
            const targetWord = appState.filteredVocab[randIndex];
            appState.currentListeningQuestion = targetWord;

            document.getElementById('listening-hint-hanzi').innerText = targetWord.hanzi;
            document.getElementById('listening-hint-pinyin').innerText = targetWord.pinyin;

            const options = [targetWord.meaning];
            while (options.length < 4 && options.length < appState.vocabulary.length) {
                const randomOther = appState.vocabulary[Math.floor(Math.random() * appState.vocabulary.length)].meaning;
                if (!options.includes(randomOther)) {
                    options.push(randomOther);
                }
            }
            options.sort(() => Math.random() - 0.5);

            const grid = document.getElementById('listening-options-grid');
            grid.innerHTML = '';

            options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = "p-4 rounded-2xl border-2 border-purple-200 bg-purple-50/50 hover:bg-purple-100/80 text-purple-950 font-bold text-base transition duration-200 text-left shadow-xs flex items-center justify-between";
                btn.innerHTML = `<span>${opt}</span> <i class="fa-regular fa-circle text-purple-300"></i>`;
                
                btn.addEventListener('click', () => {
                    checkListeningAnswer(btn, opt, targetWord.meaning);
                });
                grid.appendChild(btn);
            });

            setTimeout(() => {
                speakHanzi(targetWord.hanzi);
            }, 300);
        }

        function checkListeningAnswer(btnEl, selectedMeaning, correctMeaning) {
            const grid = document.getElementById('listening-options-grid');
            const allBtns = grid.querySelectorAll('button');
            allBtns.forEach(b => b.disabled = true);

            const feedback = document.getElementById('listening-feedback');
            feedback.classList.remove('hidden');

            appState.listeningTotal++;

            if (selectedMeaning === correctMeaning) {
                btnEl.className = "p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-100 text-emerald-950 font-bold text-base shadow-sm flex items-center justify-between";
                btnEl.querySelector('i').className = "fa-solid fa-circle-check text-emerald-600 text-lg";

                feedback.className = "w-full p-4 rounded-2xl bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold text-sm text-center mt-1";
                feedback.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-600 mr-2"></i> Chính xác! Chữ Hán: <span class="font-hanzi text-xl font-black">${appState.currentListeningQuestion.hanzi}</span> (${appState.currentListeningQuestion.pinyin})`;

                appState.listeningScore++;
                appState.listeningStreak++;

                if (appState.listeningStreak % 5 === 0) {
                    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
                }
            } else {
                btnEl.className = "p-4 rounded-2xl border-2 border-rose-400 bg-rose-100 text-rose-950 font-bold text-base shadow-sm flex items-center justify-between";
                btnEl.querySelector('i').className = "fa-solid fa-circle-xmark text-rose-600 text-lg";

                allBtns.forEach(b => {
                    if (b.innerText.trim() === correctMeaning) {
                        b.className = "p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-100 text-emerald-950 font-bold text-base shadow-sm flex items-center justify-between";
                    }
                });

                feedback.className = "w-full p-4 rounded-2xl bg-rose-100 text-rose-900 border border-rose-300 font-bold text-sm text-center mt-1";
                feedback.innerHTML = `<i class="fa-solid fa-triangle-exclamation text-rose-600 mr-2"></i> Chưa đúng! Đáp án đúng: <strong>${correctMeaning}</strong> (${appState.currentListeningQuestion.hanzi})`;

                appState.listeningStreak = 0;
            }

            document.getElementById('listening-score').innerText = `${appState.listeningScore} / ${appState.listeningTotal}`;
            document.getElementById('listening-streak').innerText = appState.listeningStreak;
            document.getElementById('btn-listening-next').classList.remove('hidden');
        }

        function setupQuizEvents() {
            document.getElementById('btn-quiz-audio').addEventListener('click', () => {
                if (appState.currentQuizQuestion) {
                    speakHanzi(appState.currentQuizQuestion.hanzi);
                }
            });

            document.getElementById('btn-quiz-next').addEventListener('click', () => {
                initQuiz();
            });

            document.getElementById('btn-reset-quiz').addEventListener('click', () => {
                appState.quizScore = 0;
                appState.quizStreak = 0;
                document.getElementById('quiz-score').innerText = '0';
                document.getElementById('quiz-streak').innerText = '0';
                initQuiz();
            });
        }

        function initQuiz() {
            if (appState.filteredVocab.length === 0) return;

            document.getElementById('quiz-feedback').classList.add('hidden');
            document.getElementById('btn-quiz-next').classList.add('hidden');

            const randIndex = Math.floor(Math.random() * appState.filteredVocab.length);
            const targetWord = appState.filteredVocab[randIndex];
            appState.currentQuizQuestion = targetWord;

            document.getElementById('quiz-question-hanzi').innerText = targetWord.hanzi;
            document.getElementById('quiz-question-pinyin').innerText = targetWord.pinyin;

            const options = [targetWord.meaning];
            while (options.length < 4 && options.length < appState.vocabulary.length) {
                const randomOther = appState.vocabulary[Math.floor(Math.random() * appState.vocabulary.length)].meaning;
                if (!options.includes(randomOther)) {
                    options.push(randomOther);
                }
            }
            options.sort(() => Math.random() - 0.5);

            const grid = document.getElementById('quiz-options-grid');
            grid.innerHTML = '';

            options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = "p-4 rounded-2xl border-2 border-brand-200 bg-brand-50/50 hover:bg-brand-100 text-brand-950 font-bold text-base transition duration-200 text-left shadow-xs flex items-center justify-between";
                btn.innerHTML = `<span>${opt}</span> <i class="fa-regular fa-circle text-brand-300"></i>`;
                
                btn.addEventListener('click', () => {
                    checkQuizAnswer(btn, opt, targetWord.meaning);
                });
                grid.appendChild(btn);
            });
        }

        function checkQuizAnswer(btnEl, selectedMeaning, correctMeaning) {
            const grid = document.getElementById('quiz-options-grid');
            const allBtns = grid.querySelectorAll('button');
            allBtns.forEach(b => b.disabled = true);

            const feedback = document.getElementById('quiz-feedback');
            feedback.classList.remove('hidden');

            if (selectedMeaning === correctMeaning) {
                btnEl.className = "p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-100 text-emerald-950 font-bold text-base shadow-sm flex items-center justify-between";
                btnEl.querySelector('i').className = "fa-solid fa-circle-check text-emerald-600 text-lg";

                feedback.className = "w-full p-3.5 rounded-xl bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold text-sm text-center mt-2";
                feedback.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-600 mr-2"></i> Chính xác! +10 điểm`;

                appState.quizScore += 10;
                appState.quizStreak++;
            } else {
                btnEl.className = "p-4 rounded-2xl border-2 border-rose-400 bg-rose-100 text-rose-950 font-bold text-base shadow-sm flex items-center justify-between";
                btnEl.querySelector('i').className = "fa-solid fa-circle-xmark text-rose-600 text-lg";

                allBtns.forEach(b => {
                    if (b.innerText.trim() === correctMeaning) {
                        b.className = "p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-100 text-emerald-950 font-bold text-base shadow-sm flex items-center justify-between";
                    }
                });

                feedback.className = "w-full p-3.5 rounded-xl bg-rose-100 text-rose-900 border border-rose-300 font-bold text-sm text-center mt-2";
                feedback.innerHTML = `<i class="fa-solid fa-triangle-exclamation text-rose-600 mr-2"></i> Sai rồi! Đáp án đúng: <strong>${correctMeaning}</strong>`;

                appState.quizStreak = 0;
            }

            document.getElementById('quiz-score').innerText = appState.quizScore;
            document.getElementById('quiz-streak').innerText = appState.quizStreak;
            document.getElementById('btn-quiz-next').classList.remove('hidden');
        }

        function setupDictionaryEvents() {
            document.getElementById('dict-search-input').addEventListener('input', (e) => {
                renderDictionary(e.target.value);
            });
        }

        function renderDictionary(searchTerm = '') {
            const tbody = document.getElementById('dict-table-body');
            tbody.innerHTML = '';

            const term = searchTerm.toLowerCase().trim();
            const filtered = appState.vocabulary.filter(item => {
                return item.hanzi.includes(term) || 
                       item.pinyin.toLowerCase().includes(term) || 
                       item.meaning.toLowerCase().includes(term);
            });

            document.getElementById('dict-count-badge').innerText = `Tổng: ${filtered.length} từ`;

            filtered.forEach(item => {
                const tr = document.createElement('tr');
                tr.className = "hover:bg-brand-50/60 transition";
                
                const isFav = appState.favorites.includes(item.id);

                tr.innerHTML = `
                    <td class="p-4 font-hanzi font-bold text-2xl text-gradient-primary">${item.hanzi}</td>
                    <td class="p-4">
                        <div class="font-bold text-brand-700 text-sm">${item.pinyin}</div>
                        <div class="text-xs text-slate-500">${item.hanViet || ''}</div>
                    </td>
                    <td class="p-4 font-bold text-brand-950">${item.meaning}</td>
                    <td class="p-4">
                        <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-brand-100 text-brand-700 border border-brand-200">
                            ${item.hsk}
                        </span>
                    </td>
                    <td class="p-4 text-center">
                        <button onclick="speakHanzi('${item.hanzi}')" class="p-2 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-600 transition" title="Nghe phát âm">
                            <i class="fa-solid fa-volume-high"></i>
                        </button>
                    </td>
                    <td class="p-4 text-center">
                        <button onclick="toggleFavoriteDict('${item.id}')" class="text-xl transition p-1">
                            ${isFav ? '<i class="fa-solid fa-heart text-rose-500"></i>' : '<i class="fa-regular fa-heart text-slate-300 hover:text-rose-500"></i>'}
                        </button>
                    </td>
                `;
                tbody.appendChild(tr);
            });
        }

        window.toggleFavoriteDict = function(id) {
            const idx = appState.favorites.indexOf(id);
            if (idx > -1) {
                appState.favorites.splice(idx, 1);
            } else {
                appState.favorites.push(id);
            }
            localStorage.setItem('zh_favs', JSON.stringify(appState.favorites));
            renderDictionary(document.getElementById('dict-search-input').value);
        };

        function setupSettingsModalEvents() {
            const modal = document.getElementById('settings-modal');
            const fieldMap = {
                'setting-show-hanzi': 'hanzi',
                'setting-show-pinyin': 'pinyin',
                'setting-show-hanviet': 'hanviet',
                'setting-show-meaning': 'meaning'
            };

            // Sync checkboxes with saved state on load
            Object.keys(fieldMap).forEach(inputId => {
                document.getElementById(inputId).checked = appState.cardFieldsVisible[fieldMap[inputId]];
            });

            // Sync status-filter radio buttons with saved state on load
            const statusRadioMap = {
                'setting-status-all': 'ALL',
                'setting-status-review': 'REVIEW',
                'setting-status-mastered': 'MASTERED'
            };
            Object.keys(statusRadioMap).forEach(inputId => {
                document.getElementById(inputId).checked = (statusRadioMap[inputId] === appState.statusFilter);
                document.getElementById(inputId).addEventListener('change', (e) => {
                    if (!e.target.checked) return;
                    appState.statusFilter = statusRadioMap[inputId];
                    localStorage.setItem('zh_status_filter', appState.statusFilter);
                    applyFilter();
                });
            });

            document.getElementById('btn-open-settings-modal').addEventListener('click', () => {
                // Re-sync radios in case status changed elsewhere (e.g. mark mastered/unlearned)
                Object.keys(statusRadioMap).forEach(inputId => {
                    document.getElementById(inputId).checked = (statusRadioMap[inputId] === appState.statusFilter);
                });
                modal.classList.remove('hidden');
            });
            document.getElementById('btn-close-settings-modal').addEventListener('click', () => {
                modal.classList.add('hidden');
            });
            document.getElementById('btn-done-settings-modal').addEventListener('click', () => {
                modal.classList.add('hidden');
            });

            // Sync auto-play speed select with saved state on load
            const speedSelect = document.getElementById('setting-auto-play-speed');
            speedSelect.value = String(appState.autoPlaySpeed);
            speedSelect.addEventListener('change', (e) => {
                appState.autoPlaySpeed = parseInt(e.target.value);
                localStorage.setItem('zh_autoplay_speed', String(appState.autoPlaySpeed));
                if (appState.autoPlayActive) {
                    stopAutoPlay();
                    startAutoPlay();
                }
            });

            Object.keys(fieldMap).forEach(inputId => {
                document.getElementById(inputId).addEventListener('change', (e) => {
                    appState.cardFieldsVisible[fieldMap[inputId]] = e.target.checked;
                    localStorage.setItem('zh_card_fields', JSON.stringify(appState.cardFieldsVisible));
                    renderFlashcard();
                });
            });
        }

        function setupModalEvents() {
            const addModal = document.getElementById('add-word-modal');
            document.getElementById('btn-open-add-modal').addEventListener('click', () => {
                addModal.classList.remove('hidden');
            });
            document.getElementById('btn-close-modal').addEventListener('click', () => {
                addModal.classList.add('hidden');
            });
            document.getElementById('btn-cancel-modal').addEventListener('click', () => {
                addModal.classList.add('hidden');
            });

            document.getElementById('add-word-form').addEventListener('submit', (e) => {
                e.preventDefault();
                const newWord = {
                    id: 'custom-' + Date.now(),
                    hanzi: document.getElementById('input-hanzi').value.trim(),
                    pinyin: document.getElementById('input-pinyin').value.trim(),
                    hanViet: document.getElementById('input-hanviet').value.trim(),
                    meaning: document.getElementById('input-meaning').value.trim(),
                    exampleCn: document.getElementById('input-example-cn').value.trim(),
                    exampleVi: document.getElementById('input-example-vi').value.trim(),
                    hsk: 'HSK1'
                };

                appState.vocabulary.push(newWord);
                const customOnly = appState.vocabulary.filter(v => v.id.startsWith('custom-'));
                localStorage.setItem('zh_custom_vocab', JSON.stringify(customOnly));

                showToast("Thêm từ mới thành công! 🎉");
                addModal.classList.add('hidden');
                document.getElementById('add-word-form').reset();
                applyFilter();
            });

            const importModal = document.getElementById('import-excel-modal');
            document.getElementById('btn-open-import-modal').addEventListener('click', () => {
                importModal.classList.remove('hidden');
            });
            document.getElementById('btn-close-import-modal').addEventListener('click', () => {
                importModal.classList.add('hidden');
            });
            document.getElementById('btn-cancel-import-modal').addEventListener('click', () => {
                importModal.classList.add('hidden');
            });

            const dropZone = document.getElementById('excel-drop-zone');
            const fileInput = document.getElementById('excel-file-input');

            dropZone.addEventListener('click', () => fileInput.click());

            fileInput.addEventListener('change', (e) => {
                if (e.target.files.length > 0) {
                    processExcelFile(e.target.files[0]);
                }
            });

            document.getElementById('btn-download-template').addEventListener('click', () => {
                const sampleData = [
                    { "Hán tự": "高", "Pinyin": "gāo", "Hán Việt": "Cao", "Nghĩa": "Cao", "Ví dụ câu": "他很高。" },
                    { "Hán tự": "开心", "Pinyin": "kāixīn", "Hán Việt": "Khai Tâm", "Nghĩa": "Vui vẻ", "Ví dụ câu": "我今天很开心。" }
                ];
                const ws = XLSX.utils.json_to_sheet(sampleData);
                const wb = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(wb, ws, "TuVungMau");
                XLSX.writeFile(wb, "TuVungMau_LanMeiFlashcard.xlsx");
            });
        }

        function processExcelFile(file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const data = new Uint8Array(e.target.result);
                    const workbook = XLSX.read(data, { type: 'array' });
                    const firstSheet = workbook.SheetNames[0];
                    const rows = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheet]);

                    let count = 0;
                    rows.forEach((row, i) => {
                        const hanzi = row['Hán tự'] || row['Hanzi'] || row['hanzi'];
                        const pinyin = row['Pinyin'] || row['pinyin'] || '';
                        const meaning = row['Nghĩa'] || row['Meaning'] || row['meaning'];
                        const exampleCn = row['Ví dụ câu'] || row['Ví dụ'] || row['Example'] || '';

                        if (hanzi && meaning) {
                            appState.vocabulary.push({
                                id: 'excel-' + Date.now() + '-' + i,
                                hanzi: String(hanzi).trim(),
                                pinyin: String(pinyin).trim(),
                                hanViet: String(row['Hán Việt'] || '').trim(),
                                meaning: String(meaning).trim(),
                                exampleCn: String(exampleCn).trim(),
                                hsk: 'HSK1'
                            });
                            count++;
                        }
                    });

                    if (count > 0) {
                        const customOnly = appState.vocabulary.filter(v => v.id.startsWith('custom-') || v.id.startsWith('excel-'));
                        localStorage.setItem('zh_custom_vocab', JSON.stringify(customOnly));
                        showToast(`Đã nhập thành công ${count} từ vựng! 🎉`);
                        document.getElementById('import-excel-modal').classList.add('hidden');
                        applyFilter();
                    } else {
                        showToast("Không tìm thấy dữ liệu từ vựng hợp lệ!", "error");
                    }
                } catch (err) {
                    console.error(err);
                    showToast("Lỗi đọc file Excel!", "error");
                }
            };
            reader.readAsArrayBuffer(file);
        }
