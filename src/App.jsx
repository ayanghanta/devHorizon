import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import HomePage from './ui/HomePage';
import AboutMePage from './ui/AboutMePage';
import BlogsPage, { loader as allBlogsLoader } from './ui/BlogsPage';
import ErrorPage from './ui/ErrorPage';
import BlogWritePage from './ui/BlogWritePage';
import DisplayBlog, { loader as blogLoader } from './features/blog/DisplayBlog';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/blogs/:blogId',
        element: <DisplayBlog />,
        loader: blogLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: '/about',
        element: <AboutMePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/blogs',
        loader: allBlogsLoader,
        element: <BlogsPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/write',
        element: <BlogWritePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
