import React, { ReactElement } from "react";
import { Button, Form } from "components";
import {
  StaffNameContaier,
  StaffAgeContainer,
  StaffEmailContaier,
} from "container";

const StaffFormContainer: React.FC = (): ReactElement => {
  const hanldeOnClick = () => {};
  return (
    <Form>
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
