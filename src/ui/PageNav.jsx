import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';
import Button from './buttons/Button';

function PageNav({ type = 'appLayout' }) {
  return (
    <nav className="flex items-center justify-between p-3 font-header">
      <Logo />
      {type === 'appLayout' && (
        <ul className="flex gap-4 text-base font-medium sm:gap-8 sm:text-xl">
          <li>
            <NavLink to="/about">About me</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
        </ul>
      )}
      <Link to="/admin/dashboard">DashBoard</Link>
      <div className="space-x-3">
        <Link to="/login">
          <Button type="primary">Login</Button>
        </Link>
      </div>
      {/* <div></div> */}
    </nav>
  );
}

export default PageNav;
