import { authReducer } from "./slices/authSlice";
import { settingsReducer } from "./slices/settingsSlice";

export const rootReducer = {
  auth: authReducer,
  settings: settingsReducer,
}