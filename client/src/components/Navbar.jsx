import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white flex justify-between items-center px-6 py-4 shadow-md">
      <h1 className="text-xl font-bold">MyApp</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/login" className="hover:text-gray-300">Login</Link>
        <Link to="/register" className="hover:text-gray-300">Register</Link>
      </div>
    </nav>
  );
}
