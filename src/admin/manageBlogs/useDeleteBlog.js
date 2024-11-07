import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteBlog as deleteBlogApi } from '../../services/apiBlog';

export function useDeleteBlog() {
  const queryClient = useQueryClient();
  const { isLoading, mutate: deleteBlog } = useMutation({
    mutationFn: (id) => deleteBlogApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['draftBlogs'] });
      queryClient.invalidateQueries({ queryKey: ['publishBlogs'] });
      toast.success('Blog successfully deleted');
    },
    onError: (err) => {
      toast.error(err.message || `Blog could not Deleted`);
    },
  });

  return { isLoading, deleteBlog };
}
