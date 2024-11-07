import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/authServices';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useLogin() {
  const queyClinet = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queyClinet.setQueryData(['user'], user);

      navigate('/admin/dashboard', { replace: true });
      toast.success(`Welcome ${user.user.name}`);
    },
    onError: (err) => toast.error(err.message),
  });

  return { login, isLoading };
}
