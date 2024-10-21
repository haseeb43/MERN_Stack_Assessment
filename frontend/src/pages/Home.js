import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts/')
      .then(response => setPosts(response.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-6">All Posts</h1>
      {posts.length > 0 ? (
        posts.map(post => (
          <div key={post._id} className="border-b-2 mb-4 pb-4">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.content.substring(0, 100)}...</p>
            <Link to={`/posts/${post._id}`} className="text-blue-500">Read More</Link>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export default Home;
