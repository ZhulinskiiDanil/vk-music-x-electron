import { app } from "electron";
import { MainHandleListener } from "..";

export const closeWindow: MainHandleListener = async function(_, dto) {
  if (app) {
    app.quit()
  }
}