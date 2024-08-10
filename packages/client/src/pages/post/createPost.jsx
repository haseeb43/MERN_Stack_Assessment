import React from "react";
import PostForm from "../../components/post/postForm";
import BlogPostApi from "../../api/post/post";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();

  const handleOnSubmit = ({ title, content }) => {
    BlogPostApi.create_post({
      title,
      content,
    })
      .then((res) => {
        toast.info(res.data.message);
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  return <PostForm pageTitle="Create Post" onSubmit={handleOnSubmit} />;
};

export default CreatePost;
