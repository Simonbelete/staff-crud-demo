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
      <Button onClick={hanldeOnClick}>Add</Button>
    </Form>
  );
};

export default StaffFormContainer;
