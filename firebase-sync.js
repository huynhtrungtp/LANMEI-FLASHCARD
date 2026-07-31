/* =====================================================================
   FIREBASE SYNC — đăng nhập Google + đồng bộ dữ liệu qua Firestore
   ---------------------------------------------------------------------
   Có 2 loại dữ liệu:
   - DÙNG CHUNG (SHARED): từ vựng tự thêm (zh_custom_vocab) — ai đăng
     nhập cũng thấy giống nhau, ai thêm/sửa thì tất cả người khác đều
     thấy (đồng bộ gần như thời gian thực).
   - RIÊNG TỪNG NGƯỜI (PRIVATE): yêu thích, đã thuộc, streak, cài đặt...
     — mỗi tài khoản Google có dữ liệu riêng, không ai thấy của ai.
   ===================================================================== */

// >>> DÁN CẤU HÌNH FIREBASE CỦA BẠN VÀO ĐÂY <<<
const firebaseConfig = {
    apiKey: "AIzaSyDFEuYBMSAZX-Q_O_sfxiUajCQkZbUJ9rM",
    authDomain: "lanmei-flashcard.firebaseapp.com",
    projectId: "lanmei-flashcard",
    storageBucket: "lanmei-flashcard.firebasestorage.app",
    messagingSenderId: "599904621255",
    appId: "1:599904621255:web:c24cd1c8b0a8204f2724e2"
};

// Key dùng CHUNG cho mọi người dùng (lưu tại shared/vocabulary)
const SHARED_KEYS = ['zh_custom_vocab'];

// Key RIÊNG cho từng người (lưu tại users/{uid})
const PRIVATE_KEYS = [
    'zh_favs', 'zh_mastered', 'zh_unlearned', 'zh_streak', 'zh_last_date',
    'zh_status_filter', 'zh_autoplay_speed', 'zh_voice_gender', 'zh_card_fields'
];

const SHARED_DOC_REF_PATH = ['shared', 'vocabulary'];

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

let appScriptLoaded = false;
let deniedInProgress = false;
let privatePushTimer = null;
let sharedPushTimer = null;
let isApplyingCloudData = false; // tránh vòng lặp khi đang tự ghi dữ liệu từ cloud xuống
let sharedListenerUnsub = null;

const gateEl = document.getElementById('auth-gate');
const gateLoadingEl = document.getElementById('auth-gate-loading');
const gateLoginEl = document.getElementById('auth-gate-login');
const gateDeniedEl = document.getElementById('auth-gate-denied');
const btnTryAnother = document.getElementById('btn-try-another');
const appRootEl = document.getElementById('app-root');
const userBadgeEl = document.getElementById('user-badge');
const userNameEl = document.getElementById('user-name');
const userAvatarEl = document.getElementById('user-avatar');
const btnGoogleLogin = document.getElementById('btn-google-login');
const btnLogout = document.getElementById('btn-logout');

function showGate(mode) {
    gateEl.classList.remove('hidden');
    appRootEl.style.display = 'none';
    gateLoadingEl.classList.toggle('hidden', mode !== 'loading');
    gateLoginEl.classList.toggle('hidden', mode !== 'login');
    gateLoginEl.classList.toggle('flex', mode === 'login');
    gateDeniedEl.classList.toggle('hidden', mode !== 'denied');
    gateDeniedEl.classList.toggle('flex', mode === 'denied');
}

function showApp() {
    gateEl.classList.add('hidden');
    appRootEl.style.display = 'contents';
}

function loadAppScriptOnce() {
    if (appScriptLoaded) return;
    appScriptLoaded = true;
    const s = document.createElement('script');
    s.src = 'app.js';
    document.body.appendChild(s);
}

// Sau khi từ vựng dùng chung thay đổi (do người khác thêm, hoặc do
// vừa nạp từ cloud lúc đăng nhập), cập nhật lại danh sách đang hiển thị
// trên màn hình nếu app.js đã tải xong.
function refreshVocabularyInUI() {
    try {
        if (typeof DEFAULT_VOCABULARY === 'undefined' || typeof appState === 'undefined') return;
        const savedCustom = localStorage.getItem('zh_custom_vocab');
        const customArr = savedCustom ? JSON.parse(savedCustom) : [];
        appState.vocabulary = [...DEFAULT_VOCABULARY, ...customArr];
        if (typeof applyFilter === 'function') applyFilter();
        if (typeof updateStatsUI === 'function') updateStatsUI();
    } catch (err) {
        console.error('Lỗi cập nhật từ vựng trên giao diện:', err);
    }
}

async function pullPrivateData(uid) {
    const snap = await db.collection('users').doc(uid).get();
    if (!snap.exists) return;
    const data = snap.data() || {};
    isApplyingCloudData = true;
    PRIVATE_KEYS.forEach(key => {
        if (Object.prototype.hasOwnProperty.call(data, key) && data[key] !== undefined && data[key] !== null) {
            localStorage.setItem(key, data[key]);
        }
    });
    isApplyingCloudData = false;
}

async function pullSharedDataOnce() {
    const snap = await db.collection(SHARED_DOC_REF_PATH[0]).doc(SHARED_DOC_REF_PATH[1]).get();
    if (!snap.exists) return;
    const data = snap.data() || {};
    isApplyingCloudData = true;
    SHARED_KEYS.forEach(key => {
        if (Object.prototype.hasOwnProperty.call(data, key) && data[key] !== undefined && data[key] !== null) {
            localStorage.setItem(key, data[key]);
        }
    });
    isApplyingCloudData = false;
}

function startSharedRealtimeListener() {
    if (sharedListenerUnsub) return; // đã lắng nghe rồi, không tạo trùng
    sharedListenerUnsub = db.collection(SHARED_DOC_REF_PATH[0]).doc(SHARED_DOC_REF_PATH[1])
        .onSnapshot(snap => {
            if (!snap.exists) return;
            const data = snap.data() || {};
            let changed = false;
            isApplyingCloudData = true;
            SHARED_KEYS.forEach(key => {
                if (Object.prototype.hasOwnProperty.call(data, key) && data[key] !== undefined && data[key] !== null) {
                    if (localStorage.getItem(key) !== data[key]) {
                        localStorage.setItem(key, data[key]);
                        changed = true;
                    }
                }
            });
            isApplyingCloudData = false;
            if (changed) refreshVocabularyInUI();
        }, err => console.error('Lỗi lắng nghe từ vựng dùng chung:', err));
}

function pushPrivateToCloud(uid) {
    if (isApplyingCloudData) return;
    clearTimeout(privatePushTimer);
    privatePushTimer = setTimeout(() => {
        const payload = {};
        PRIVATE_KEYS.forEach(key => {
            const val = localStorage.getItem(key);
            if (val !== null) payload[key] = val;
        });
        payload.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
        db.collection('users').doc(uid).set(payload, { merge: true })
            .catch(err => console.error('Lỗi đồng bộ dữ liệu riêng:', err));
    }, 1200);
}

function pushSharedToCloud() {
    if (isApplyingCloudData) return;
    clearTimeout(sharedPushTimer);
    sharedPushTimer = setTimeout(() => {
        const payload = {};
        SHARED_KEYS.forEach(key => {
            const val = localStorage.getItem(key);
            if (val !== null) payload[key] = val;
        });
        payload.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
        payload.updatedBy = auth.currentUser ? (auth.currentUser.displayName || auth.currentUser.email) : 'unknown';
        db.collection(SHARED_DOC_REF_PATH[0]).doc(SHARED_DOC_REF_PATH[1]).set(payload, { merge: true })
            .catch(err => console.error('Lỗi đồng bộ từ vựng dùng chung:', err));
    }, 1200);
}

// Ghi đè localStorage.setItem MỘT LẦN DUY NHẤT để mọi chỗ trong app.js
// tự động đẩy dữ liệu lên đúng nơi (chung hoặc riêng) mà không cần sửa app.js.
const nativeSetItem = Storage.prototype.setItem.bind(localStorage);
Storage.prototype.setItem = function (key, value) {
    nativeSetItem(key, value);
    if (isApplyingCloudData || !auth.currentUser) return;
    if (SHARED_KEYS.includes(key)) {
        pushSharedToCloud();
    } else if (PRIVATE_KEYS.includes(key)) {
        pushPrivateToCloud(auth.currentUser.uid);
    }
};

async function isEmailAllowed(email) {
    if (!email) return false;
    const snap = await db.collection('config').doc('allowlist').get();
    if (!snap.exists) return false; // chưa cấu hình gì -> mặc định chặn hết để an toàn
    const data = snap.data() || {};
    const emails = Array.isArray(data.emails) ? data.emails : [];
    const normalized = emails.map(e => String(e).trim().toLowerCase());
    return normalized.includes(email.trim().toLowerCase());
}

btnTryAnother.addEventListener('click', () => {
    auth.signOut();
});


btnGoogleLogin.addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).catch(err => {
        console.error(err);
        alert('Đăng nhập thất bại: ' + err.message);
    });
});

btnLogout.addEventListener('click', () => {
    auth.signOut();
});

auth.onAuthStateChanged(async (user) => {
    if (user) {
        showGate('loading');
        let allowed = false;
        try {
            allowed = await isEmailAllowed(user.email);
        } catch (err) {
            console.error('Lỗi kiểm tra quyền truy cập:', err);
        }
        if (!allowed) {
            deniedInProgress = true;
            await auth.signOut();
            showGate('denied');
            return;
        }
        try {
            await Promise.all([pullPrivateData(user.uid), pullSharedDataOnce()]);
        } catch (err) {
            console.error('Lỗi tải dữ liệu từ Firestore:', err);
        }
        userBadgeEl.style.display = 'flex';
        userNameEl.textContent = user.displayName || user.email || 'Người dùng';
        if (user.photoURL) userAvatarEl.src = user.photoURL;
        showApp();
        loadAppScriptOnce();
        startSharedRealtimeListener();
    } else {
        userBadgeEl.style.display = 'none';
        if (deniedInProgress) {
            deniedInProgress = false; // giữ nguyên màn hình 'denied' đã hiện, không làm gì thêm
        } else if (!appScriptLoaded) {
            showGate('login');
        } else {
            // Đã đăng xuất giữa chừng: tải lại trang để reset trạng thái app
            location.reload();
        }
    }
});
