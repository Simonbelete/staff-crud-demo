import React, { ReactElement } from "react";
import { Input } from "components";
import { setAge } from "rootSlice";
import { useAppDispatch, useAppSelector } from "hooks/app";

const StaffAgeContaier: React.FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.RootReducer.age);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAge(e.target.value));
  };

  return (
    <Input
      placeholder="Staff age"
      label="Age:"
      value={String(value)}
      onChange={handleOnChange}
    />
  );
};

export default StaffAgeContaier;
