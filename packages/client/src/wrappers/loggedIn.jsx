import { Navigate } from "react-router-dom";

const LoggedIn = ({ children }) => {
  const authenticated = true; // Need to check validate token

  if (authenticated) return <Navigate to="/" />;
  else return children;
};

export default LoggedIn;
