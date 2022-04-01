import React, { ReactElement, useEffect, useState } from "react";
import { StaffsList, Staff } from "components";
import { getStaffs } from "operations";
import axios from "config/axiosConfig";
import { ToastContainer, toast } from "react-toastify";
import { AxiosResponse, AxiosError } from "axios";

const StaffListsContainer: React.FC = (): ReactElement => {
  const { staffs, loading, error } = getStaffs();

  const handleOnDelete = (id: number) => {
    axios
      .delete(`/staffs/${id}`)
      .then((response: AxiosResponse) => {
        console.log(response);
        toast.success("Sucessfully Deleted staffs");
      })
      .catch((error: AxiosError) => {
        console.log(error);
        toast.error("Failed to Delete new staff");
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
