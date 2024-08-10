import { toast } from "react-toastify";
import UserApi from "../../api/user/user";
import AuthForm from "../../components/auth/authForm";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../../wrappers/pageWrapper";

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
    <PageWrapper>
      <AuthForm title="Register" onSubmit={handleOnSubmit} />
    </PageWrapper>
  );
};

export default Register;
