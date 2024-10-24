import { useLoaderData } from 'react-router-dom';
import BlogsTable from '../admin/manageBlogs/BlogsTable';

function DashBoard() {
  return (
    <div className="mt-12">
      <div>
        <p className="font-header text-2xl font-semibold">
          Devhorizon Public Blogs
        </p>
        <BlogsTable type="published" />
      </div>
      <div>
        <p className="mt-12 font-header text-2xl font-semibold">
          Devhorizon Draft Blogs
        </p>
        <BlogsTable type="draft" />
      </div>
    </div>
  );
}

export default DashBoard;
