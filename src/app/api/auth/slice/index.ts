import { authActions, AuthSliceInitialState } from "@/app/redux/slices/authSlice";
import { ipcRenderer } from "electron";
import { useDispatch } from "react-redux";
import { useRequestWrap } from "../../useRequestWrap";

interface SigninDTO {
  username: string
  password: string
  captcha_sid?: string
  captcha_key?: string
}

interface SignoutDTO {
  username: string
  password: string
}

export type SignInResponse = (AuthSliceInitialState["main"] & {
  error: "need_captcha" | "invalid_client"
  error_description: string
  error_type: "username_or_password_is_incorrect"
} & {
  captcha_attempt: number
  captcha_img: string
  captcha_ratio: string
  captcha_sid: string
  captcha_ts: number
  is_refresh_enabled: boolean
}) | null

interface AuthSliceRequests {
  readonly execute: () => Promise<string>
  readonly signin: (dto: SigninDTO) => Promise<SignInResponse>
  readonly signout: (dto: SignoutDTO) => Promise<any>
}

export interface AuthSlice extends AuthSliceRequests {
  readonly useSignin: (dto: SigninDTO) => ReturnType<
    typeof useRequestWrap<SignInResponse>
  >
  readonly useExecute: () => {
    data: Awaited<ReturnType<AuthSlice["execute"]>> | null
  }
}

class Slice implements AuthSlice {
  public async execute() {
    return "Hello world"
  }

  public async signin(dto: Partial<SigninDTO>) {
    if (!dto.username || !dto.password) return null

    const USERNAME = dto.username
    const PASSWORD = dto.password
    const CSID = dto?.captcha_sid
    const CKEY = dto?.captcha_key
    const DEVICE_ID = "86c9e07d15fb234a"
      .split("").sort(() => Math.random() - .5).join("")

    const response: SignInResponse = await ipcRenderer.invoke("signin", {
      username: USERNAME,
      password: PASSWORD,
      device_id: DEVICE_ID,
      captcha_sid: CSID || null,
      captcha_key: CKEY || null
    })

    return response
  }

  public async signout() {
    return "Hello world"
  }

  public useExecute() {
    return useRequestWrap<(
      ReturnType<AuthSlice["useExecute"]>["data"]
    )>(this.execute)
  }

  public useSignin(dto: SigninDTO) {
    const dispatch = useDispatch()
    const response = useRequestWrap<SignInResponse>(this.signin, dto)
    
    dispatch(authActions.init(response.data))

    return response
  }
}

export const authSlice = new Slice()