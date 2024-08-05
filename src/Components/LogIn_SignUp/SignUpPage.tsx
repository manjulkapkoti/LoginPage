import LoginTitle from "./LoginTitle";
import SignOnButton from "./SignOnButton";
import SignUpForm from "./SignUpForm";

function SignUpPage() {
  return (
    <div className="signUp-container">
      <LoginTitle>Create account to Artify</LoginTitle>
      <div className="credential-container">
        <div className="signon_container">
          <SignOnButton textColor="red" borderColor="red">
            Google
          </SignOnButton>
          <SignOnButton textColor="blue" borderColor="blue">
            Facebook
          </SignOnButton>
        </div>
        <SignUpForm></SignUpForm>
      </div>
    </div>
  );
}

export default SignUpPage;
