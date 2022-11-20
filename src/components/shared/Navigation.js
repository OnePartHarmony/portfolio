import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

// import { Link } from "react-router-dom"

const Navigation = (props) => {
    return (
        <Navbar collapseOnSelect={true} bg="dark" variant="dark" expand="lg">            
            <Navbar.Brand href="/" className="ms-3">Harmony</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' className='me-4'/>
            <Navbar.Collapse>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="about">About Me</Nav.Link>
                    <Nav.Link href="projects">Projects</Nav.Link>
                </Nav>
            </Navbar.Collapse>            
      </Navbar>
    )
}

export default Navigation