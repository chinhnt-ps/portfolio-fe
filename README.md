# Portfolio Frontend

![CI/CD](https://github.com/chinhnt-ps/portfolio-fe/workflows/CI/CD%20Pipeline%20-%20Frontend/badge.svg)

Frontend application cho portfolio website.

## Tech Stack

- React 18 + TypeScript
- Vite
- React Router
- Redux Toolkit
- styled-components
- react-i18next
- Tailwind CSS

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Project Structure

```
portfolio-fe/
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── router/         # Routing configuration
│   ├── store/          # Redux store
│   ├── theme/          # Theme system
│   ├── i18n/           # Internationalization
│   ├── hooks/          # Custom hooks
│   └── utils/          # Utility functions
├── public/             # Static assets
└── index.html          # HTML entry point
```

## Environment Variables

Xem file [ENV_SETUP.md](./ENV_SETUP.md) để biết chi tiết về cách thiết lập environment variables.

### Quick Start

Tạo file `.env.local` trong thư mục `portfolio-fe/`:

```env
# Production/Staging API URL
VITE_API_BASE_URL=https://portfolio-be-production-0fa6.up.railway.app

# Hoặc dùng localhost cho debug
VITE_DEBUG_API_URL=http://localhost:8080
```

**Lưu ý**: Tất cả env variables phải bắt đầu với `VITE_` để Vite expose chúng.
