import InfoSection from "./InfoSection";
import PasswordSection from "./PasswordSection";
import SignInUpButton from "./SignInUpButton";
import Question from "./Question";

function SignUpForm() {
  return (
    <form>
      <div className="signup-form-container">
        <InfoSection typeOfInput="text" placeHolder="Full name"></InfoSection>
        <InfoSection typeOfInput="email" placeHolder="Email"></InfoSection>
        <PasswordSection></PasswordSection>
        <div className="gap"></div>
        <InfoSection
          typeOfInput="password"
          placeHolder="Confirm Password"
        ></InfoSection>

        <div className="policy-disclaimer">
          <p>
            By clicking Sign Up, you agree to our Terms, Data Policy and Cookies
            Policy.
          </p>
        </div>

        <SignInUpButton>Sign Up</SignInUpButton>
        <Question>Do You Have An Account? Sign In</Question>
      </div>
    </form>
  );
}

export default SignUpForm;
