import { Navigate } from "react-router-dom";

const VerifyAuth = ({ children }) => {
  const authenticated = true; // Need to check validated token

  if (authenticated) return children;
  else return <Navigate to="/login" />;
};

export default VerifyAuth;
