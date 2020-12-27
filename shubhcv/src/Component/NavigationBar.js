import React from "react";
import "./NavigationBar.css";
import { Navbar, Nav } from "react-bootstrap";
class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar expand="lg" sticky="top">
        <Navbar.Brand href="#home">PROTOFILO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#works">WORKS</Nav.Link>
            <Nav.Link href="#blog">BLOG</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavigationBar;
