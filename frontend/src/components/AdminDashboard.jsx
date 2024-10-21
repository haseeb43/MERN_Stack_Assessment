import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editId, setEditId] = useState(null);

  const base_url = 'http://localhost:5000';

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`${base_url}/api/posts`);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  const handleCreate = async () => {
    await axios.post(`${base_url}/api/posts`, { title, content }, {
      headers: { 'x-auth-token': localStorage.getItem('token') }
    });
    window.location.reload();
  };

  const handleEdit = async () => {
    await axios.put(`${base_url}/api/posts/${editId}`, { title, content }, {
      headers: { 'x-auth-token': localStorage.getItem('token') }
    });
    window.location.reload();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${base_url}/api/posts/${id}`, {
      headers: { 'x-auth-token': localStorage.getItem('token') }
    });
    window.location.reload();
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>

      <form onSubmit={editId ? handleEdit : handleCreate}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        />
        <button type="submit">{editId ? 'Edit' : 'Create'} Post</button>
      </form>

      <h3>Existing Posts</h3>
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <button onClick={() => { setEditId(post._id); setTitle(post.title); setContent(post.content); }}>Edit</button>
          <button onClick={() => handleDelete(post._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
