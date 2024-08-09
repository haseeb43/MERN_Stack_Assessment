import { Navigate } from "react-router-dom";
import VerifyAuth from "./verifyAuth";

const VerifyAdmin = ({ children }) => {
  const role = "ADMIN";

  if (role === "ADMIN") return <VerifyAuth>{children}</VerifyAuth>;
  else return <Navigate to="/" />;
};

export default VerifyAdmin;
