import React, { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import userContext from "../context/user/userContext";
export default function NavBar() {
  const { list } = useContext(userContext);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <h1>Friends list Reducer</h1>
        <hr />
        <Navbar.Brand>Manage your friend has never been esaier</Navbar.Brand>
        <Navbar.Brand>Friends count: {list.length}</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
