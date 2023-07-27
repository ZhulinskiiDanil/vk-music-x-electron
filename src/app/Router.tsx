import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from '@/pages/home/ui/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
]);

export function AppRouter() {
  return <RouterProvider router={router} />
}