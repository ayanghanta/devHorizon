import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import Login from './ui/Login';
import HomePage from './ui/HomePage';
import AppLayout from './ui/AppLayout';
import BlogsPage from './ui/BlogsPage';
import ErrorPage from './ui/ErrorPage';
import DashBoard from './ui/DashBoard';
import AboutMePage from './ui/AboutMePage';
import BlogWritePage from './ui/BlogWritePage';
import DashBordLayout from './ui/DashBordLayout';
import ForgotPassword from './ui/ForgotPassword';
import DisplayBlog from './features/blog/DisplayBlog';
import UpdateAdmin from './admin/manageAdmin/UpdateAdmin';
import AddNewAdmin from './admin/manageAdmin/AddNewAdmin';
import ProtectedRoutes from './ui/ProtectedRoutes';

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
        errorElement: <ErrorPage />,
      },
      {
        path: '/about',
        element: <AboutMePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/blogs',
        element: <BlogsPage />,
        errorElement: <ErrorPage />,
      },

      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/forgotpassword',
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoutes>
        <DashBordLayout />
      </ProtectedRoutes>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'dashboard',
        element: <DashBoard />,
      },
      {
        path: 'config',
        element: <UpdateAdmin />,
      },
      {
        path: 'add',
        element: <AddNewAdmin />,
      },
      {
        path: 'write',
        element: <BlogWritePage />,
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
