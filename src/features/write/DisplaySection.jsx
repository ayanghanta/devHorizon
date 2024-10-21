import { useBlogContext } from '../../contexts/writeContext';
import Button from '../../ui/buttons/Button';
import { useForm } from 'react-hook-form';
import { createBlog } from '../../services/apiBlog';
import BlogContentDesplay from '../blog/BlogContentDesplay';

function DisplaySection() {
  const { blogContent: rowContent } = useBlogContext();
  const { register, handleSubmit } = useForm();

  async function handleBlogCreate(data) {
    const newBlogData = { ...data, content: rowContent };

    const newBlog = await createBlog(newBlogData);
    console.log(newBlog);
  }

  return (
    <div>
      <form
        className="mb-6 flex flex-col gap-3"
        onSubmit={handleSubmit(handleBlogCreate)}
      >
        <input
          type="file"
          name="blogCoverImage"
          id="blogCoverImage"
          // {...register('blogCoverImage')}
        />
        <textarea
          className="block h-auto w-full resize-none rounded-sm bg-gray-100 px-2 py-2 text-4xl text-gray-900 outline-none"
          placeholder="Blog Title..."
          {...register('title')}
          rows={2} // This defines how many lines of text will be visible initially
        />
        <textarea
          className="block h-auto w-full resize-none rounded-sm bg-gray-100 px-2 py-2 text-sm italic text-gray-900 outline-none"
          placeholder="Blog Description..."
          {...register('description')}
          rows={3}
        />
        <BlogContentDesplay>{rowContent}</BlogContentDesplay>
        <div className="mt-16 space-x-4 text-right">
          <Button type="secondary" role="reset">
            Clear
          </Button>
          <Button type="primary" role="submit">
            Create Blog
          </Button>
        </div>
      </form>
    </div>
  );
}

export default DisplaySection;

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
