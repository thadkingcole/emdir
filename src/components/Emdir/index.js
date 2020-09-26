import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneSquareAlt,
  faMobileAlt,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";

class Emdir extends Component {
  sortByName = () => {
    const sortedUsers = this.props.users.sort((a, b) =>
      a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1
    );

    this.props.onUserSort(sortedUsers);
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

  render() {
    return (
      <Table striped bordered hover responsive size="sm">
        <thead className="text-center">
          <tr onClick={this.tableHeaderClick}>
            <th id="name">Name</th>
            <th id="contact">Contact</th>
            <th id="location">Location</th>
            <th id="birthday">Birthday</th>
            <th id="pronouns">Pronouns</th>
          </tr>
        </thead>
        <tbody>
          {this.props.users.map((rando) => {
            return (
              <tr key={rando.id.value}>
                <td className="text-center">
                  <img src={rando.picture.large} alt={rando.name.last} />
                  <br />
                  {rando.name.first} {rando.name.last}
                </td>
                <td>
                  <FontAwesomeIcon icon={faPhoneSquareAlt} size="2x" />{" "}
                  {rando.phone}
                  <br />
                  <FontAwesomeIcon icon={faMobileAlt} size="2x" /> {rando.cell}
                  <br />
                  <FontAwesomeIcon icon={faEnvelopeOpenText} size="2x" />{" "}
                  {rando.email}
                </td>
                <td>
                  {rando.location.city}, {rando.location.state}
                </td>
                <td>{new Date(rando.dob.date).toLocaleDateString()}</td>
                <td>{rando.gender === "male" ? "he/him" : "she/her"}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export default Emdir;
