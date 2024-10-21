import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', { username, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.role);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-2 p-2 border"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 p-2 border"
        />
        <button type="submit" className="bg-blue-500 text-white py-2">Login</button>
      </form>
    </div>
  );
};

export default Login;
