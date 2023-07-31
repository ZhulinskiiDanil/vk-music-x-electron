
// Hooks
import { PropsWithChildren, useEffect } from "react";
import useCookies from 'react-cookie/cjs/useCookies'

// Redux
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "./redux";
import { authActions } from "./redux/slices/authSlice";

export function AuthProvider({ children }: PropsWithChildren) {
  const authState = useSelector((state: RootState) => state.auth)
  const [cookies] = useCookies()
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (!authState.main.access_token && !cookies.token) {
      if (!window.location.pathname.includes("auth")) {
        window.location.hash = "#/auth/sign-in"
      }
    } else if (!authState.main.access_token) {
      dispatch(authActions.init({ access_token: cookies.token }))
    }
  }, [authState, cookies.token])

  return <>
    { children }
  </>
}