import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-lg">Blog</Link>
        <div>
          {token ? (
            <>
              <Link to="/dashboard" className="text-white mr-4">Dashboard</Link>
              <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded mr-4">
                Login
              </Link>
              <Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
