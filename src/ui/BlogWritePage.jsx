import WritingSection from '../features/write/WritingSection';
import BlogPreview from '../features/write/BlogPreview';
function BlogWritePage() {
  // console.log(blogBlocks);

  return (
    <div>
      <h1 className="mt-6 rounded-sm bg-gray-200 py-2 text-center text-lg md:text-xl">
        Write, Share, Inspire: Craft Your Blog Post
      </h1>
      <div className="mt-8 grid grid-cols-[4fr_6fr] gap-x-4">
        <WritingSection />
        <BlogPreview />
      </div>
    </div>
  );
}

export default BlogWritePage;
