import React, { ReactElement } from "react";

const Button: React.FC<{
  children: string | ReactElement;
  onClick: () => void;
}> = ({ children, onClick }): ReactElement => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
