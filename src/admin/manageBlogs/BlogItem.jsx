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

import { useDeleteBlog } from './useDeleteBlog';
import { useUpdateBlog } from './usePublishBlog';
import { useBlogContext } from '../../contexts/writeContext';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Modal from '../../ui/Modal';
import { PUBLIC_URL } from '../../constant';
import { useGetBlogDash } from '../../features/blog/useGetBlogDash';

function BlogItem({ blog }) {
  const {
    title: SavedBlogTitle,
    blogCoverImage,
    publishedAt,
    _id: id,
    likes,
    isPublished,
  } = blog;
  const { dispatch } = useBlogContext();
  const { isLoading, deleteBlog } = useDeleteBlog();
  const { isLoading: isPublishing, publish } = useUpdateBlog();
  const { getBlog, isLoading: isGettingBlogInfo } = useGetBlogDash();

  const navigate = useNavigate();

  function handleEditBlog() {
    getBlog(id, {
      onSuccess: (data) => {
        // 1. update the blogWiring context
        dispatch({ type: 'updateTitle', payload: data.title });
        dispatch({ type: 'updateDescription', payload: data.description });
        dispatch({ type: 'updateContent', payload: data.content });
        dispatch({ type: 'changeWritingMode', payload: 'update' });
        dispatch({ type: 'setBlogId', payload: id });

        //2. naigate the the writing page with daya dispayed
        navigate(`/admin/write`);
      },
    });
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
        {isPublished && (
          <Button
            type="hide"
            onClick={() => publish({ id, isPublished: false })}
          >
            {isPublishing ? (
              <PiSpinner className="text-xl" />
            ) : (
              <PiEyeSlash className="text-xl" />
            )}
          </Button>
        )}

        {!isPublished && (
          <Button
            type="publish"
            onClick={() => publish({ id, isPublished: true })}
          >
            {isPublishing ? (
              <PiSpinner className="text-xl" />
            ) : (
              <PiRocket className="text-xl" />
            )}
          </Button>
        )}

        <Button type="edit" onClick={handleEditBlog}>
          {isGettingBlogInfo ? (
            <PiSpinner className="text-xl" />
          ) : (
            <PiNotePencil className="text-xl" />
          )}
        </Button>

        <Modal>
          <Modal.Open name="delete">
            <Button type="delete">
              <PiTrash className="text-xl" />
            </Button>
          </Modal.Open>
          <Modal.Window windowName="delete">
            <ConfirmDelete
              onConfirm={() => deleteBlog(id)}
              disabled={isLoading}
            />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}
export default BlogItem;
