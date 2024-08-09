import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Auth from "./pages/auth/auth";
import Home from "./pages/Home";
import VerifyAuth from "./HOC/verifyAuth";
import VerifyAdmin from "./HOC/verifyAdmin";
import AdminLayout from "./layouts/AdminLayout";

const App = () => {
  return (
    <Routes>
      {/* Unprotected Routes  */}
      <Route path="/register" element={<Auth />} />

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
