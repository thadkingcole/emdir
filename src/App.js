import React from "react";
import Top from "./components/Top";
import Container from "react-bootstrap/Container";
import Emdir from "./components/Emdir";

function App() {
  return (
    <div>
      <Top />
      <Container>
        <Emdir />
      </Container>
    </div>
  );
}

export default App;
