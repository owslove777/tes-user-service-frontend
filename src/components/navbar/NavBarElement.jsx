import React, { useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import styles from './NavBarElement.module.css';

const NavBarElement = () => {

  const { userInfo } = useContext(UserContext);

  let talentRegister = null;
  let talentSearch = null;

  if (userInfo.userType == "seller") {
    talentRegister = <NavDropdown.Item as={Link} to="/talentRegister" id={styles.navDropdwon}>Register (for seller)</NavDropdown.Item>
  }
  else {
    // talentRegister = <NavDropdown.Item as={Link} to="/talentRegister" id={styles.navDropDisabled}>Register (for seller)</NavDropdown.Item>
    talentRegister = <NavDropdown.Item as={Link} to="/talentRegister" id={styles.navDropDisabled} disabled>Register (for seller)</NavDropdown.Item>
  }

  if (userInfo.userType == "user") {
    talentSearch = <NavDropdown.Item as={Link} to="/talentSearch" id={styles.navDropdwon}>Search (for user)</NavDropdown.Item>
  }
  else {
    talentSearch = <NavDropdown.Item as={Link} to="/talentSearch" id={styles.navDropDisabled}>Search</NavDropdown.Item>
    // talentSearch = <NavDropdown.Item as={Link} to="/talentSearch" id={styles.navDropDisabled} disabled>Search (for user)</NavDropdown.Item>
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"> 
      <Container>
        <Navbar.Brand as={Link} to="/home">Tes Application</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <NavDropdown title="Talent" id="basic-nav-dropdown">
              {talentSearch}
              {talentRegister}
            </NavDropdown>
            <NavDropdown title="Contract" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/contractList">List</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="StarRating" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/starRatingList">List</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/starRatingSearch">Search</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/mypage">MyPage</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default NavBarElement;
