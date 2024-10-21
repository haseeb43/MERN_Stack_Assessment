import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
      setPost(res.data);
    };
    fetchPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="mb-4">{post.content}</p>
      <p className="text-gray-500">Author: {post.author}</p>
      <p className="text-gray-500">Created At: {new Date(post.createdAt).toLocaleString()}</p>
    </div>
  );
};

export default SinglePost;
