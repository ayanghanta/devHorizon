import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createBlog as createBlogApi } from '../../services/apiBlog';

export function useCreateBlog() {
  const { isLoading, mutate: createBlog } = useMutation({
    mutationFn: (newBlog) => createBlogApi(newBlog),
    onSuccess: () => {
      toast.success('Blog successfully created');
    },
    onError: () => {
      toast.error(`Blog could not be created`);
    },
  });

  return { isLoading, createBlog };
}
