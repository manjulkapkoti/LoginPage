import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function SignInUpButton({ children }: Props) {
  return (
    <div className="signInUp_button-container">
      <button className="signInUp_button" type="submit">
        {children}
      </button>
    </div>
  );
}

export default SignInUpButton;
