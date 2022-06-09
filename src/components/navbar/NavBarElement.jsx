import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const NavBarElement = ({ talents }) => {
  return (<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/home">Tes Application</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <NavDropdown title="Talent" id="basic-nav-dropdown">
            <NavDropdown.Item href="/talentSearch">Search</NavDropdown.Item>
            <NavDropdown.Item href="#">Register</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">TBD</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">Mypage</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
};

export default NavBarElement;
