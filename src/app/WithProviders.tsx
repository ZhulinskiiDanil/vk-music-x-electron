import { store } from '@/app/redux'

// Providers
import { AuthProvider } from "./AuthProvider";
import { Provider } from 'react-redux'

// Types
import { PropsWithChildren } from "react";

export function WithProviders({ children }: PropsWithChildren) {
  return <Provider store={store}>
    <AuthProvider>
      { children }
    </AuthProvider>
  </Provider>
}