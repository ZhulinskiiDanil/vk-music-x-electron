import { MainHandleListener } from ".."

export const execute: MainHandleListener = async function(_, dto: {
  access_token: string
}) {
  if (!dto?.access_token) return false
  const TOKEN = dto.access_token || ""
  const { VITE_API_VERSION, VITE_USER_AGENT } = import.meta.env
  const CODE = 1

  const url = `https://api.vk.com/method/execute?v=${VITE_API_VERSION}&access_token=${TOKEN}&code=return ${CODE};`

  const response = await fetch(url, {
    headers: { "User-Agent": VITE_USER_AGENT as string }
  })

  const responseData = await (async () => {
    try {
      return await response.json()
    } catch(err) {
      return await response.text()
    }
  })()

  return (responseData as any)?.response == CODE
}