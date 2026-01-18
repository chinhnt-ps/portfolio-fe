# Environment Variables Setup

File này hướng dẫn cách thiết lập environment variables cho portfolio frontend.

## Các Environment Variables

### API Configuration

| Variable | Mô tả | Mặc định | Priority |
|----------|-------|----------|----------|
| `VITE_DEBUG_API_URL` | API URL cho debug (override tất cả) | - | 1 (cao nhất) |
| `VITE_API_BASE_URL` | API URL cho production/staging | - | 2 |
| `VITE_API_URL` | API URL (backward compatibility) | - | 3 |
| - | Default localhost | `http://localhost:8080` | 4 (thấp nhất) |

**Priority**: Nếu có nhiều biến được set, sẽ dùng theo thứ tự priority trên.

### Các biến khác

| Variable | Mô tả | Mặc định |
|----------|-------|----------|
| `VITE_SITE_URL` | Site URL cho SEO | - |

## Cách sử dụng

### 1. Tạo file `.env` (cho local development)

Tạo file `.env` trong thư mục `portfolio-fe/`:

```env
# Production/Staging API URL
VITE_API_BASE_URL=https://api.yourdomain.com

# Hoặc dùng localhost cho debug
VITE_DEBUG_API_URL=http://localhost:8080
```

### 2. Tạo file `.env.local` (không commit vào git)

File `.env.local` sẽ override `.env` và chỉ dùng cho local:

```env
# Debug với local backend
VITE_DEBUG_API_URL=http://localhost:8080
```

### 3. Tạo file `.env.production` (cho production build)

```env
VITE_API_BASE_URL=https://api.yourdomain.com
```

### 4. Sử dụng trong code

```typescript
// API client tự động sử dụng env variables
import { walletApi } from '@/projects/wallet-app/api/walletApi';

// API calls sẽ tự động dùng URL từ env
await walletApi.auth.login({ email, password });
```

## Debug với Local Backend

### Option 1: Dùng VITE_DEBUG_API_URL

```env
# .env.local
VITE_DEBUG_API_URL=http://localhost:8080
```

### Option 2: Không set gì cả (dùng default)

Nếu không set env variable nào, sẽ tự động dùng `http://localhost:8080`.

## Production Deployment

### Netlify

1. Vào Netlify Dashboard → Site settings → Environment variables
2. Thêm:
   - `VITE_API_BASE_URL` = `https://api.yourdomain.com`

### Vercel

1. Vào Vercel Dashboard → Project settings → Environment Variables
2. Thêm:
   - `VITE_API_BASE_URL` = `https://api.yourdomain.com`

### Railway

1. Vào Railway Dashboard → Project → Variables
2. Thêm:
   - `VITE_API_BASE_URL` = `https://api.yourdomain.com`

## Lưu ý

- Tất cả env variables phải bắt đầu với `VITE_` để Vite expose chúng
- File `.env.local` sẽ không được commit vào git (đã có trong `.gitignore`)
- Restart dev server sau khi thay đổi env variables
- Console log sẽ hiển thị API URL đang được sử dụng khi app khởi động

## Kiểm tra API URL đang dùng

Mở browser console, bạn sẽ thấy log:
```
[API] Using API BASE URL: https://api.yourdomain.com
```

hoặc

```
[API] Using default localhost:8080
```
