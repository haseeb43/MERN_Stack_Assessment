import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:5000/api/posts/');
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl mb-6 text-black">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post) => (
          <div key={post._id} className="p-4 border rounded shadow-md">
            <h2 className="text-2xl mb-2">{post.title}</h2>
            <p>{post.content.substring(0, 100)}...</p>
            <Link to={`/posts/${post._id}`} className="text-blue-500">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
