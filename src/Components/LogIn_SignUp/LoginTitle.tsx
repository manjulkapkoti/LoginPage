import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function LoginTitle({ children }: Props) {
  return <h2 className="login-heading">{children}</h2>;
}

export default LoginTitle;
