import { Link } from 'react-router-dom';
import Button from './buttons/Button';
import Logout from './Logout';

function DashBorardNav() {
  return (
    <div className="mb-6 flex items-center justify-center gap-x-4">
      <Logout />
      <Link
        to="/admin/config"
        className="inline-block text-gray-700 hover:underline"
      >
        Manage account
      </Link>
      <Link
        to="/admin/add"
        className="inline-block text-gray-700 hover:underline"
      >
        Add Admin
      </Link>
      <Link
        to="/admin/write"
        className="ml-auto font-header text-base font-medium sm:text-xl"
      >
        <Button type="create">&#43; Create blog</Button>
      </Link>
    </div>
  );
}

export default DashBorardNav;
