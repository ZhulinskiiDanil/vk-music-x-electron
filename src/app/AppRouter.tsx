import { createHashRouter, RouterProvider } from "react-router-dom";

// Pages
import HomePage from '@/pages/home/ui/Home'
import PlaylistPage from "@/pages/playlist/ui/Playlist";
import SearchPage from "@/pages/search/ui/Search";
import SignInPage from "@/pages/auth/sign-in/ui/SignIn";

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: '/playlist',
    element: <PlaylistPage />
  },
  {
    path: '/search',
    element: <SearchPage />
  },
  {
    path: '/auth/sign-in',
    element: <SignInPage />
  }
]);

export function AppRouter() {
  return <RouterProvider router={router} />
}