import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-lg mt-4">{post.content}</p>
      <p className="mt-2 text-sm text-gray-500">Author: {post.author}</p>
    </div>
  );
};

export default PostDetails;
