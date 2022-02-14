import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
    return(
<>
    <Navbar className="nav-bar" style={{ minWidth: 700 }}>
        <Navbar.Brand href="/">GetAway</Navbar.Brand>
        <Nav
            className="mr-auto"
            style={{ marginLeft: "auto", paddingRight: 40 }}
            >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="rooms">Rooms</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
        
        </Nav>
    </Navbar>
</>
    )
}

export default Navigation;