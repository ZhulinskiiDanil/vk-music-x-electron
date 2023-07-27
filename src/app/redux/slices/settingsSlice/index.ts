import { createSlice } from "@reduxjs/toolkit"

interface IInitialState {
  volume: number
}

const initialState: IInitialState = {
  volume: 75
}

const settingsSlice = createSlice({
  name: "settings",
  initialState: JSON.parse(
    JSON.stringify(initialState)
  ) as IInitialState,
  reducers: {
    setVolume(state, action) {
      const payload = action.payload as { volume: number }
      const volume = payload.volume < 0 ? 0 : (
        payload.volume > 100 ? 100 : payload.volume
      ) // From 1 to 100

      state.volume = volume
    }
  }
})

export const {
  actions: settingsActions,
  reducer: settingsReducer
} = settingsSlice