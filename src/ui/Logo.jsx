import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/">
      <img src="/logo.png" alt="devhorizon logo" className="w-24 sm:w-40" />
    </Link>
  );
}

export default Logo;
