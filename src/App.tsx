import React from "react";
import { StaffFormContainer, StaffListsContainer } from "container";

const App = () => {
  return (
    <div className="flex w-screen h-screen bg-gray-100">
      <div className="mx-auto mt-20 flex flex-col gap-5">
        <StaffFormContainer />
        <StaffListsContainer />
      </div>
    </div>
  );
};

export default App;
