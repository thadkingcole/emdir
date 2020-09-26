import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneSquareAlt,
  faMobileAlt,
  faEnvelopeOpenText,
  faCaretUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

class Emdir extends Component {
  state = {
    nameSort: "",
    locationSort: "",
    birthdaySort: "",
  };

  sortByName = () => {
    // cycle thru first asc, first desc, last asc, last desc, default order
    const sortedUsers = this.props.userState.users;
    switch (this.state.nameSort) {
      case "":
      case "lastDesc":
        // sort by first name ascending
        sortedUsers.sort((a, b) =>
          a.name.first.toLowerCase() > b.name.first.toLowerCase() ? 1 : -1
        );
        this.setState({ nameSort: "firstAsc" });
        this.props.onUserSort(sortedUsers);
        break;

      case "firstAsc":
        // sort by first name descending
        sortedUsers.sort((a, b) =>
          a.name.first.toLowerCase() > b.name.first.toLowerCase() ? -1 : 1
        );
        this.setState({ nameSort: "firstDesc" });
        this.props.onUserSort(sortedUsers);
        break;

      case "firstDesc":
        // sort by last name ascending
        sortedUsers.sort((a, b) =>
          a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1
        );
        this.setState({ nameSort: "lastAsc" });
        this.props.onUserSort(sortedUsers);
        break;

      case "lastAsc":
        // sort by last name descending
        sortedUsers.sort((a, b) =>
          a.name.last.toLowerCase() > b.name.last.toLowerCase() ? -1 : 1
        );
        this.setState({ nameSort: "lastDesc" });
        this.props.onUserSort(sortedUsers);
        break;

      default:
        // default to empty string (no sort)
        this.setState({ nameSort: "" });
        break;
    }
  };

  sortByLocation = () => {
    // cycle thru city asc, city desc, state asc, state desc, default order
    const sortedUsers = this.props.userState.users;
    switch (this.state.locationSort) {
      case "":
      case "stateDesc":
        // sort by city ascending
        sortedUsers.sort((a, b) =>
          a.location.city.toLowerCase() > b.location.city.toLowerCase() ? 1 : -1
        );
        this.setState({ locationSort: "cityAsc" });
        this.props.onUserSort(sortedUsers);
        break;

      case "cityAsc":
        // sort by city descending
        sortedUsers.sort((a, b) =>
          a.location.city.toLowerCase() > b.location.city.toLowerCase() ? -1 : 1
        );
        this.setState({ locationSort: "cityDesc" });
        this.props.onUserSort(sortedUsers);
        break;

      case "cityDesc":
        // sort by state ascending
        sortedUsers.sort((a, b) =>
          a.location.state.toLowerCase() > b.location.state.toLowerCase()
            ? 1
            : -1
        );
        this.setState({ locationSort: "stateAsc" });
        this.props.onUserSort(sortedUsers);
        break;

      case "stateAsc":
        // sort by state descending
        sortedUsers.sort((a, b) =>
          a.location.state.toLowerCase() > b.location.state.toLowerCase()
            ? -1
            : 1
        );
        this.setState({ locationSort: "stateDesc" });
        this.props.onUserSort(sortedUsers);
        break;

      default:
        // default to empty string (no sort)
        this.setState({ locationSort: "" });
        break;
    }
  };

  sortByBirthday = () => {
    // cycle thru birthday asc, birthday desc, default order
    const sortedUsers = this.props.userState.users;
    switch (this.state.birthdaySort) {
      case "":
      case "birthdayDesc":
        // sort by birthday ascending
        sortedUsers.sort((a, b) =>
          new Date(a.dob.date) > new Date(b.dob.date) ? 1 : -1
        );
        this.setState({ birthdaySort: "birthdayAsc" });
        this.props.onUserSort(sortedUsers);
        break;

      case "birthdayAsc":
        // sort by birthday descending
        sortedUsers.sort((a, b) =>
          new Date(a.dob.date) > new Date(b.dob.date) ? -1 : 1
        );
        this.setState({ birthdaySort: "birthdayDesc" });
        this.props.onUserSort(sortedUsers);
        break;

      default:
        // default to empty string (no sort)
        this.setState({ birthdaySort: "" });
        break;
    }
  };

  tableHeaderClick = (event) => {
    switch (event.target.id) {
      case "name":
        this.sortByName();
        break;

      case "contact":
        // electing not to sort contact info, but could be added in the future
        break;

      case "location":
        this.sortByLocation();
        break;

      case "birthday":
        this.sortByBirthday();
        break;

      case "pronouns":
        // electing not to sort pronouns, but could be added in the future
        break;

      default:
        // do nothing
        break;
    }
  };

  showNameSort = () => {
    switch (this.state.nameSort) {
      case "firstAsc":
        return (
          <>
            | First <FontAwesomeIcon icon={faCaretUp} />
          </>
        );
      case "firstDesc":
        return (
          <>
            | First <FontAwesomeIcon icon={faCaretDown} />
          </>
        );
      case "lastAsc":
        return (
          <>
            | Last <FontAwesomeIcon icon={faCaretUp} />
          </>
        );
      case "lastDesc":
        return (
          <>
            | Last <FontAwesomeIcon icon={faCaretDown} />
          </>
        );
      default:
        return <span></span>;
    }
  };

  showLocationSort = () => {
    switch (this.state.locationSort) {
      case "cityAsc":
        return (
          <>
            | City <FontAwesomeIcon icon={faCaretUp} />
          </>
        );
      case "cityDesc":
        return (
          <>
            | City <FontAwesomeIcon icon={faCaretDown} />
          </>
        );
      case "stateAsc":
        return (
          <>
            | State <FontAwesomeIcon icon={faCaretUp} />
          </>
        );
      case "stateDesc":
        return (
          <>
            | State <FontAwesomeIcon icon={faCaretDown} />
          </>
        );
      default:
        return <span></span>;
    }
  };

  showBirthdaySort = () => {
    switch (this.state.birthdaySort) {
      case "birthdayAsc":
        return <FontAwesomeIcon icon={faCaretUp} />;

      case "birthdayDesc":
        return <FontAwesomeIcon icon={faCaretDown} />;

      default:
        return <span></span>;
    }
  };

  render() {
    return (
      <Table striped bordered hover responsive variant="dark" size="sm">
        <thead className="text-center">
          <tr onClick={this.tableHeaderClick}>
            <th id="name">Name {this.showNameSort()}</th>
            <th id="contact">Contact</th>
            <th id="location">Location {this.showLocationSort()}</th>
            <th id="birthday">Birthday {this.showBirthdaySort()}</th>
            <th id="pronouns">Pronouns</th>
          </tr>
        </thead>
        <tbody>
          {this.props.userState.users.map((user) => {
            return (
              <tr key={user.id.value}>
                <td className="text-center">
                  <img src={user.picture.large} alt={user.name.last} />
                  <br />
                  {user.name.first} {user.name.last}
                </td>
                <td>
                  <FontAwesomeIcon icon={faPhoneSquareAlt} size="2x" />{" "}
                  {user.phone}
                  <br />
                  <FontAwesomeIcon icon={faMobileAlt} size="2x" /> {user.cell}
                  <br />
                  <FontAwesomeIcon icon={faEnvelopeOpenText} size="2x" />{" "}
                  {user.email}
                </td>
                <td>
                  {user.location.city}, {user.location.state}
                </td>
                <td>{new Date(user.dob.date).toLocaleDateString()}</td>
                <td>{user.gender === "male" ? "he/him" : "she/her"}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export default Emdir;
