import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import VerifyAuth from "./wrappers/verifyAuth";
import VerifyAdmin from "./wrappers/verifyAdmin";
import AdminLayout from "./layouts/AdminLayout";
import LoggedIn from "./wrappers/loggedIn";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import CreatePost from "./pages/post/createPost";
import UpdatePost from "./pages/post/updatePost";
import MainLayout, { Dashboard } from "./layouts/mainLayout";
import { IconBrandTabler } from "@tabler/icons-react";
import ReadPost from "./pages/post/readPost";

const App = () => {
  const adminRoutes = [
    {
      label: "Home",
      href: "/admin",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Create Post",
      href: "/admin/create-post",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const userRoutes = [
    {
      label: "Home",
      href: "/",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Blog",
      href: "/blog",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  return (
    <Routes>
      {/* Unprotected Routes  */}

      <Route
        path="/register"
        element={
          <LoggedIn>
            <Register />
          </LoggedIn>
        }
      />
      <Route
        path="/login"
        element={
          <LoggedIn>
            <Login />
          </LoggedIn>
        }
      />

      {/* Protected Routes  */}
      <Route
        path="/"
        element={
          <VerifyAuth>
            <MainLayout links={userRoutes} />
          </VerifyAuth>
        }
      >
        <Route index element={<Home />} />
        <Route path="posts/:id" element={<ReadPost />} />
      </Route>

      {/* Admin Routes  */}

      <Route
        path="/admin"
        element={
          <VerifyAdmin>
            <MainLayout links={adminRoutes} />
          </VerifyAdmin>
        }
      >
        <Route index element={<Home />} />
        <Route path="create-post" element={<CreatePost />} />
        <Route path="update-post/:id" element={<UpdatePost />} />
      </Route>
    </Routes>
  );
};

export default App;
