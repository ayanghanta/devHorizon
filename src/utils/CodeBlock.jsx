import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  atomOneDark,
  monokai,
  vs,
  isblEditorLight,
  anOldHope,
  monokaiSublime,
  nightOwl,
  github,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';
const themes = {
  atomOneDark,
  monokai,
  vs,
  isblEditorLight,
  anOldHope,
  monokaiSublime,
  nightOwl,
  github,
};

function CodeBlock({ children, theme, codeLanguage }) {
  return (
    <SyntaxHighlighter
      language={codeLanguage}
      style={themes[theme]}
      customStyle={{ borderRadius: '2px' }}
    >
      {children}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;
