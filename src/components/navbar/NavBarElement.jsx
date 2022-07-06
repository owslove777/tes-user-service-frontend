import React, { useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import styles from './NavBarElement.module.css';

const NavBarElement = () => {

  const { userInfo } = useContext(UserContext);

  let navBarBgColor = null;
  let talentRegister = null;
  let talentSearch = null;
  let showUserType = null;

  if (userInfo.userType == "seller") {
    navBarBgColor = "dark"
    talentRegister = <NavDropdown.Item as={Link} to="/talentRegister" id={styles.navDropdwon}>Register (for seller)</NavDropdown.Item>
    talentSearch = <NavDropdown.Item as={Link} to="/talentSearch" id={styles.navDropDisabled}>Search</NavDropdown.Item>
    showUserType = <Nav.Link>[재능인 계정] </Nav.Link>
  }
  else if (userInfo.userType == "user") {
    navBarBgColor = "success"
    // talentRegister = <NavDropdown.Item as={Link} to="/talentRegister" id={styles.navDropDisabled}>Register (for seller)</NavDropdown.Item>
    talentRegister = <NavDropdown.Item as={Link} to="/talentRegister" id={styles.navDropDisabled} disabled>Register (for seller)</NavDropdown.Item>
    talentSearch = <NavDropdown.Item as={Link} to="/talentSearch" id={styles.navDropdwon}>Search (for user)</NavDropdown.Item>
    showUserType = <Nav.Link >[일반인 계정] </Nav.Link>
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg={navBarBgColor} variant="dark"> 
    {/* <Navbar bg="primary" variant="dark"> */}
      <Container>
        <Navbar.Brand as={Link} to="/home"><h4>T E S</h4></Navbar.Brand>
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
            {showUserType}
            <Nav.Link href="/logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default NavBarElement;
