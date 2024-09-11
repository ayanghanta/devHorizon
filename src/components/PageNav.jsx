import { Link, NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import Button from "./Button";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/about">About me</NavLink>
        </li>
        <li>
          <NavLink to="/blogs">Blogs</NavLink>
        </li>
      </ul>
      <Link to="/login">
        <Button type="create">&#43; Create</Button>
      </Link>
    </nav>
  );
}

export default PageNav;
