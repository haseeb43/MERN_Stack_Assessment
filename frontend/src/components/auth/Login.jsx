import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] =  useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const base_url = 'http://localhost:5000';


    const handleLogin = async (e) =>{
        e.preventDefault();

        try {
          const res = await axios.post(`${base_url}/api/users/login`, { username, password });
          localStorage.setItem('token', res.data.token);
          if (res.data.role === 'admin') {
            navigate('/admin');
          } else {
            navigate('/');
          }
        } catch (err) {
          setError('Invalid login credentials');
        }
    }
  return (
    <div>
    <h2>Login</h2>
    {error && <p>{error}</p>}
    <form onSubmit={handleLogin}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  </div>
  )
}

export default Login