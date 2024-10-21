import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role is set to 'user'
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users/register', { username, password, role });
      navigate('/login');
    } catch (error) {
      console.error('Registration error', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleRegister} className="p-6 bg-white rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl mb-6">Register</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4 p-2 w-full border"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 p-2 w-full border"
        />
        <div className="mb-4">
          <label className="mr-2">Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="p-2 border"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 w-full">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
