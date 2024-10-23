import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateBlog as updateBlogApi } from '../../services/apiBlog';

export function useUpdateBlog() {
  const { isLoading, mutate: updateBlog } = useMutation({
    mutationFn: ({ id, BlogData }) => updateBlogApi(id, BlogData),
    onSuccess: () => {
      toast.success('Blog successfully updated');
    },
    onError: () => {
      toast.error(`Blog could not be updated`);
    },
  });

  return { isLoading, updateBlog };
}