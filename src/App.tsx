import React from "react";
import { StaffFormContainer, StaffListsContainer } from "container";

const App = () => {
  return (
    <div className="flex w-screen h-screen bg-gray-100">
      <div className="mx-auto lg:mt-20 flex flex-col items-center justify-center gap-5">
        <StaffFormContainer />
        <StaffListsContainer />
      </div>
    </div>
  );
};

export default App;
