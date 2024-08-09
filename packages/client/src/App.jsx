import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import VerifyAuth from "./wrappers/verifyAuth";
import VerifyAdmin from "./wrappers/verifyAdmin";
import AdminLayout from "./layouts/AdminLayout";
import LoggedIn from "./wrappers/loggedIn";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";

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
        <Route index element={<div>This is admin main page</div>} />
        <Route
          path="create-post"
          element={<div>This is create post page</div>}
        />
        <Route
          path="update-post"
          element={<div>This is create update page</div>}
        />
      </Route>
    </Routes>
  );
};

export default App;
