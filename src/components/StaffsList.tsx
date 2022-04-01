import React, { ReactElement } from "react";

const StaffsList: React.FC<{ children: ReactElement[] }> = ({
  children,
}): ReactElement => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

export default StaffsList;
