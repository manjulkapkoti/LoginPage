import InfoSection from "./InfoSection";
import PasswordSection from "./PasswordSection";
import SignInUpButton from "./SignInUpButton";
import Question from "./Question";

function LoginForm() {
  return (
    <form>
      <div className="login-form-container">
        <InfoSection typeOfInput="email" placeHolder="Email"></InfoSection>
        <PasswordSection></PasswordSection>

        <div className="forgot-password-container">
          <a className="forgot-password" href="">
            Forgot password?
          </a>
        </div>

        <div className="checkbox-container">
          <input className="checkbox" type="checkbox"></input>
          <p className="remember-me">Remember me</p>
        </div>

        <SignInUpButton>Login</SignInUpButton>
        <Question>Don't You Have An Account? Sign Up</Question>
      </div>
    </form>
  );
}

export default LoginForm;
