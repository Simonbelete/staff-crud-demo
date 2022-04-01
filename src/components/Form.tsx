import React, { ReactElement } from "react";
import { Input } from "components";

const Form: React.FC<{ children: ReactElement[] }> = ({
  children,
}): ReactElement => {
  return (
    <form className="flex flex-col lg:flex-row gap-5 justify-center items-center bg-white shadow-lg rounded-xl py-5 px-5">
      {children}
    </form>
  );
};

export default Form;
