import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom"

const Navigation = (props) => {
    return (
        <Navbar collapseOnSelect={true} className="navigation" expand="sm">            
            <Navbar.Brand href="/" className="ms-3 brand">HB</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' className='me-3'/>
            <Navbar.Collapse className="ms-3" style={{fontSize: "100px"}}>
                <Nav className="ms-auto">
                    <Nav.Link eventKey="1" as={Link} to="/" className="me-4 navLink">About Me</Nav.Link>
                    <Nav.Link eventKey="2" as={Link} to="/projects" className="me-4 navLink">Projects</Nav.Link>
                    <Nav.Link eventKey="3" as={Link} to="/personal" className="me-4 navLink">Personal</Nav.Link>                    
                </Nav>
            </Navbar.Collapse>            
      </Navbar>
    )
}

export default Navigation