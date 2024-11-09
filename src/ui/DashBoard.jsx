import { useUser } from '../admin/manageAdmin/useUser';
import BlogsTable from '../admin/manageBlogs/BlogsTable';
import DashBorardNav from './DashBorardNav';

function DashBoard() {
  const {
    user: { name },
  } = useUser();
  return (
    <div className="mt-12">
      <h1 className="mb-12 bg-gray-200 py-2 text-center font-header text-xl font-semibold text-gray-700">
        Welcome to Your Dashboard, {name.split(' ').at(0)}
      </h1>
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
