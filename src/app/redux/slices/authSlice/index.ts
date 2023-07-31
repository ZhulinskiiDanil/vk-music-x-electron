import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  main: {
    user_id: number | null
    access_token: string | null
    expires_in: number | null
  }
}

export type AuthSliceInitialState = InitialState

const initialState: InitialState = {
  main: {
    user_id: null,
    access_token: null,
    expires_in: null
  }
}

export const authSlice = createSlice({
  name: "auth",
  initialState: { ...initialState },
  reducers: {
    init(state, action: { payload: Partial<InitialState["main"]> }) {
      if (action.payload?.access_token) {
        state.main = {
          ...state.main,
          ...action.payload
        }
      }
    }
  }
})

export const {
  actions: authActions,
  reducer: authReducer
} = authSlice