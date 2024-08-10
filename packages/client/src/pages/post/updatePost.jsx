import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import PostForm from "../../components/post/postForm";
import BlogPostApi from "../../api/post/post";

const UpdatePost = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState({ title: "", content: "" });

  const navigate = useNavigate();
  const handleOnSubmit = ({ title, content }) => {
    BlogPostApi.update_post(id, {
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

  useEffect(() => {
    BlogPostApi.get_single(id)
      .then((res) => {
        setPostData(res.data.data);
      })
      .catch((err) => toast.error(err.response.data.message));
  }, []);

  return (
    <PostForm
      pageTitle="Update Post"
      onSubmit={handleOnSubmit}
      postData={postData}
    />
  );
};

export default UpdatePost;
