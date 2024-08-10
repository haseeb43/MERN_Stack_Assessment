import { Navigate } from "react-router-dom";
import VerifyAuth from "./verifyAuth";

const VerifyAdmin = ({ children }) => {
  const role = JSON.parse(localStorage.getItem("userData"))?.role;

  if (role === "ADMIN") return <VerifyAuth>{children}</VerifyAuth>;
  else return <Navigate to="/" />;
};

export default VerifyAdmin;
