import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';
import Button from './buttons/Button';
import { useUser } from '../admin/manageAdmin/useUser';

function PageNav({ type = 'appLayout' }) {
  const { isAuthenticated } = useUser();

  return (
    <nav className="flex items-center justify-between p-3 font-header">
      <Logo />

      <ul className="flex gap-4 text-base font-medium sm:gap-8 sm:text-xl">
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-amber-500 underline' : ''
            }
          >
            About me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive ? 'text-amber-500 underline' : ''
            }
          >
            Blogs
          </NavLink>
        </li>
      </ul>

      {isAuthenticated ? (
        <div className="space-x-3">
          <Link to="/admin/dashboard">DashBoard</Link>
          <Link to="/login">
            <Button type="primary">Login</Button>
          </Link>
        </div>
      ) : (
        <div className="hidden sm:mr-12 sm:block md:mr-24"></div>
      )}
    </nav>
  );
}

export default PageNav;
