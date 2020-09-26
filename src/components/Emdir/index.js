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

class Emdir extends Component {
  state = {
    nameSortIndex: 0,
    nameSort: "",
    locationSortIndex: 0,
    birthdaySortIndex: 0,
    pronounsSortIndex: 0,
  };

  sortByName = () => {
    // cycle thru first asc, first desc, last asc, last desc, default order
    const sortedUsers = this.props.userState.users;
    switch (this.state.nameSortIndex) {
      case 0:
        // sort by first name ascending
        sortedUsers.sort((a, b) =>
          a.name.first.toLowerCase() > b.name.first.toLowerCase() ? 1 : -1
        );
        this.setState({
          nameSort: "firstAsc",
          nameSortIndex: this.state.nameSortIndex + 1,
        });
        this.props.onUserSort(sortedUsers);
        break;

      case 1:
        // sort by first name descending
        sortedUsers.sort((a, b) =>
          a.name.first.toLowerCase() > b.name.first.toLowerCase() ? -1 : 1
        );
        this.setState({
          nameSort: "firstDesc",
          nameSortIndex: this.state.nameSortIndex + 1,
        });
        this.props.onUserSort(sortedUsers);
        break;

      case 2:
        // sort by last name ascending
        sortedUsers.sort((a, b) =>
          a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1
        );
        this.setState({
          nameSort: "lastAsc",
          nameSortIndex: this.state.nameSortIndex + 1,
        });
        this.props.onUserSort(sortedUsers);
        break;

      case 3:
        // sort by last name descending
        sortedUsers.sort((a, b) =>
          a.name.last.toLowerCase() > b.name.last.toLowerCase() ? -1 : 1
        );
        this.setState({ nameSort: "lastDesc", nameSortIndex: 0 });
        this.props.onUserSort(sortedUsers);
        break;

      default:
        this.setState({ nameSortIndex: 0 });
        break;
    }
  };

  tableHeaderClick = (event) => {
    switch (event.target.id) {
      case "name":
        this.sortByName();
        break;

      case "contact":
        console.log("you clicked contact");
        break;

      case "location":
        console.log("you clicked location");
        break;

      case "birthday":
        console.log("you clicked Birthday");
        break;

      case "pronouns":
        console.log("you clicked Pronouns");
        break;

      default:
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

  render() {
    return (
      <Table striped bordered hover responsive size="sm">
        <thead className="text-center">
          <tr onClick={this.tableHeaderClick}>
            <th id="name">Name {this.showNameSort()}</th>
            <th id="contact">Contact</th>
            <th id="location">Location</th>
            <th id="birthday">Birthday</th>
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
