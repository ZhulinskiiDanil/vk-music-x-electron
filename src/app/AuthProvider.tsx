import { PropsWithChildren, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux";

export function AuthProvider({ children }: PropsWithChildren) {
  const authState = useSelector((state: RootState) => state.auth)
  
  useEffect(() => {
    if (!authState.main.access_token) {
      if (!window.location.pathname.includes("auth")) {
        window.location.hash = "#/auth/sign-in"
      }
    }
  }, [authState])

  return <>
    { children }
  </>
}