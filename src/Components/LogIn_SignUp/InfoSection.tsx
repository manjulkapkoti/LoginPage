import { useRef } from "react";

interface Props {
  typeOfInput: string;
  placeHolder: string;
}

function InfoSection({ typeOfInput = "text", placeHolder }: Props) {
  const containerRef = useRef<HTMLDivElement>();

  const handleClick = () => {
    if (containerRef !== undefined || containerRef !== null)
      containerRef.current.style.backgroundColor = "black";
  };

  return (
    <div className="info-input-container" ref={containerRef} tabIndex={1}>
      <input
        className="info-input"
        type={typeOfInput}
        placeholder={placeHolder}
        onClick={handleClick}
      ></input>
    </div>
  );
}

export default InfoSection;
