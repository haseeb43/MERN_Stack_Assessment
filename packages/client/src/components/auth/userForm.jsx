// src/components/UserForm.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserForm = ({ title, onSubmit, haveAccount }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!username) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onSubmit({ username, password });
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {haveAccount ? (
        <span>
          Have account? <Link to="/login">Login</Link>
        </span>
      ) : (
        <span>
          Don't have an account? <Link to="/register">Register</Link>
        </span>
      )}
    </div>
  );
};

export default UserForm;
