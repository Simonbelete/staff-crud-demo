import React, { ReactElement } from "react";
import { Button, Form } from "components";
import {
  StaffNameContaier,
  StaffAgeContainer,
  StaffEmailContaier,
} from "container";
import { useAppSelector } from "hooks/app";
import axios from "config/axiosConfig";
import { AxiosResponse, AxiosError } from "axios";
import { ToastContainer, toast } from "react-toastify";
import { getStaffsAndUpdate } from "operations/get-saffs";
import { useAppDispatch } from "hooks/app";
import { setAge, setEmail, setName } from "rootSlice";

const StaffFormContainer: React.FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { age, email, name } = useAppSelector((state) => state.RootReducer);
  const hanldeOnClick = () => {
    // Check the datas
    if (Number(age) < 1 || email.length < 1 || name.length < 1) {
      toast.error("Invalid inputs");
      return;
    }

    axios
      .post("/staffs", { name, age, email })
      .then((response: AxiosResponse) => {
        console.log(response);
        toast.success("Sucessfully created staffs");
        getStaffsAndUpdate(dispatch);
        dispatch(setName(""));
        dispatch(setAge("0"));
        dispatch(setEmail(""));
      })
      .catch((error: AxiosError) => {
        console.log(error);
        toast.error("Failed to create new staff");
      });
  };
  return (
    <Form>
      <ToastContainer />
      <StaffNameContaier />
      <StaffAgeContainer />
      <StaffEmailContaier />
      <div className="mt-6">
        <Button onClick={hanldeOnClick}>Add</Button>
      </div>
    </Form>
  );
};

export default StaffFormContainer;
