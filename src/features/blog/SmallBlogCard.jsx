import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../constant';

function SmallBlogCard({ blog }) {
  return (
    <div className="relative flex gap-3 rounded border border-gray-200 bg-gray-50 p-3 transition duration-300 hover:shadow-md sm:flex-row">
      <img
        src={`${PUBLIC_URL}/${blog.blogCoverImage}`}
        alt="image of a TEST BLOG"
        className="w-6/12 rounded"
      />
      <Link
        to={`/blogs/${blog._id}`}
        className="mb-3 block font-header text-base transition duration-200 hover:underline"
      >
        {blog.title}
      </Link>
      <Link
        to={`/blogs/${blog._id}`}
        className="absolute bottom-0 right-5 block cursor-pointer text-lg sm:bottom-3"
      >
        &rarr;
      </Link>
    </div>
  );
}

export default SmallBlogCard;
