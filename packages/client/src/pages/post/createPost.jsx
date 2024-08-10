import React from "react";
import PostForm from "../../components/post/postForm";
import BlogPostApi from "../../api/post/post";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../../wrappers/pageWrapper";

const CreatePost = () => {
  const navigate = useNavigate();

  const handleOnSubmit = ({ title, content }) => {
    BlogPostApi.create_post({
      title,
      content,
    })
      .then((res) => {
        toast.info(res.data.message);
        navigate("/admin");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  return (
    <PageWrapper>
      <PostForm buttonTitle="Create Post" onSubmit={handleOnSubmit} />
    </PageWrapper>
  );
};

export default CreatePost;
