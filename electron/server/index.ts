import { app, BrowserWindow, ipcMain as main } from "electron"

export function serverInit(win: BrowserWindow) {
  main.handle('signin', async (_, dto) => {
    const data = JSON.parse(JSON.stringify(dto)) as {
      username: string,
      password: string,
      device_id: string,
      captcha_sid?: string,
      captcha_key?: string
    }
    
    const USERNAME = data?.username || ""
    const PASSWORD = data?.password || ""
    const DEVICE_ID = data?.device_id || ""
  
    const {
      VITE_APP_ID, VITE_API_VERSION,
      VITE_USER_AGENT, VITE_APP_SECRET
    } = import.meta.env
  
    const url = `https://oauth.vk.com/token?grant_type=password&client_id=${VITE_APP_ID}&client_secret=${VITE_APP_SECRET}&username=${USERNAME}&password=${PASSWORD}&v=${VITE_API_VERSION}&lang=en&&lang=en&device_id=${DEVICE_ID}${
      (data?.captcha_key && data?.captcha_sid) ? (
        `&captcha_sid=${data.captcha_sid}&captcha_key=${data.captcha_key}`
      ) : ""
    }`
    
    const response = await fetch(url, {
      headers: {
        "User-Agent": VITE_USER_AGENT as string
      }
    })

    const responseData = (async () => {
      try {
        return await response.json()
      } catch(err) {
        return await response.text()
      }
    })()
  
    return responseData
  })

  main.handle("close-window", () => {
    if (!app) return
    app.quit()
  })
  
  main.handle("hide-window", () => {
    if (!win) return
    win.minimize()
  })
  
  main.handle("fullscreen-window", () => {
    if (!win) return
  
    if (!win.isMaximized()) {
      win.maximize()
    } else {
      win.unmaximize()
    }
  })
}