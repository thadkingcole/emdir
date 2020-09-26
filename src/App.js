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

  onUserSearch = (newUsers) => {
    this.setState({ users: newUsers });
  };

  onUserSort = (sortedUsers) => {
    this.setState({ users: sortedUsers });
  };

  render() {
    return (
      <div>
        <Top userState={this.state} onUserSearch={this.onUserSearch} />
        <Container>
          <Emdir users={this.state.users} onUserSort={this.onUserSort} />
        </Container>
      </div>
    );
  }
}

export default App;
