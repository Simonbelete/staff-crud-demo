import React from "react";
import { StaffFormContainer, StaffListsContainer } from "container";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <div className="m-auto">
        <StaffFormContainer />
        <StaffListsContainer />
      </div>
    </div>
  );
};

export default App;
