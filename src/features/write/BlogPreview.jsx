import { useBlogContext } from '../../contexts/writeContext';
import Button from '../../ui/buttons/Button';
import { useForm } from 'react-hook-form';
import BlogContentDesplay from '../blog/BlogContentDesplay';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUpdateBlog } from '../../admin/manageBlogs/useUpdateBlog';
import { useCreateBlog } from '../../admin/manageBlogs/useCreateBlog';

function BlogPreview() {
  const {
    blogContent: rowContent,
    codeTheme,
    codeLanguage,
    writingMode,
    blogId,
    title,
    description,
  } = useBlogContext();
  const { register, handleSubmit } = useForm({
    defaultValues: { title, description },
  });
  const { isLoading: isCreating, createBlog } = useCreateBlog();
  const { isLoading: isUpdating, updateBlog } = useUpdateBlog();
  const navigate = useNavigate();

  async function handleBlogCreate(data) {
    const formData = new FormData();

    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('content', rowContent);
    formData.append('codeTheme', codeTheme);
    formData.append('codeLanguage', codeLanguage);
    if (data.blogCoverImage[0])
      formData.append('blogCoverImage', data.blogCoverImage[0]);

    if (writingMode === 'create')
      createBlog(formData, {
        onSuccess: (blog) => navigate(`/blogs/${blog._id}`),
      });

    if (writingMode === 'update')
      updateBlog(
        { id: blogId, BlogData: formData },
        {
          onSuccess: (blog) => navigate(`/blogs/${blog._id}`),
        },
      );
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
            required:
              writingMode === 'update'
                ? false
                : 'coverimage is required for the blog',
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
          {writingMode === 'create' && (
            <>
              <Button type="secondary" role="reset">
                Clear
              </Button>
              <Button type="primary" role="submit">
                {isCreating ? 'Creating...' : 'Create Blog'}
              </Button>
            </>
          )}
          {writingMode === 'update' && (
            <>
              <Button type="secondary">Cancel</Button>
              <Button type="primary" role="submit">
                {isUpdating ? 'Updating...' : 'Update'}
              </Button>
            </>
          )}
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
