import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import SearchBar from "../SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

function Top(props) {
  return (
    <Jumbotron fluid>
      <Container>
        <h1 className="display-4">
          <FontAwesomeIcon icon={faAddressBook} /> Employee Directory
        </h1>
        <SearchBar userState={props.userState} onUserSearch={props.onUserSearch}/>
      </Container>
    </Jumbotron>
  );
}

export default Top;
