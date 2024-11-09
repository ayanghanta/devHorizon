import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateMe as updateMeApi } from '../../services/apiAccount';
import toast from 'react-hot-toast';

export function useUpdateUser() {
  const queryClinet = useQueryClient();

  const { mutate: updateMe, isLoading } = useMutation({
    mutationFn: updateMeApi,

    onSuccess: (data) => {
      queryClinet.setQueriesData(['user'], data);
      toast.success('Account updated successfully');
    },
    onError: () => {
      toast.error('Account con not be updated');
    },
  });

  return { updateMe, isLoading };
}
