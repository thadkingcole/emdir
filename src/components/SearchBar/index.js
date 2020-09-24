import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function SearchBar() {
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
        <Dropdown.Item href="#">Birthday</Dropdown.Item>
        <Dropdown.Item href="#">Pronouns</Dropdown.Item>
      </DropdownButton>
    </InputGroup>
  );
}

export default SearchBar;
