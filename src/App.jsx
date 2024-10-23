import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import AppLayout from './ui/AppLayout';
import HomePage from './ui/HomePage';
import AboutMePage from './ui/AboutMePage';
import BlogsPage, { loader as allBlogsLoader } from './ui/BlogsPage';
import ErrorPage from './ui/ErrorPage';
import BlogWritePage from './ui/BlogWritePage';
import DisplayBlog, { loader as blogLoader } from './features/blog/DisplayBlog';
import DashBoard from './ui/DashBoard';
import DashBordLayout from './ui/DashBordLayout';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

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
  {
    path: '/admin',
    element: <DashBordLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'dashboard',
        element: <DashBoard />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 4000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
