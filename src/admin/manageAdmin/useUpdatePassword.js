import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updatePassword as updatePasswordApi } from '../../services/apiAccount';
import toast from 'react-hot-toast';

export function useUpdatePassword() {
  const queryClinet = useQueryClient();

  const { mutate: updatePassword, isLoading } = useMutation({
    mutationFn: updatePasswordApi,

    onSuccess: (data) => {
      queryClinet.setQueriesData(['user'], data);
      toast.success('Account password successfully');
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updatePassword, isLoading };
}
