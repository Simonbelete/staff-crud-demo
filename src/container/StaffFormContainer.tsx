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
      <h1>uuu</h1>
      <StaffNameContaier />
      {/* <StaffNameContaier />
      <StaffAgeContainer />
      <StaffEmailContaier /> */}
      <Button onClick={hanldeOnClick}>Add</Button>
    </Form>
  );
};

export default StaffFormContainer;
