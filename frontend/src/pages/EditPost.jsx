import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get(`http://localhost:5000/api/posts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTitle(res.data.title);
      setContent(res.data.content);
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
        await axios.put(`http://localhost:5000/api/posts/${id}`, { title, content }, {
            headers: { Authorization: `Bearer ${token}` },
          });
          navigate('/dashboard');
        } catch (error) {
          console.error('Error updating post:', error);
        }
      };
    
      return (
        <div className="container mx-auto p-6">
          <h1 className="text-2xl mb-4">Edit Post</h1>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mb-2 p-2 border"
            />
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mb-4 p-2 border"
            />
            <button type="submit" className="bg-yellow-500 text-white py-2">Update Post</button>
          </form>
        </div>
      );
    };
    
    export default EditPost;
    
