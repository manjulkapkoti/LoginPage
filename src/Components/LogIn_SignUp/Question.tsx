import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Question({ children }: Props) {
  return (
    <div className="question_button-container">
      <button className="question_button" type="button">
        {children}
      </button>
    </div>
  );
}

export default Question;
