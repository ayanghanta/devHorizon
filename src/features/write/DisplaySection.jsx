import { modifyHtml } from '../../helpers/addStyles';
import { useBlogWrite } from '../../contexts/writeContext';
import parse, { domToReact } from 'html-react-parser';
// import { replace } from 'react-router-dom';

function DisplaySection() {
  const { blogContent: rowContent } = useBlogWrite();

  const replaceOptions = {
    replace({ attribs, children }) {
      if (!attribs) return;

      if (attribs.class === 'ql-syntax') {
        return (
          <pre
            spellCheck="false"
            className="my-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-gray-100"
          >
            <code className="block overflow-x-auto rounded-md bg-gray-900 p-2 font-mono text-sm leading-snug text-white">
              {domToReact(children, replaceOptions)}
            </code>
          </pre>
        );
      }
    },
  };

  const styledBlogContent = modifyHtml(rowContent);

  const blogDOM = parse(styledBlogContent, replaceOptions);

  return <div>{blogDOM}</div>;
}

export default DisplaySection;
