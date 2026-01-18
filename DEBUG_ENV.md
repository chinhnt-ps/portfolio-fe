# Debug Environment Variables

Nếu app vẫn gọi localhost:8080 mặc dù đã setup `.env.local`, hãy làm theo các bước sau:

## 1. Kiểm tra file `.env.local`

File `.env.local` phải:
- Nằm ở thư mục **root** của `portfolio-fe/` (cùng cấp với `package.json`)
- Có format đúng:
  ```env
  VITE_API_BASE_URL=https://your-api-url.com
  ```
  hoặc
  ```env
  VITE_DEBUG_API_URL=http://localhost:8080
  ```

## 2. Kiểm tra tên biến

**QUAN TRỌNG**: Tất cả env variables phải bắt đầu với `VITE_`

✅ Đúng:
```env
VITE_API_BASE_URL=https://api.example.com
VITE_DEBUG_API_URL=http://localhost:8080
```

❌ Sai:
```env
API_BASE_URL=https://api.example.com  # Thiếu VITE_ prefix
REACT_APP_API_URL=https://api.example.com  # Sai prefix
```

## 3. Restart Dev Server

**QUAN TRỌNG**: Sau khi tạo/sửa `.env.local`, bạn **PHẢI** restart dev server:

1. Dừng dev server (Ctrl+C)
2. Start lại:
   ```bash
   npm run dev
   ```

Vite chỉ đọc env variables khi khởi động, không tự động reload khi file thay đổi.

## 4. Kiểm tra Console Log

Mở browser console (F12), bạn sẽ thấy log như sau:

```
[API Debug] All env variables: {
  VITE_DEBUG_API_URL: undefined,
  VITE_API_BASE_URL: "https://your-api-url.com",
  VITE_API_URL: undefined,
  MODE: "development",
  DEV: true,
  PROD: false
}
[API] ✅ Using API BASE URL: https://your-api-url.com
```

Nếu thấy tất cả là `undefined`, có nghĩa là:
- File `.env.local` không được đọc
- Hoặc dev server chưa restart

## 5. Kiểm tra vị trí file

Cấu trúc thư mục đúng:

```
portfolio-fe/
├── .env.local          ← File phải ở đây
├── package.json
├── vite.config.ts
└── src/
```

## 6. Test nhanh

Tạo file `.env.local` với nội dung:

```env
VITE_DEBUG_API_URL=https://httpbin.org/get
```

Restart dev server và kiểm tra console log. Nếu thấy `[API] ✅ Using DEBUG API URL: https://httpbin.org/get` thì setup đúng.

## 7. Troubleshooting

### Vấn đề: Vẫn thấy "Using default localhost:8080"

**Giải pháp**:
1. Kiểm tra file `.env.local` có ở đúng vị trí không
2. Kiểm tra tên biến có đúng format `VITE_*` không
3. **Restart dev server** (quan trọng nhất!)
4. Xóa cache: `rm -rf node_modules/.vite` (hoặc xóa thư mục `.vite` trong `node_modules`)

### Vấn đề: Console log hiển thị `undefined`

**Giải pháp**:
- Đảm bảo file `.env.local` không có lỗi syntax
- Không có khoảng trắng thừa: `VITE_API_BASE_URL = value` (sai) → `VITE_API_BASE_URL=value` (đúng)
- Không có quotes không cần thiết: `VITE_API_BASE_URL="value"` (có thể gây lỗi)

### Vấn đề: File `.env.local` bị gitignore

Đây là **bình thường** và **đúng**. File `.env.local` không nên commit vào git vì chứa thông tin nhạy cảm.

## 8. Alternative: Dùng `.env` file

Nếu `.env.local` không hoạt động, thử dùng `.env`:

```env
VITE_API_BASE_URL=https://your-api-url.com
```

**Lưu ý**: File `.env` có thể bị commit vào git, nên chỉ dùng cho development chung, không chứa secrets.
