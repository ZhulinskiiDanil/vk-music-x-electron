import { BrowserWindow, ipcMain as main } from "electron"

// Window Services
import { closeWindow } from "./window/close"
import { toggleFullScreenWindow } from "./window/fullscreen"
import { hideWindow } from "./window/hide"

// Auth Services
import { signin } from "./auth/signin"
import { execute } from "./auth/execute"

// App Types
export type MainHandleListener = Parameters<typeof main.handle>[1]

export function serverInit(win: BrowserWindow) {
  main.handle('signin', signin)
  main.handle('execute', execute)

  // Window
  main.handle("close-window", closeWindow)
  main.handle("hide-window", () => hideWindow(win))
  main.handle("fullscreen-window", () => toggleFullScreenWindow(win))
}