# LLM Engineer Thực Chiến

Landing page cho khóa học LLM Engineer Thực Chiến, xây dựng bằng React, Vite và Tailwind CSS.

## Chạy local

Yêu cầu: Node.js 24 và Yarn 1.x.

```bash
cp .env.example .env
yarn install --frozen-lockfile
yarn dev
```

Ứng dụng chạy tại `http://localhost:3000`.

Đặt các biến sau trong `.env` để form đăng ký hoạt động:

- `VITE_GOOGLE_SCRIPT_URL`: URL Google Apps Script Web App.
- `VITE_TURNSTILE_SITE_KEY`: Cloudflare Turnstile site key. Giá trị mặc định là test key luôn thành công, chỉ dùng cho local.

## Chạy bằng Docker

```bash
cp .env.example .env
docker compose up --build -d
```

Ứng dụng chạy tại `http://localhost:7500`. Cổng host được đọc từ biến `APP_PORT` trong `.env`:

```bash
APP_PORT=8080 docker compose up --build -d
```

Các biến `VITE_*` được đưa vào bundle tại thời điểm build. Sau khi thay đổi giá trị, cần build lại image.

## Xác minh Turnstile trong Google Apps Script

Widget phía trình duyệt gửi token trong trường `cf-turnstile-response`. Google Apps Script phải xác minh token trước khi lưu đăng ký:

```javascript
function verifyTurnstile_(token) {
  const secret = PropertiesService.getScriptProperties()
    .getProperty('TURNSTILE_SECRET_KEY');

  if (!secret || !token) return false;

  const response = UrlFetchApp.fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'post',
      payload: {
        secret: secret,
        response: token,
      },
      muteHttpExceptions: true,
    },
  );
  const result = JSON.parse(response.getContentText());

  return result.success === true
    && result.action === 'course_registration';
}

function doPost(e) {
  const token = e.parameter['cf-turnstile-response'];

  if (!verifyTurnstile_(token)) {
    return ContentService.createTextOutput('Forbidden');
  }

  // Chỉ lưu thông tin đăng ký sau khi xác minh thành công.
}
```

Lưu secret key trong Script Properties với tên `TURNSTILE_SECRET_KEY`; không đặt secret trong `.env` frontend. Test secret tương ứng với test site key là `1x0000000000000000000000000000000AA`. Trên production, nên kiểm tra thêm `hostname` trả về từ Siteverify.
