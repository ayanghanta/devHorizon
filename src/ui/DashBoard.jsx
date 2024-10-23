import { useLoaderData } from 'react-router-dom';
import BlogsTable from '../admin/manageBlogs/BlogsTable';

function DashBoard() {
  return (
    <div className="mt-12">
      <div>
        <p className="font-header text-2xl font-semibold">
          Devhorizon Public Blogs
        </p>
        <BlogsTable />
      </div>
      {/* <div>
        <p className="font-header text-2xl font-semibold">Draft Blogs</p>
        <BlogsTable />
      </div> */}
    </div>
  );
}

export default DashBoard;
