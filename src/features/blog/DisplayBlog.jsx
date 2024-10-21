import { useLoaderData } from 'react-router-dom';
import { getBlog } from '../../services/apiBlog';
import BlogContentDesplay from './BlogContentDesplay';

function DisplayBlog() {
  const blog = useLoaderData();
  const { title, description } = blog;

  return (
    <div className="mx-auto mt-20 max-w-4xl">
      <h1 className="mb-4 mt-3 text-4xl font-semibold text-gray-700">
        {title}
      </h1>
      <p className="mb-12 text-sm italic text-gray-500">{description}</p>
      <BlogContentDesplay>{blog.content}</BlogContentDesplay>
    </div>
  );
}

export async function loader({ params }) {
  const data = await getBlog(params.blogId);

  return data;
}

export default DisplayBlog;
