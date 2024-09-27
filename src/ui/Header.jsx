import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import Button from "./buttons/Button";

function PageNav() {
  return (
    <nav>
      <Logo />
      <ul>
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
