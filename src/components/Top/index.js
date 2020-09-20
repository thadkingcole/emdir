import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import Search from "../Search";

export default () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Employee Directory</h1>
        <Search />
      </Container>
    </Jumbotron>
  );
};
