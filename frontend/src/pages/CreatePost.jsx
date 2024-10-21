import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";


const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    
    // Decode the token to get the username
    // const userRole = localStorage.getItem('role');
    const username = jwtDecode(token)?.username;
    // const username = jwt.decode(token)?.username;

    try {
      await axios.post('http://localhost:5000/api/posts/', { title, content, author: username || "admin" }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate('/dashboard');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl mb-4">Create New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-2 p-2 border"
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mb-4 p-2 border"
          required 
        />
        <button type="submit" className="bg-green-500 text-white py-2">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
