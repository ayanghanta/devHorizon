import { modifyHtml } from '../../helpers/addStyles';
import { useBlogContext } from '../../contexts/writeContext';
import parse, { domToReact } from 'html-react-parser';
import CodeBlock from '../../utils/CodeBlock';
import { useState } from 'react';

function DisplaySection() {
  const { blogContent: rowContent, codeTheme, codeLanguage } = useBlogContext();
  const [blogTitle, setBlogTitle] = useState('');
  const [blogDescription, setBlogDescription] = useState('');

  const replaceOptions = {
    replace({ attribs, children }) {
      if (!attribs) return;

      if (attribs.class === 'ql-syntax') {
        return (
          <CodeBlock theme={codeTheme} codeLanguage={codeLanguage}>
            {domToReact(children, replaceOptions)}
          </CodeBlock>
        );
      }
    },
  };

  const styledBlogContent = modifyHtml(rowContent);

  const blogDOM = parse(styledBlogContent, replaceOptions);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3">
        <textarea
          className="block h-auto w-full resize-none rounded-sm bg-gray-100 px-2 py-2 text-4xl text-gray-900 outline-none"
          placeholder="Blog Title..."
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
          rows={2} // This defines how many lines of text will be visible initially
        />
        <textarea
          className="block h-auto w-full resize-none rounded-sm bg-gray-100 px-2 py-2 text-sm italic text-gray-900 outline-none"
          placeholder="Blog Description..."
          value={blogDescription}
          onChange={(e) => setBlogDescription(e.target.value)}
          rows={3} // This defines how many lines of text will be visible initially
        />
      </div>
      {blogDOM}
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
