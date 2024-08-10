import { Navigate } from "react-router-dom";

const VerifyAuth = ({ children }) => {
  const authenticated = localStorage.getItem("authenticated");

  if (authenticated) return children;
  else return <Navigate to="/login" />;
};

export default VerifyAuth;
