import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const NavBarElement = ({talents}) => {
  return (<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/home">Tes Application</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/talentSearch" talents={talents}>Talent</Nav.Link>
          <Nav.Link href="/checkUserType">My Page</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Profile</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
};

export default NavBarElement;
