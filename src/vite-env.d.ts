/// <reference types="vite/client" />

export interface ImportMetaEnv {
  readonly APP_ID: string
  readonly APP_SECRET: string
  readonly API_VERSION: string
  readonly USER_AGENT: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}