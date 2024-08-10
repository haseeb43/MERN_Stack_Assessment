import { Navigate } from "react-router-dom";

const LoggedIn = ({ children }) => {
  const authenticated = localStorage.getItem("authenticated")

  if (authenticated) return <Navigate to="/" />;
  else return children;
};

export default LoggedIn;
