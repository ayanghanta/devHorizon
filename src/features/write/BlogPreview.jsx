import { useBlogContext } from '../../contexts/writeContext';
import Button from '../../ui/buttons/Button';
import { useForm } from 'react-hook-form';
import { createBlog } from '../../services/apiBlog';
import BlogContentDesplay from '../blog/BlogContentDesplay';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BlogPreview() {
  const { blogContent: rowContent } = useBlogContext();
  const { register, handleSubmit } = useForm();
  const [isPosting, setIsPosting] = useState(false);
  const navigate = useNavigate();

  async function handleBlogCreate(data) {
    setIsPosting(true);
    const formData = new FormData();

    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('content', rowContent);
    formData.append('blogCoverImage', data.blogCoverImage[0]); // Append the file

    const newBlog = await createBlog(formData);
    setIsPosting(false);
    // FIXME:
    setTimeout(() => {
      setIsPosting(false);
      navigate(`/blogs/${newBlog._id}`);
    }, 2000); // 2000ms = 2 seconds
  }

  return (
    <div>
      <form className="mb-6" onSubmit={handleSubmit(handleBlogCreate)}>
        <input
          className="mb-2"
          type="file"
          name="blogCoverImage"
          id="blogCoverImage"
          {...register('blogCoverImage', {
            required: 'coverimage is required for the blog',
          })}
        />
        <textarea
          className="mb-3 block h-auto w-full resize-none rounded-sm bg-gray-100 px-2 py-2 text-4xl text-gray-900 outline-none"
          placeholder="Blog Title..."
          {...register('title', {
            required: 'Title must be required for the blog',
          })}
          rows={2} // This defines how many lines of text will be visible initially
        />
        <textarea
          className="mb-3 block h-auto w-full resize-none rounded-sm bg-gray-100 px-2 py-2 text-sm italic text-gray-900 outline-none"
          placeholder="Blog Description..."
          {...register('description', {
            required: 'A description is required for the blog',
          })}
          rows={3}
        />
        <BlogContentDesplay>{rowContent}</BlogContentDesplay>
        <div className="mt-16 space-x-4 text-right">
          <Button type="secondary" role="reset">
            Clear
          </Button>
          <Button type="primary" role="submit">
            {isPosting ? 'Creating...' : 'Create Blog'}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default BlogPreview;

/*


  const replaceOptions = {
    replace({ attribs, children }) {
      if (!attribs) return;

      if (attribs.class === 'ql-syntax') {
        return (
          <pre
            spellCheck="false"
            className="my-4 overflow-x-auto rounded-sm bg-gray-100 p-4 text-gray-800"
          >
            <code className="language-javascript block overflow-x-auto rounded-sm bg-gray-100 p-2 font-mono text-sm leading-snug text-gray-800">
              <CodeBlock theme={codeTheme}>
                {domToReact(children, replaceOptions)}
              </CodeBlock>
            </code>
          </pre>
        );
      }
    },
  };

*/
