import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const Navigation = (props) => {
    return (
        <Navbar collapseOnSelect={true} className="navigation" variant="dark" expand="lg">            
            <Navbar.Brand href="/" className="ms-3">Harmony</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' className='me-4'/>
            <Navbar.Collapse>
                <Nav className="me-auto">
                    <Nav.Link href="/">About Me</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/personal">Personal</Nav.Link>                    
                </Nav>
            </Navbar.Collapse>            
      </Navbar>
    )
}

export default Navigation