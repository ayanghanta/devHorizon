import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/">
      <img src="/logo.png" alt="devhorizon logo" className="w-[72px] sm:w-32" />
    </Link>
  );
}

export default Logo;
