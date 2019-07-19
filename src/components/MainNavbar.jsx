import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { NavLink as NLink } from 'react-router-dom'


export default function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbar color="primary" dark expand="sm" className="mb-4">
      <NavbarBrand tag={NLink} to="/">React Many APIs</NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            {/* The Reactstrap NavLink renders the content with the component NLink */}
            <NavLink tag={NLink} to="/popular-github">Popular on GitHub</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={NLink} to="/crud-todos">CRUD TODOs</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
