import { toast } from "react-toastify";
import UserApi from "../../api/user/user";
import UserForm from "../../components/auth/userForm";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleOnSubmit = ({ username, password }) => {
    UserApi.register({
      username,
      password,
    })
      .then((res) => {
        toast.info(res.data.message);
        navigate("/login");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  
  return (
    <UserForm
      title="Register Page"
      onSubmit={handleOnSubmit}
      haveAccount={true}
    />
  );
};

export default Register;
