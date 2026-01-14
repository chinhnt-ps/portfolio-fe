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

Create `.env` file in this directory:

```env
REACT_APP_API_URL=your_api_url
```

