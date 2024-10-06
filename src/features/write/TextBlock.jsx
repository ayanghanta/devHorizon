import { useRef, useState } from 'react';

function TextBlock({ name }) {
  const [text, setText] = useState('');
  const textareaRef = useRef(null);

  const handleInputChange = (event) => {
    const textarea = textareaRef.current;
    setText(event.target.value);
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px'; // Adjust height based on content
  };

  const base = 'bg-gray-100 px-2 py-1 ';
  const style = {
    h1: base + 'text-4xl',
    h2: base + 'text-3xl',
    h3: base + 'text-2xl',
    h4: base + 'text-2xl',
    text: base + '',
  };

  return (
    <textarea
      ref={textareaRef} // Connect the ref to the textarea
      value={text} // Bind the state value to textarea
      onChange={handleInputChange}
      name={name}
      className={style[name]}
      rows={name.startsWith('t') ? 3 : 1}
    ></textarea>
  );
}

export default TextBlock;
