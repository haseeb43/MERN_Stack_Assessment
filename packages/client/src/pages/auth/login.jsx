import UserForm from "../../components/auth/userForm";
import UserApi from "../../api/user/user";
import { toast } from "react-toastify";
import { ROLE_ADMIN } from "../../constants/constants";
import { useNavigate } from "react-router-dom";

const login = () => {
  const navigate = useNavigate();

  const handleOnSubmit = ({ username, password }) => {
    UserApi.login({
      username: username,
      password: password,
    })
      .then((res) => {
        const userRole = res.data.data.loggedInUser.role;
        localStorage.setItem("authenticated", res.data.data.accessToken);
        localStorage.setItem(
          "userData",
          JSON.stringify(res.data.data.loggedInUser)
        );

        if (userRole === ROLE_ADMIN) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <UserForm
      title="Login Page"
      onSubmit={handleOnSubmit}
      haveAccount={false}
    />
  );
};

export default login;
