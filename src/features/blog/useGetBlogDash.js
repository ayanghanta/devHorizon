import { useMutation } from '@tanstack/react-query';
import { getBlog as getBlogApi } from '../../services/apiBlog';
import toast from 'react-hot-toast';

export function useGetBlogDash() {
  const { mutate: getBlog, isLoading } = useMutation({
    mutationFn: getBlogApi,
    onError: (err) => toast.error(err.message),
  });

  return { getBlog, isLoading };
}
