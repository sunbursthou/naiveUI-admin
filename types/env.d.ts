/// <reference types="vite/client" />
// 配置类型，使得ts有提示信息,仿照vite中types/importMeta.d.ts
interface ImportMetaEnv {
  readonly VITE_APP_BASE: string
  readonly VITE_APP_BASE_API:string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
