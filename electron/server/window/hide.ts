import { BrowserWindow } from "electron";

export const hideWindow = async function(win: BrowserWindow) {
  if (win) {
    win.minimize()
  }
}