import React, { ReactElement } from "react";
import { Input } from "components";

const Form: React.FC<{ children: ReactElement[] }> = ({
  children,
}): ReactElement => {
  return <form className="flex flex-row gap-1">{children}</form>;
};

export default Form;
