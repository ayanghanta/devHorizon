import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutApi } from '../../services/authServices';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useLogout() {
  const queryClinet = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClinet.invalidateQueries();
      navigate('/', { replace: true });
    },
    onError: () => {
      toast.error('can not logged out !');
    },
  });

  return { logout, isLoading };
}
