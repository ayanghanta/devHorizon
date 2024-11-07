import BlogsTable from '../admin/manageBlogs/BlogsTable';
import DashBorardNav from './DashBorardNav';

function DashBoard() {
  return (
    <div className="mt-12">
      <DashBorardNav />
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
