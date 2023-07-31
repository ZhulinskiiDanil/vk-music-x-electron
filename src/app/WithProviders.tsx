import { store } from '@/app/redux'

// Providers
import { AuthProvider } from "./AuthProvider";
import { Provider } from 'react-redux'

// Types
import { PropsWithChildren } from "react";
import { CookiesProvider } from 'react-cookie';

export function WithProviders({ children }: PropsWithChildren) {
  return <Provider store={store}>
    <CookiesProvider>
      <AuthProvider>
        { children }
      </AuthProvider>
    </CookiesProvider>
  </Provider>
}