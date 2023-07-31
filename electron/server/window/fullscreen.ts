import { BrowserWindow } from "electron";

export const toggleFullScreenWindow = async function(win: BrowserWindow) {
  if (!win) return
  
  if (!win.isMaximized()) {
    win.maximize()
  } else {
    win.unmaximize()
  }
}