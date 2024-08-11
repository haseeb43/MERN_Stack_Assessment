import { Navigate } from "react-router-dom";
import VerifyAuth from "./verifyAuth";
import { ROLE_ADMIN } from "../constants/constants";
const VerifyAdmin = ({ children }) => {
  const role = JSON.parse(localStorage.getItem("userData"))?.role;

  if (role === ROLE_ADMIN) return <VerifyAuth>{children}</VerifyAuth>;
  else return <Navigate to="/" />;
};

export default VerifyAdmin;
