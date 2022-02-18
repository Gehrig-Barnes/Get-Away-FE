import React, { useState, useEffect } from "react";
import { Nav, NavDropdown } from 'react-bootstrap';

function Filter({handleLivingType, handlePrice}) {
    

    

    return (

        // might need onSelect
        <Nav>
        <NavDropdown onSelect={handlePrice} title="Price" id="nav-dropdown" >
          <NavDropdown.Item eventKey="0">All</NavDropdown.Item>
          <NavDropdown.Item eventKey="100">$100 or less</NavDropdown.Item>
          <NavDropdown.Item eventKey="101">$101 to 200</NavDropdown.Item>
          <NavDropdown.Item eventKey="201">$201 or more</NavDropdown.Item>
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