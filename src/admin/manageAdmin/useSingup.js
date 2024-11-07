import { useMutation, useQueryClient } from '@tanstack/react-query';
import { singup as singupApi } from '../../services/authServices';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useSingup() {
  const navigate = useNavigate();
  const queryClinet = useQueryClient();

  const { mutate: singup, isLoading } = useMutation({
    mutationFn: singupApi,

    onSuccess: (data) => {
      queryClinet.setQueriesData(['user'], data);
      navigate('/admin/dashboard');
      toast.success(`Welcome ${data.user.name}`);
    },

    onError: (err) => toast.error(err.message),
  });

  return { singup, isLoading };
}
