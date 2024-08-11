import { ROLE_ADMIN } from "../constants/constants";
const ShowIfAdmin = ({ children }) => {
  const role = JSON.parse(localStorage.getItem("userData"))?.role;

  if (role === ROLE_ADMIN) return children;
  else return null;
};

export default ShowIfAdmin;
