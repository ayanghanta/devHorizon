import parse, { domToReact } from 'html-react-parser';
import { useBlogContext } from '../../contexts/writeContext';
import { modifyHtml } from '../../helpers/addStyles';
import CodeBlock from '../../utils/CodeBlock';

function BlogContentDesplay({ children, type = 'writing' }) {
  const { codeTheme, codeLanguage } = useBlogContext();

  // console.log(codeTheme, codeLanguage);

  const styledBlogContent = modifyHtml(children);
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
  const blogDOM = parse(styledBlogContent, replaceOptions);
  return <>{blogDOM}</>;
}

export default BlogContentDesplay;
