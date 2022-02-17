import React, { useState, useEffect } from "react";
import { Nav, NavDropdown } from 'react-bootstrap';

function Filter({handleLivingType}) {
    

    

    return (

        // might need onSelect
        <Nav>
        <NavDropdown title="Price" id="nav-dropdown" >
          <NavDropdown.Item eventKey="1">$100 or less</NavDropdown.Item>
          <NavDropdown.Item eventKey="2">$101 to 200</NavDropdown.Item>
          <NavDropdown.Item eventKey="3">$201 or more</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown onSelect={handleLivingType} title="Living Type" id="nav-dropdown" >
        <NavDropdown.Item eventKey="All">All</NavDropdown.Item>
          <NavDropdown.Item eventKey="Apartment">Apartment</NavDropdown.Item>
          <NavDropdown.Item eventKey="Condo">Condo</NavDropdown.Item>
          <NavDropdown.Item eventKey="House">House</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Rating" id="nav-dropdown">
          <NavDropdown.Item eventKey="aa">0 to 3</NavDropdown.Item>
          <NavDropdown.Item eventKey="bb">4 to 7</NavDropdown.Item>
          <NavDropdown.Item eventKey="cc">7 to 10</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    )
}

export default Filter;