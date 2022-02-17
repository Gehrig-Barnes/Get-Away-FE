import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import umbrella from '../umbrella.png';

function Navigation() {
    return(
    <>
        <Navbar bg="light" variant="light" className="nav-bar" style={{ minWidth: 700 }}>
            <img id="umbrella" src={umbrella} alt="umbrella"/>
                <Navbar.Brand href="/rooms" className="brand">GetAway</Navbar.Brand>
                    
                    <Nav
                    className="navlinks"
                    style={{ paddingRight: 10 }}
                    >
                        <Nav.Link href="/rooms">Home</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;

                        <Nav.Link href="/rooms">Account</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;

                        <Nav.Link href="/login">Login</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    </Nav>
        </Navbar>
    </>
    )
}

export default Navigation;