import { useState } from 'react';
import BlockTypes from '../features/write/BlockTypes';
import Button from './buttons/Button';
import { useSelector } from 'react-redux';
import TextBlock from '../features/write/TextBlock';
import { Form } from 'react-router-dom';

function BlogWritePage() {
  const blogBlocks = useSelector((store) => store.writing.blocks);
  const [showOptions, setIsShowOptions] = useState(false);

  function hendleAddBlock() {
    setIsShowOptions((s) => !s);
  }

  // console.log(blogBlocks);

  return (
    <div>
      <h1 className="mt-6 rounded-sm bg-gray-200 py-2 text-center text-lg md:text-xl">
        Write, Share, Inspire: Craft Your Blog Post
      </h1>
      <div className="mt-6 flex items-start justify-between">
        <div className="flex items-start gap-4">
          <Button type="primary" onClick={hendleAddBlock}>
            +
          </Button>
          {showOptions && <BlockTypes />}
        </div>
        <div className="space-x-2">
          <Button type="secondary">Preview</Button>
          <Button type="primary">Magic Write</Button>
        </div>
      </div>

      <div className="mt-16">
        <Form method="POST" className="flex flex-col gap-2">
          {blogBlocks.map((block, i) => (
            <TextBlock key={i} name={block.type} />
          ))}

          <input
            type="hidden"
            name="blocks"
            value={JSON.stringify(blogBlocks)}
          />
          <Button type="primary">POST</Button>
        </Form>
      </div>
    </div>
  );
}

export async function action({ request }) {
  const data = await request.formData();
  const fromData = Object.fromEntries(data);

  const blogData = JSON.parse(fromData.blocks);

  console.log(blogData);
  return null;
}

export default BlogWritePage;
