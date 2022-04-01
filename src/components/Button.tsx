import React, { ReactElement } from "react";

const Button: React.FC<{
  children: string | ReactElement;
  onClick: () => void;
}> = ({ children, onClick }): ReactElement => {
  return (
    <button
      type="button"
      className="h-fit w-fit px-4 py-[5px] font-medium  hover:bg-gray-100 rounded-lg border border-gray-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
