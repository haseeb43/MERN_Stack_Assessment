import React, { useEffect, useState } from "react";
import BlogPostApi from "../api/post/post";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Logout from "../components/auth/logoutButton";
import MainLayout from "../layouts/mainLayout";
import PostCard from "../components/post/postCard";
import PageWrapper from "../wrappers/pageWrapper";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchAllPosts = () => {
    BlogPostApi.get_all()
      .then((res) => {
        setPosts(res.data.data.posts);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const deletePost = (id) => {
    BlogPostApi.delete_post(id)
      .then((res) => {
        fetchAllPosts();
        toast.info(res.data.message)
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  // return <MainLayout />;
  return (
    <PageWrapper>
      {posts.length ? (
        posts.map((post, index) => (
          <PostCard key={index} post={post} deletePost={deletePost} />
        ))
      ) : (
        <span>
          There is no post yet <Link to="/admin/create-post">Create One</Link>
        </span>
      )}
    </PageWrapper>
  );
};

export default Home;
