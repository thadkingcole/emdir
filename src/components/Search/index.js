import React from "react";
import { InputGroup, FormControl, DropdownButton, Dropdown } from "react-bootstrap";

export default () => {
  return (
    <InputGroup>
      <FormControl
        placeholder="Search the directory"
        aria-label="Search the directory"
        aria-describedby="basic-addon2"
      />

      <DropdownButton
        as={InputGroup.Append}
        variant="outline-secondary"
        title="Search For"
        id="emdir-field-select"
      >
        <Dropdown.Item href="#">Name</Dropdown.Item>
        <Dropdown.Item href="#">Location</Dropdown.Item>
        <Dropdown.Item href="#">Age</Dropdown.Item>
        <Dropdown.Item href="#">Gender</Dropdown.Item>
      </DropdownButton>
    </InputGroup>
  );
};
