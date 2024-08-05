interface Props {
  children: string;
  textColor: string;
  borderColor: string;
}

function SignOnButton({ children, textColor, borderColor }: Props) {
  return (
    <button type="button" className={"signon_" + textColor + "_" + borderColor}>
      {children}
    </button>
  );
}

export default SignOnButton;
