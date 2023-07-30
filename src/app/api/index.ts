import { authSlice, AuthSlice } from "./auth/slice"

class Api {
  readonly auth: AuthSlice

  constructor() {
    this.auth = authSlice
  }
}

export const ApiInstance = new Api()