import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
    return(
<>
    <Navbar bg="light" variant="light" className="nav-bar" style={{ minWidth: 700 }}>
        
        <Navbar.Brand href="/rooms">GetAway</Navbar.Brand>
        <Nav
            className="me-auto"
            style={{ marginLeft: "auto", paddingRight: 40 }}
            >
            <Nav.Link href="/rooms">Home</Nav.Link>
            
            <Nav.Link href="login">Login</Nav.Link>
        
        </Nav>
    </Navbar>
</>
    )
}

export default Navigation;