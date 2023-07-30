import { env } from "@/shared/utils"

// Hooks
import { useEffect, useState } from "react"

type UseRequestWrap<T> = {
  data: T | null
  refresh: (...args: any[]) => void
}

export function useRequestWrap<T>(
  request: (...args: any[]) => Promise<any>,
  ...args: any[]
): UseRequestWrap<T> {
  const [data, setData] = useState<T | null>(null)
  const API_VERSION = env.API_VERSION
  const USER_AGENT = env.API_VERSION
  
  async function sendRequest() {
    const data = await request(...args)
    
    setData(data || null)
  }

  useEffect(() => {
    sendRequest()
  }, [])

  return {
    data, refresh: sendRequest
  } as any
}