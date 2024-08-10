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

const App = () => {
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
            <Home />
          </VerifyAuth>
        }
      />

      {/* Admin Routes  */}

      <Route
        path="/admin"
        element={
          <VerifyAdmin>
            <AdminLayout />
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
