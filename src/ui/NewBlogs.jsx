import SquarBlogCard from '../features/blog/SquarBlogCard';
import WideBlogCard from '../features/blog/WideBlogCard';

function NewBlogs() {
  return (
    <div className="mx-auto max-w-4xl">
      <div>
        <p className="font-header mb-4 text-xs font-bold uppercase tracking-wider text-gray-500 sm:text-sm">
          Newest on the Blog
        </p>
        <WideBlogCard />
      </div>
      <div>
        <p className="font-header mb-4 text-xs font-bold uppercase tracking-wider text-gray-500 sm:text-sm">
          Most Read Blogs
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <SquarBlogCard />
          <SquarBlogCard />
        </div>
      </div>
    </div>
  );
}

export default NewBlogs;
