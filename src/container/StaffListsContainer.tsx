import React, { ReactElement, useEffect, useState } from "react";
import { StaffsList, Staff } from "components";

const StaffListsContainer: React.FC = (): ReactElement => {
  const [staffs, setStaffs] = useState<
    { id: number; name: string; age: string; email: string }[]
  >([]);

  const handleOnDelete = (id: number) => {
    fetch("http://127.0.01:4000", { method: "DELETE" }).then((res) =>
      console.log(res)
    );
  };

  useEffect(() => {
    fetch("http://127.0.01:4000")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  }, []);

  return (
    <StaffsList>
      {staffs &&
        staffs.map((_, i) => (
          <Staff
            id={_.id}
            name={_.name}
            age={_.age}
            email={_.email}
            onDelete={handleOnDelete}
          />
        ))}
    </StaffsList>
  );
};

export default StaffListsContainer;
