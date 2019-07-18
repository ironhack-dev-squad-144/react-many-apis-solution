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

export default function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbar color="primary" dark expand="sm" className="mb-4">
      <NavbarBrand href="/">React Many APIs</NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/popular-github">Popular on GitHub</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/crud-todos">CRUD TODOs</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
