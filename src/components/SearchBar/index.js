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
    // filter name based on first or last name
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
    // filter location based on city or state
    const newUsers = this.props.users.filter((user) => {
      return (
        user.location.city
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase()) ||
        user.location.state
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase())
      );
    });
    this.props.onUserSearch(newUsers);
  };

  searchForBirthday = () => {
    // filter birthday based on any portion of the date matching search term
    const newUsers = this.props.users.filter((user) => {
      const birthday = new Date(user.dob.date).toLocaleDateString();
      return birthday.includes(this.state.searchTerm);
    });
    this.props.onUserSearch(newUsers);
  };

  searchForPronouns = () => {
    // filter pronouns based on partial match he/him or she/her
    const newUsers = this.props.users.filter((user) => {
      if (
        this.state.searchTerm.toLowerCase().includes("she") ||
        this.state.searchTerm.toLowerCase().includes("her")
      ) {
        return user.gender === "female";
      }
      if (
        this.state.searchTerm.toLowerCase() === "he" || // she includes he
        this.state.searchTerm.toLowerCase().includes("him")
      ) {
        return user.gender === "male";
      }
      return false;
    });
    this.props.onUserSearch(newUsers);
  };

  render() {
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
          <Dropdown.Item onSelect={this.searchForPronouns}>
            Pronouns
          </Dropdown.Item>
        </DropdownButton>
      </InputGroup>
    );
  }
}

export default SearchBar;
