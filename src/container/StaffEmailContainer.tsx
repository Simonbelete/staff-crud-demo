import React, { ReactElement } from "react";
import { Input } from "components";
import { setEmail } from "rootSlice";
import { useAppDispatch, useAppSelector } from "hooks/app";

const StaffEmailContaier: React.FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.RootReducer.name);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };

  return (
    <Input placeholder="Staff email" value={value} onChange={handleOnChange} />
  );
};

export default StaffEmailContaier;
