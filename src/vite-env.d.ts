/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL?: string;
  readonly VITE_API_BASE_URL?: string;
  readonly VITE_SITE_URL?: string;
  readonly VITE_DEBUG_API_URL?: string; // Override API URL for local debugging
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
