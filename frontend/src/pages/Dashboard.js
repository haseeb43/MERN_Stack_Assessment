import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/posts/', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl mb-4">Dashboard</h1>
      <Link to="/create-post" className="bg-green-500 text-white px-4 py-2 rounded mb-4 inline-block">
        Create New Post
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post) => (
          <div key={post._id} className="p-4 border rounded">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.content.substring(0, 100)}...</p>
            <div className="mt-2">
              <Link to={`/posts/${post._id}`} className="text-blue-500 mr-4">View</Link>
              <Link to={`/edit-post/${post._id}`} className="text-yellow-500 mr-4">Edit</Link>
              <button
                onClick={async () => {
                  const token = localStorage.getItem('token');
                  await axios.delete(`http://localhost:5000/api/posts/${post._id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                  });
                  setPosts(posts.filter((p) => p._id !== post._id));
                }}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
