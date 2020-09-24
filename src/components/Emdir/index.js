import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import API from "../../utils/API";

class Emdir extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    API.getUsers()
      .then((res) => {
        console.log(res.data.results);
        this.setState({ users: res.data.results });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>{/* blank cell */}</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Location</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map((rando) => {
            return (
              <tr>
                {/* picture */}
                <td>
                  <img src={rando.picture.large} alt={rando.name.last} />
                </td>
                {/* name */}
                <td>{rando.name.first + " " + rando.name.last}</td>
                {/* phone number(s) */}
                <td>
                  p: {rando.phone}
                  <br />
                  c: {rando.cell}
                </td>
                {/* email */}
                <td>{rando.email}</td>
                {/* location */}
                <td>{rando.location.city + ", " + rando.location.state}</td>
                {/* age */}
                <td>{rando.dob.age}</td>
                {/* gender */}
                <td>{rando.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export default Emdir;
