import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';
import CollapsText from '../../utils/CollapsText';

const PUBLIC_URL = `http://localhost:3000/blog`;

function SquarBlogCard({ blog = {} }) {
  const { title, description, blogCoverImage, publishedAt, _id: id } = blog;

  return (
    <div className="rounded border border-gray-200 bg-gray-50 p-3 transition duration-300 hover:shadow-md">
      <img
        src={`${PUBLIC_URL}/${blogCoverImage}`}
        alt="poster of the BLOG TITLE"
        className="rounded"
      />
      <div>
        <Link
          className="mb-3 block font-header text-lg text-gray-700 transition duration-200 hover:underline sm:mt-2 sm:text-2xl"
          to={`/blogs/${id}`}
        >
          {title}
        </Link>
        <p className="mb-2 text-[10px] font-medium capitalize text-gray-400">
          {formatDate(publishedAt, 'long')}
        </p>
        <p className="text-xs text-gray-500 sm:text-sm">
          <CollapsText>{description}</CollapsText>
        </p>
        <div className="text-right">
          <Link
            className="ml-auto w-5 cursor-pointer sm:text-2xl"
            to={`/blogs/${id}`}
          >
            &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SquarBlogCard;
