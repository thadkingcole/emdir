import React from "react";
import Table from "react-bootstrap/Table";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Emdir() {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>PIC</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Location</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src="https://placekitten.com/128/128" alt="place holder" />
          </td>
          <td>Mark Otto</td>
          <td>011-899-9889</td>
          <td>
            <a href="markotto@fakemail.com">markotto@fakemail.com</a>
          </td>
          <td>Albany, NY</td>
          <td>{getRndInteger(18, 65)}</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>
            <img src="https://placekitten.com/128/128" alt="place holder" />
          </td>
          <td>Juliet Thornton</td>
          <td>999-119-7253</td>
          <td>
            <a href="julietthornton@fakemail.com">
              julietthornton@fakemail.com
            </a>
          </td>
          <td>Charleston, SC</td>
          <td>{getRndInteger(18, 65)}</td>
          <td>Female</td>
        </tr>
        <tr>
          <td>
            <img src="https://placekitten.com/128/128" alt="place holder" />
          </td>
          <td>Larry Bird</td>
          <td>123-456-7890</td>
          <td>
            <a href="larrybird@fakemail.com">larrybird@fakemail.com</a>
          </td>
          <td>West Baden Springs, IN</td>
          <td>{getRndInteger(18, 65)}</td>
          <td>Male</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Emdir;
