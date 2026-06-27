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

Đặt `VITE_GOOGLE_SCRIPT_URL` trong `.env` thành URL Google Apps Script Web App để form đăng ký hoạt động.

## Chạy bằng Docker

```bash
cp .env.example .env
docker compose up --build -d
```

Ứng dụng chạy tại `http://localhost:7500`. Cổng host được đọc từ biến `APP_PORT` trong `.env`:

```bash
APP_PORT=8080 docker compose up --build -d
```

`VITE_GOOGLE_SCRIPT_URL` được đưa vào bundle tại thời điểm build. Sau khi thay đổi giá trị, cần build lại image.
