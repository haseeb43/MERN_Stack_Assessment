import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  const base_url = 'http://localhost:5000';

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`${base_url}/api/posts/${id}`);
      setPost(res.data);
    };
    fetchPost();
  }, [id]);

  return (
    <div>
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostDetails;
