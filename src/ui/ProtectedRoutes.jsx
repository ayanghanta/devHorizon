import { useEffect } from 'react';
import { useUser } from '../admin/manageAdmin/useUser';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';

function ProtectedRoutes({ children }) {
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) {
        navigate('/login');
      }
    },
    [isAuthenticated, isLoading, navigate],
  );

  if (isLoading) return <Spinner />;

  if (isAuthenticated) return children;
}

export default ProtectedRoutes;
