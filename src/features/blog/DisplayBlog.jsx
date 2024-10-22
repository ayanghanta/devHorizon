import { useLoaderData } from 'react-router-dom';
import { getBlog } from '../../services/apiBlog';
import BlogContentDesplay from './BlogContentDesplay';
import BlogInfo from './BlogInfo';

const PUBLIC_URL = `http://localhost:3000/blog`;

function DisplayBlog() {
  const blog = useLoaderData();
  const { title, blogCoverImage, description, publishedAt } = blog;

  return (
    <div className="mx-auto mt-20 max-w-4xl">
      <h1 className="mb-10 mt-3 font-header text-5xl font-semibold text-gray-700">
        {title}
      </h1>
      <BlogInfo blogPublishDate={publishedAt} />

      <img
        className="mx-auto mb-12 max-w-[90%] rounded-sm"
        src={`${PUBLIC_URL}/${blogCoverImage}`}
        alt={`cover image of ${title}`}
      />
      <p className="mb-12 italic text-gray-500">{description}</p>
      <BlogContentDesplay>{blog.content}</BlogContentDesplay>
    </div>
  );
}

export async function loader({ params }) {
  const data = await getBlog(params.blogId);

  return data;
}

export default DisplayBlog;
