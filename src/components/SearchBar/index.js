import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

class SearchBar extends Component {
  state = { searchTerm: "" };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  searchForName = () => {
    console.log("searching for name ", this.state.searchTerm);
    // filter name based on first name & last name
    const newUsers = this.props.users.filter((user) => {
      return (
        user.name.first
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase()) ||
        user.name.last
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase())
      );
    });
    this.props.onUserSearch(newUsers);
  };

  searchForLocation = () => {
    console.log("searching for location ", this.state.searchTerm);
  };

  searchForBirthday = () => {
    console.log("searching for birthday ", this.state.searchTerm);
  };

  searchForPronoun = () => {
    console.log("searching for pronoun ", this.state.searchTerm);
  };

  render() {
    // console.log(this.props.users[0])
    return (
      <InputGroup>
        <FormControl
          placeholder="Search the directory"
          aria-label="Search the directory"
          aria-describedby="basic-addon2"
          as="input"
          onChange={this.handleInputChange}
          name="searchTerm"
          value={this.state.searchTerm}
          type="text"
        />

        <DropdownButton
          as={InputGroup.Append}
          variant="outline-secondary"
          title="Search For"
          id="emdir-field-select"
        >
          <Dropdown.Item onSelect={this.searchForName}>Name</Dropdown.Item>
          <Dropdown.Item onSelect={this.searchForLocation}>
            Location
          </Dropdown.Item>
          <Dropdown.Item onSelect={this.searchForBirthday}>
            Birthday
          </Dropdown.Item>
          <Dropdown.Item onSelect={this.searchForPronoun}>
            Pronouns
          </Dropdown.Item>
        </DropdownButton>
      </InputGroup>
    );
  }
}

export default SearchBar;
