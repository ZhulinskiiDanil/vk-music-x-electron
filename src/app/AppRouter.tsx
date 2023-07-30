import { createHashRouter, RouterProvider } from "react-router-dom";

// Pages
import HomePage from '@/pages/home/ui/Home'
import PlaylistPage from "@/pages/playlist/ui/Playlist";
import SearchPage from "@/pages/search/ui/Search";
import SignInPage from "@/pages/auth/sign-in/ui/SignIn";

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
    handle: () => {
      console.log("Home page");
    }
  },
  {
    path: '/playlist',
    element: <PlaylistPage />,
    handle: () => {
      console.log("Playlist page");
    }
  },
  {
    path: '/search',
    element: <SearchPage />,
    handle: () => {
      console.log("Search page");
    }
  },
  {
    path: '/auth/sign-in',
    element: <SignInPage />,
    handle: () => {
      console.log("SignIn page");
    }
  }
]);

export function AppRouter() {
  return <RouterProvider router={router} />
}