import React, { Component } from "react";
import Top from "./components/Top";
import Container from "react-bootstrap/Container";
import Emdir from "./components/Emdir";
import API from "./utils/API";

class App extends Component {
  state = {
    users: [],
    allUsers: [],
  };

  componentDidMount() {
    API.getUsers()
      .then((res) => {
        this.setState({ users: res.data.results });
        if (!this.state.allUsers.length) {
          this.setState({ allUsers: res.data.results });
        }
      })
      .catch((err) => console.log(err));
  }

  onUsersChange = (newUsers) => {
    this.setState({ users: newUsers });
  };

  render() {
    return (
      <div>
        <Top userState={this.state} onUserSearch={this.onUsersChange} />
        <Container>
          <Emdir userState={this.state} onUserSort={this.onUsersChange} />
        </Container>
      </div>
    );
  }
}

export default App;
