import UserForm from "../../components/auth/userForm";

const Register = () => {
  const handleOnSubmit = () => {
    alert("Register Page");
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
