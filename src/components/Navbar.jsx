import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
      role="navigation"
    >
      <Link to="/" className="pl-8">
        <span className="text-2xl font-extrabold">Test</span>
        <span className="text-2xl font-extrabold bg-yellow-200">RUNZ</span>
      </Link>
      <div className="pr-8">
        <Link to="/signup" className="p-4">
          SignUp
        </Link>
        <Link to="/signin" className="p-4">
          SignIn
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
