import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import SearchBar from "../SearchBar";

function Top() {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>EMployee DIRectory</h1>
        <SearchBar />
      </Container>
    </Jumbotron>
  );
}

export default Top;
