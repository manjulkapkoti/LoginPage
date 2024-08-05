import LoginTitle from "./LoginTitle";
import SignOnButton from "./SignOnButton";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <div className="login-container">
      <LoginTitle>Login to Artify</LoginTitle>
      <div className="credential-container">
        <div className="signon_container">
          <SignOnButton textColor="red" borderColor="red">
            Google
          </SignOnButton>
          <SignOnButton textColor="blue" borderColor="blue">
            Facebook
          </SignOnButton>
        </div>
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}

export default Login;
