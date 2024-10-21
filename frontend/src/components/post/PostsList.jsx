import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  const base_url = 'http://localhost:5000';

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`${base_url}/api/posts`);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <Link to={`/posts/${post._id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
