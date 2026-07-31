# Hướng dẫn triển khai LanMei Flashcard online (nhiều người dùng, đồng bộ dữ liệu)

Kiến trúc: **Cloudflare Pages** host file tĩnh (HTML/JS/CSS) → **GitHub** lưu code và tự động deploy mỗi khi push → **Firebase** (Auth + Firestore) lo đăng nhập và đồng bộ tiến độ học của từng người dùng qua nhiều thiết bị.

Chi phí: cả 3 dịch vụ đều **miễn phí** ở quy mô cá nhân/lớp học (Cloudflare Pages free, Firebase Spark plan free — đủ cho vài chục nghìn lượt đọc/ghi Firestore mỗi ngày).

---

## Bước 1 — Tạo Firebase project

1. Vào https://console.firebase.google.com → **Add project** → đặt tên (vd `lanmei-flashcard`) → bỏ qua Google Analytics nếu không cần.
2. Menu trái → **Build > Authentication** → tab **Sign-in method** → bật **Google**.
3. Menu trái → **Build > Firestore Database** → **Create database** → chọn **Production mode** → chọn khu vực gần bạn (vd `asia-southeast1`).
4. Vào **Project settings** (icon bánh răng) → mục **Your apps** → bấm **</>** (Web app) → đặt tên → **Register app**. Firebase sẽ hiện đoạn `firebaseConfig` dạng:

```js
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

5. Copy đoạn này, dán đè vào biến `firebaseConfig` ở **đầu file `firebase-sync.js`** (thay các giá trị `YOUR_...`).

### Cấu hình rules cho Firestore
Vào **Firestore Database > Rules**, dán rule sau rồi **Publish** (mỗi người dùng chỉ đọc/ghi được dữ liệu của chính mình):

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

---

## Bước 2 — Đưa code lên GitHub

```bash
cd duong-dan-toi-thu-muc-project
git init
git add .
git commit -m "LanMei Flashcard - Firebase sync"
```

Tạo repo mới (public hoặc private đều được) tại https://github.com/new, rồi:

```bash
git remote add origin https://github.com/<ten-ban>/<ten-repo>.git
git branch -M main
git push -u origin main
```

Cần có 3 file ở gốc repo: `index.html`, `app.js`, `firebase-sync.js`.

---

## Bước 3 — Deploy qua Cloudflare Pages

1. Vào https://dash.cloudflare.com → **Workers & Pages** → **Create application** → tab **Pages** → **Connect to Git**.
2. Chọn repo vừa tạo → **Begin setup**.
3. Ở phần **Build settings**:
   - **Framework preset**: `None`
   - **Build command**: để trống
   - **Build output directory**: `/` (thư mục gốc, vì đây là site tĩnh không cần build)
4. Bấm **Save and Deploy**. Sau ~30 giây bạn sẽ có URL dạng `https://ten-project.pages.dev`.
5. Từ nay, **mỗi lần bạn `git push` lên `main`, Cloudflare tự động build & deploy lại** — không cần thao tác thủ công.

(Tuỳ chọn) Gắn domain riêng: trong project Pages → **Custom domains** → **Set up a domain**, làm theo hướng dẫn nếu domain đã quản lý DNS trên Cloudflare.

---

## Bước 4 — Cho phép domain Cloudflare đăng nhập được với Firebase

Firebase Auth chỉ cho phép đăng nhập từ các domain đã được whitelist:

1. Firebase Console → **Authentication > Settings > Authorized domains** → **Add domain**.
2. Thêm domain Cloudflare Pages của bạn, vd: `ten-project.pages.dev` (và domain riêng nếu có).

Thiếu bước này thì nút "Đăng nhập bằng Google" sẽ báo lỗi `auth/unauthorized-domain`.

---

## Cách hoạt động sau khi setup

- Người dùng mở trang → thấy màn hình đăng nhập Google.
- Sau khi đăng nhập, dữ liệu học (từ yêu thích, đã thuộc, từ vựng tự thêm, cài đặt...) được:
  - **Tải xuống** từ Firestore về máy khi mở app trên thiết bị mới.
  - **Tự động đẩy lên** Firestore mỗi khi có thay đổi (debounce ~1.2s), nên học trên điện thoại xong mở laptop vẫn thấy đồng bộ.
- Mỗi người dùng có 1 document riêng tại `users/{uid}` trong Firestore, không ai xem được dữ liệu của người khác (nhờ rules ở Bước 1).

## Cập nhật code sau này

Chỉ cần sửa file rồi:
```bash
git add .
git commit -m "mô tả thay đổi"
git push
```
Cloudflare Pages sẽ tự deploy bản mới trong vài chục giây.
