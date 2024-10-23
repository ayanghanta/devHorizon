import Button from '../../ui/buttons/Button';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useBlogContext } from '../../contexts/writeContext';
import CodeThemes from '../../ui/CodeThemes';

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'link',
  'image',
  'code-block',
];
const modules = {
  toolbar: [
    [{ header: [2, 3, 4, 5] }, { font: [] }],
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
    ['clean'],
  ],
};

function WritingSection() {
  const { blogContent, dispatch } = useBlogContext();
  const [editorContent, setEditorContent] = useState(blogContent);

  const handleChange = (content) => {
    setEditorContent(content);

    dispatch({ type: 'updateContent', payload: content });
  };

  return (
    <div>
      <div className="mt-6 flex items-start justify-between">
        <div>
          <Button type="primary">Magic Write</Button>
          <CodeThemes />
        </div>
      </div>

      <div className="mt-8">
        <ReactQuill
          theme="snow"
          value={editorContent}
          onChange={handleChange}
          formats={formats}
          modules={modules}
          className=""
        />
      </div>
    </div>
  );
}

export default WritingSection;
