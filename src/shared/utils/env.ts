import { ImportMetaEnv } from "@/vite-env"

export const env: ImportMetaEnv = new Proxy(import.meta.env, {
  get(target, p: string) {
    const name = p.toUpperCase().replaceAll(" ", "_")

    return target["VITE_" + name]
  }
}) as any