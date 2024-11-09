import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updatePublishing } from '../../services/apiBlog';

export function useUpdateBlog() {
  const queryClient = useQueryClient();
  const { isLoading, mutate: publish } = useMutation({
    mutationFn: ({ id, isPublished }) => updatePublishing(id, { isPublished }),
    onSuccess: (blog) => {
      queryClient.invalidateQueries({ queryKey: ['draftBlogs'] });
      queryClient.invalidateQueries({ queryKey: ['publishBlogs'] });
      toast.success(
        `Blog successfully ${blog.isPublished ? 'published' : 'Hide and save'} `,
      );
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isLoading, publish };
}
