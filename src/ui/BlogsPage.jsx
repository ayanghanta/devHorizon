import WideBlogCard from '../features/blog/WideBlogCard';
import SquarBlogCard from '../features/blog/SquarBlogCard';
import SmallBlogCard from '../features/blog/SmallBlogCard';
import { getPublishedBlogs } from '../services/apiBlog';
import { useQuery } from '@tanstack/react-query';
import Loader from './Loader';

function BlogsPage() {
  const { data: latestBlog, isLoading: isLoadLatestBlog } = useQuery({
    queryKey: ['latestBlog'],
    queryFn: () => getPublishedBlogs('latest-blog'),
  });
  const { data: mostLikedBlogs, isLoading: isLoadingLikedBlogs } = useQuery({
    queryKey: ['likedBlogs'],
    queryFn: () => getPublishedBlogs('most-4-liked'),
  });
  const { data: allBlogs, isLoading: isLoadingAllBlogs } = useQuery({
    queryKey: ['allBlogs'],
    queryFn: () => getPublishedBlogs(),
  });

  if (isLoadLatestBlog) return <p>Loading...</p>;
  if (isLoadingLikedBlogs) return <p>Loading...</p>;

  return (
    <div className="mx-auto mt-16 max-w-4xl">
      <div className="letestBlogContainer">
        <p className="mb-4 font-header text-xs font-bold uppercase tracking-wider text-gray-500 sm:text-sm">
          Newest on the Blog
        </p>
        {isLoadLatestBlog ? (
          <Loader />
        ) : (
          <WideBlogCard blog={latestBlog.at(0)} />
        )}
      </div>
      <p className="mb-4 font-header text-xs font-bold uppercase tracking-wider text-gray-500 sm:text-sm">
        Most Read Blogs
      </p>
      {isLoadingLikedBlogs ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
          {mostLikedBlogs.map((blog) => (
            <SquarBlogCard blog={blog} key={blog._id} />
          ))}
        </div>
      )}
      <p className="mb-4 mt-12 font-header text-xs font-bold uppercase tracking-wider text-gray-500 sm:text-sm">
        More Great Reads!
      </p>
      {isLoadingAllBlogs ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-y-6 sm:grid sm:grid-cols-2 sm:gap-x-5">
          {allBlogs.map((blog) => (
            <SmallBlogCard blog={blog} key={blog._id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default BlogsPage;
