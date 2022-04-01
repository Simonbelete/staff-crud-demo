import React, { ReactElement, useEffect, useState } from "react";
import { StaffsList, Staff } from "components";
import { getStaffs } from "operations";

const StaffListsContainer: React.FC = (): ReactElement => {
  // const [staffs, setStaffs] = useState<
  //   { id: number; name: string; age: string; email: string }[]
  // >([]);

  const { staffs, loading, error } = getStaffs();

  const handleOnDelete = (id: number) => {
    fetch("http://127.0.01:4000", { method: "DELETE" }).then((res) =>
      console.log(res)
    );
  };

  useEffect(() => {
    console.log(staffs);
  }, []);

  return (
    <StaffsList>
      <>
        {loading && (
          <div className="flex w-full h-full items-center justify-center">
            Loading...
          </div>
        )}
        {staffs &&
          staffs.map((_, i) => (
            <Staff
              id={_.id}
              name={_.name}
              age={String(_.age)}
              email={_.email}
              onDelete={handleOnDelete}
            />
          ))}
      </>
    </StaffsList>
  );
};

export default StaffListsContainer;
