import React, { ReactElement, useEffect, useState } from "react";
import { StaffsList, Staff as StaffComponent } from "components";
import { getStaffsAndUpdate } from "operations";
import axios from "config/axiosConfig";
import { toast } from "react-toastify";
import { AxiosResponse, AxiosError } from "axios";
import { Staff } from "types.d";
import { useAppSelector } from "hooks/app";
import { useAppDispatch } from "hooks/app";

const StaffListsContainer: React.FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { staffs, loading } = useAppSelector((state) => state.RootReducer);
  // TODO: Fetching must be done after component is rendered
  useEffect(() => {
    getStaffsAndUpdate(dispatch);
  }, []);
  // getStaffsAndUpdate();

  const handleOnDelete = (id: number) => {
    axios
      .delete(`/staffs/${id}`)
      .then((response: AxiosResponse) => {
        getStaffsAndUpdate(dispatch);
        console.log(response);
        toast.success("Sucessfully Deleted staffs");
      })
      .catch((error: AxiosError) => {
        console.log(error);
        toast.error("Failed to Delete new staff");
      });
  };

  const handleOnUpdate = (staff: Staff) => {
    axios
      .put(`/staffs/${staff.id}`, staff)
      .then((response: AxiosResponse) => {
        getStaffsAndUpdate(dispatch);
        console.log(response);
        toast.success("Sucessfully Updated staffs");
      })
      .catch((error: AxiosError) => {
        console.log(error);
        toast.error("Failed to Updated staff");
      });
  };

  return (
    <StaffsList>
      <>
        {loading && (
          <div className="flex w-full h-full items-center justify-center">
            Loading...
          </div>
        )}
        {staffs && !loading && staffs.length === 0 && (
          <div>No Staffs found</div>
        )}
        {staffs && (
          <div className="grid grid-cols-12 gap-4">
            <p className="col-span-2">ID</p>
            <p className="col-span-2">Full Name</p>
            <p className="col-span-2">Age</p>
            <p className="col-span-3">Email Address</p>
            <p className="col-span-2">Settings</p>
          </div>
        )}
        {staffs &&
          staffs.map((_, i) => (
            <StaffComponent
              id={_.id}
              name={_.name}
              age={String(_.age)}
              email={_.email}
              onDelete={handleOnDelete}
              onUpdate={handleOnUpdate}
            />
          ))}
      </>
    </StaffsList>
  );
};

export default StaffListsContainer;
