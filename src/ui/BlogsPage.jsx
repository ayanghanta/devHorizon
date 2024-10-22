import WideBlogCard from '../features/blog/WideBlogCard';
import SquarBlogCard from '../features/blog/SquarBlogCard';
import SmallBlogCard from '../features/blog/SmallBlogCard';
import { getAllBlogs } from '../services/apiBlog';
import { useLoaderData } from 'react-router-dom';

function BlogsPage() {
  const allBlogs = useLoaderData();

  return (
    <div className="mx-auto mt-16 max-w-4xl">
      <div className="letestBlogContainer">
        <p className="mb-4 font-header text-xs font-bold uppercase tracking-wider text-gray-500 sm:text-sm">
          Newest on the Blog
        </p>
        <WideBlogCard />
      </div>
      <p className="mb-4 font-header text-xs font-bold uppercase tracking-wider text-gray-500 sm:text-sm">
        Most Read Blogs
      </p>
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-x-5 sm:gap-y-6">
        {allBlogs.map((blog) => (
          <SquarBlogCard blog={blog} key={blog._id} />
        ))}
        {/* <SquarBlogCard />
        <SquarBlogCard />
        <SquarBlogCard />
        <SquarBlogCard /> */}
      </div>
      <p className="mb-4 mt-12 font-header text-xs font-bold uppercase tracking-wider text-gray-500 sm:text-sm">
        More Great Reads!
      </p>
      <div className="flex flex-col gap-y-6 sm:grid sm:grid-cols-2 sm:gap-x-5">
        <SmallBlogCard />
        <SmallBlogCard />
        <SmallBlogCard />
        <SmallBlogCard />
        <SmallBlogCard />
        <SmallBlogCard />
      </div>
    </div>
  );
}

export async function loader() {
  const blogs = await getAllBlogs();

  return blogs;
}

export default BlogsPage;
