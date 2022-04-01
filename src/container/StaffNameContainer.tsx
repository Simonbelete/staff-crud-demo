import React, { ReactElement } from "react";
import { Input } from "components";
import { setName } from "rootSlice";
import { useAppDispatch, useAppSelector } from "hooks/app";

const StaffNameContaier: React.FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.RootReducer.name);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };

  return (
    <Input placeholder="Staff name" value={value} onChange={handleOnChange} />
  );
};

export default StaffNameContaier;
