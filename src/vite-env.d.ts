/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_INNOVATING_EMAIL?: string;
}

declare module '*.png' {
  const src: string;
  export default src;
}
