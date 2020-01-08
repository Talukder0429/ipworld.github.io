import React from "react";
import Logo from "./Images/logo.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";

export default function Header() {
  return (
    <React.Fragment>
      <div className="sticky-top bg-white">
        <Container>
          <Navbar bg="white" expand="lg" sticky="top">
            <Navbar.Brand href="/">
              <Figure>
                <Figure.Image width={300} height="auto" alt=" " src={Logo} />
                <Figure.Caption>GLOBAL COMMUNICATION SERVICES</Figure.Caption>
              </Figure>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#">About Us</Nav.Link>
                <Nav.Link href="#">Test</Nav.Link>
                <Nav.Link href="#">Test</Nav.Link>
                <Nav.Link href="#">Test</Nav.Link>
                <Nav.Link href="#">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    </React.Fragment>
  );
}
