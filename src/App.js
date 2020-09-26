import React, { Component } from "react";
import Top from "./components/Top";
import Container from "react-bootstrap/Container";
import Emdir from "./components/Emdir";
import API from "./utils/API";

class App extends Component {
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
      <div>
        <Top />
        <Container>
          <Emdir users={this.state.users}/>
        </Container>
      </div>
    );
  }
}

export default App;
