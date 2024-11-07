import { useParams } from 'react-router-dom';
import { getBlog } from '../../services/apiBlog';
import BlogContentDesplay from './BlogContentDesplay';
import BlogInfo from './BlogInfo';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../ui/Spinner';
import { PUBLIC_URL } from '../../constant';

function DisplayBlog() {
  const { blogId } = useParams();
  const {
    data: blog,
    isLoading,
    status,
  } = useQuery({
    queryKey: ['blog', blogId],
    queryFn: () => getBlog(blogId),
  });

  if (isLoading) return <Spinner />;

  if (status === 'error') throw new Error('This Blog Does not Exist');

  const {
    title,
    blogCoverImage,
    description,
    publishedAt,
    codeTheme,
    codeLanguage,
  } = blog;

  return (
    <div className="mx-auto mt-20 max-w-4xl pb-24">
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
