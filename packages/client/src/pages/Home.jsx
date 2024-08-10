import React, { useEffect, useState } from "react";
import BlogPostApi from "../api/post/post";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Logout from "../components/auth/logoutButton";

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
      })
      .catch((err) => {
        console.log("ook")
        console.log(err.response.data.message);
        toast.error(err.response.data.message);
      });
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    // Shared home page for admin and user - with authorized controls
    <div>
      <Logout />
      {posts.length ? (
        posts.map(({ _id, title, content }, index) => (
          <div key={index}>
            <div>
              <span>{title}</span>
            </div>
            <span>{content}</span>

            <div>
              <Link to={`/admin/update-post/${_id}`}>
                <button>Update</button>
              </Link>
              <button onClick={() => deletePost(_id)}>Delete</button>
            </div>
          </div>
        ))
      ) : (
        <span>
          There is no post yet <Link to="/admin/create-post">Create One</Link>
        </span>
      )}
    </div>
  );
};

export default Home;
