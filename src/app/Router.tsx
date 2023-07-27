import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from '@/pages/home/ui/Home'
import Playlist from "@/pages/playlist/ui/Playlist";
import Search from "@/pages/search/ui/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: '/playlist',
    element: <Playlist />
  },
  {
    path: 'search',
    element: <Search />
  }
]);

export function AppRouter() {
  return <RouterProvider router={router} />
}