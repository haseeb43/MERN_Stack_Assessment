import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import UserApi from "../../api/user/user";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    UserApi.logout().then((res) => {
      toast.error(res?.data.message || "User logged out successfully");
    });

    localStorage.removeItem("authenticated");
    localStorage.removeItem("userData");

    navigate("/login");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
