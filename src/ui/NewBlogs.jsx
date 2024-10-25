import { useQuery } from '@tanstack/react-query';
import SquarBlogCard from '../features/blog/SquarBlogCard';
import WideBlogCard from '../features/blog/WideBlogCard';
import { getPublishedBlogs } from '../services/apiBlog';
import Loader from './Loader';

function NewBlogs() {
  const { data: latestBlog, isLoading: isLoadLatestBlog } = useQuery({
    queryKey: ['latestBlog'],
    queryFn: () => getPublishedBlogs('latest-blog'),
  });
  const { data: mostLikedBlogs, isLoading: isLoadingLikedBlogs } = useQuery({
    queryKey: ['likedBlogs'],
    queryFn: () => getPublishedBlogs('most-4-liked'),
  });

  let twoMostLiked;
  if (!isLoadingLikedBlogs) twoMostLiked = [...mostLikedBlogs].slice(0, 2);
  return (
    <div className="mx-auto max-w-4xl">
      <div>
        <p className="mb-4 font-header text-xs font-bold uppercase tracking-wider text-gray-500 sm:text-sm">
          Newest on the Blog
        </p>
        {isLoadLatestBlog ? (
          <Loader />
        ) : (
          <WideBlogCard blog={latestBlog.at(0)} />
        )}
      </div>
      <div>
        <p className="mb-4 font-header text-xs font-bold uppercase tracking-wider text-gray-500 sm:text-sm">
          Most Read Blogs
        </p>
        {isLoadingLikedBlogs ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
            {twoMostLiked.map((blog) => (
              <SquarBlogCard blog={blog} key={blog._id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default NewBlogs;
