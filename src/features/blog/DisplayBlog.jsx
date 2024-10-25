import { useParams } from 'react-router-dom';
import { getBlog } from '../../services/apiBlog';
import BlogContentDesplay from './BlogContentDesplay';
import BlogInfo from './BlogInfo';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../ui/Spinner';

const PUBLIC_URL = `http://localhost:3000/blog`;

function DisplayBlog() {
  const { blogId } = useParams();
  const { data: blog, isLoading } = useQuery({
    queryKey: ['blog'],
    queryFn: () => getBlog(blogId),
  });

  if (isLoading) return <Spinner />;

  const {
    title,
    blogCoverImage,
    description,
    publishedAt,
    codeTheme,
    codeLanguage,
  } = blog;

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
      <BlogContentDesplay
        type="presenting"
        codeTheme={codeTheme}
        codeLng={codeLanguage}
      >
        {blog.content}
      </BlogContentDesplay>
    </div>
  );
}

export default DisplayBlog;
