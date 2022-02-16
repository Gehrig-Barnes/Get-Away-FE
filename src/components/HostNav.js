import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import umbrella from '../umbrella.png';

function HostNav() {
    return(
    <>
        <Navbar bg="light" variant="light" className="nav-bar" style={{ minWidth: 700 }}>
            <img id="umbrella" src={umbrella} alt="umbrella"/>
                <Navbar.Brand href="/rooms" className="brand">GetAway</Navbar.Brand>
                    
                    <Nav
                        className="me-auto"
                        style={{ marginLeft: "auto", paddingRight: 10 }}
                        >
                        
                        <Nav.Link href="login">Log Out</Nav.Link>
                    </Nav>
        </Navbar>
    </>
    )
}

export default HostNav