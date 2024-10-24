import BlogItem from './BlogItem';
import { getPublishedBlogs } from '../../services/apiBlog';
import { getDarftBlogs } from '../../services/apiDraftBlog';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../ui/Spinner';

function BlogsTable({ type }) {
  const {
    data: blogs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: type === 'draft' ? ['draftBlogs'] : ['publishBlogs'],
    queryFn: type === 'draft' ? getDarftBlogs : getPublishedBlogs,
  });

  if (isLoading) return <Spinner />;

  return (
    <div className="mt-4">
      <div className="grid grid-cols-5 gap-x-5 rounded-sm bg-amber-400 px-3 py-2">
        <p className="text-lg">Cover</p>
        <p className="text-center text-lg">Title</p>
        <p className="text-center text-lg">Publish date</p>
        <p className="text-center text-lg">Likes</p>
        <p className="text-center text-lg">Actions</p>
      </div>
      <div className="flex flex-col gap-3 bg-gray-50 pt-2 [&>*:nth-child(even)]:bg-gray-100">
        {blogs.map((blog) => (
          <BlogItem blog={blog} key={blog._id} />
        ))}
      </div>
    </div>
  );
}

export default BlogsTable;
