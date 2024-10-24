import { Link, useNavigate } from 'react-router-dom';
import Button from '../../ui/buttons/Button';
import {
  PiRocket,
  PiNotePencil,
  PiTrash,
  PiSpinner,
  PiEyeSlash,
} from 'react-icons/pi';
import { formatDate } from '../../utils/formatDate';

import { useDeleteBlog } from './useDeleteB,log.js';
import { useUpdateBlog } from './usePublishBlog.js';
import { useBlogContext } from '../../contexts/writeContext';

const PUBLIC_URL = `http://localhost:3000/blog`;

function BlogItem({ blog }) {
  const {
    title: SavedBlogTitle,
    blogCoverImage,
    description: savedBlogDecription,
    publishedAt,
    content: savedBlogContent,
    _id: id,
    likes,
    isPublished,
  } = blog;
  const { dispatch } = useBlogContext();
  const { isLoading, deleteBlog } = useDeleteBlog();
  const { isLoading: isPublishing, publish } = useUpdateBlog();

  const navigate = useNavigate();

  function handleEditBlog() {
    // 1. update the blogWiring context
    dispatch({ type: 'updateTitle', payload: SavedBlogTitle });
    dispatch({ type: 'updateDescription', payload: savedBlogDecription });
    dispatch({ type: 'updateContent', payload: savedBlogContent });
    dispatch({ type: 'changeWritingMode', payload: 'update' });
    dispatch({ type: 'setBlogId', payload: id });

    //2. naigate the the writing page with daya dispayed
    navigate(`/write`);
  }

  return (
    <div className="grid grid-cols-5 items-center gap-x-5">
      <img
        className="max-w-36 text-center"
        src={`${PUBLIC_URL}/${blogCoverImage}`}
        alt={`cover image of a blog`}
      />
      <Link className="text-left hover:underline" to={`/blogs/${id}`}>
        {SavedBlogTitle}
      </Link>
      <p className="text-center"> {formatDate(publishedAt, 'long')}</p>
      <p className="text-center">{likes}</p>
      <div className="flex gap-2 justify-self-center">
        {isPublished ? (
          <Button
            type="hide"
            onClick={() => publish({ id, isPublished: false })}
          >
            <PiEyeSlash className="text-xl" />
          </Button>
        ) : (
          <Button
            type="publish"
            onClick={() => publish({ id, isPublished: true })}
          >
            <PiRocket className="text-xl" />
          </Button>
        )}
        <Button type="edit" onClick={handleEditBlog}>
          <PiNotePencil className="text-xl" />
        </Button>
        <Button
          type="delete"
          onClick={() => deleteBlog(id)}
          disabled={isLoading}
        >
          {isLoading ? (
            <PiSpinner className="text-xl" />
          ) : (
            <PiTrash className="text-xl" />
          )}
        </Button>
      </div>
    </div>
  );
}
export default BlogItem;
