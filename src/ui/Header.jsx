import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';
import Button from './buttons/Button';

function PageNav() {
  return (
    <nav className="font-header flex items-center justify-between p-3">
      <Logo />
      <ul className="flex gap-4 text-base font-medium sm:gap-8 sm:text-xl">
        <li>
          <NavLink to="/about">About me</NavLink>
        </li>
        <li>
          <NavLink to="/blogs">Blogs</NavLink>
        </li>
      </ul>
      <Link to="/write">
        <Button type="create">&#43; Create</Button>
      </Link>
    </nav>
  );
}

export default PageNav;
