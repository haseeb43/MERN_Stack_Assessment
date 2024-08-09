import UserForm from "../../components/auth/userForm";

const login = () => {
  const handleOnSubmit = () => {
    alert("login page");
  };
  return (
    <UserForm title="Login Page" onSubmit={handleOnSubmit} haveAccount={false} />
  );
};

export default login;
