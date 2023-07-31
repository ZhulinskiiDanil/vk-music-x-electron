import { ipcRenderer as ipc } from "electron";

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
    (async () => {
      let isAuthorized = false;

      try {
        isAuthorized = await ipc.invoke("execute", {
          access_token: cookies.token || false // string | boolean
        })
      } catch(err) {
        console.log(err);
        isAuthorized = false;
      }

      if (!isAuthorized) {
        if (!window.location.pathname.includes("auth")) {
          window.location.hash = "#/auth/sign-in"
        }
      } else if (!authState.main.access_token) {
        dispatch(authActions.init({ access_token: cookies.token }))
      }
    })()
  }, [authState.main.access_token, cookies.token])

  return <>{ children }</>
}