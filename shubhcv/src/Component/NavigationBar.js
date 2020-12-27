import React from "react";
import "./Navbar.css"
import { Navbar, Nav } from "react-bootstrap";
class Navclas extends React.Component {
    render() {
        return (
            <Navbar expand="lg" sticky="top" >
                <Navbar.Brand href="#home">PROTOFILO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="#link">ABOUT</Nav.Link>
                        <Nav.Link href="#link">WORKS</Nav.Link>
                        <Nav.Link href="#link">BLOG</Nav.Link>
                        <Nav.Link href="#link">CONTACT</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default Navclas;