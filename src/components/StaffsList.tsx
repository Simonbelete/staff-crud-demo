import React, { ReactElement } from "react";

const StaffsList: React.FC<{ children: ReactElement[] | ReactElement }> = ({
  children,
}): ReactElement => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center bg-white shadow-lg rounded-xl py-5 px-5">
      {children}
    </div>
  );
};

export default StaffsList;
