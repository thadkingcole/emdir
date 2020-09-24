import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import API from "../../utils/API";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneSquareAlt,
  faMobileAlt,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";

class Emdir extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    API.getUsers()
      .then((res) => {
        this.setState({ users: res.data.results });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Table striped bordered hover responsive size="sm">
        <thead className="text-center">
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Location</th>
            <th>Birthday</th>
            <th>Pronouns</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map((rando) => {
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
