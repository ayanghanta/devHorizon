import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteBlog as deleteBlogApi } from '../../services/apiBlog';

export function useDeleteBlog() {
  const queryClient = useQueryClient();
  const { isLoading, mutate: deleteBlog } = useMutation({
    mutationFn: (id) => deleteBlogApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['blogs'],
      });
      toast.success('Blog successfully deleted');
    },
    onError: () => {
      toast.error(`Blog could not Deleted`);
    },
  });

  return { isLoading, deleteBlog };
}
