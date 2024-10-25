import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';
import CollapsText from '../../utils/CollapsText';

const PUBLIC_URL = `http://localhost:3000/blog`;

function wideBlogCard({ blog }) {
  const { title, description, blogCoverImage, publishedAt, _id: id } = blog;
  return (
    <div className="mb-12 items-start rounded border border-gray-400 p-3 transition duration-300 hover:shadow-md sm:flex sm:gap-6">
      <img
        src={`${PUBLIC_URL}/${blogCoverImage}`}
        alt="poster of the BLOG TITLE"
        className="rounded sm:w-6/12"
      />
      <div>
        <Link
          to={`/blogs/${id}`}
          className="mb-3 block font-header text-lg font-medium text-gray-900 transition duration-200 hover:underline sm:text-2xl"
        >
          {title}
        </Link>
        <p className="mb-2 text-[10px] font-medium capitalize text-gray-400 sm:text-[12px]">
          {formatDate(publishedAt, 'long')}
        </p>
        <p className="text-xs text-gray-600 sm:text-base">
          <CollapsText wordShown={25}>{description}</CollapsText>
        </p>
        <Link
          to={`/blogs/${id}`}
          className="ml-auto mr-2 block w-5 sm:text-2xl"
        >
          &rarr;
        </Link>
      </div>
    </div>
  );
}

export default wideBlogCard;
