import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import HomePage from "./ui/HomePage";
import AboutMePage from "./ui/AboutMePage";
import BlogsPage from "./ui/BlogsPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutMePage />,
      },
      {
        path: "/blogs",
        element: <BlogsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
