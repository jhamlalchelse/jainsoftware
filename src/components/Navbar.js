import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavHeader = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container className="m-0">
          <Navbar.Brand href="#home">
            <img
              src="/jainsoftware-logo.svg"
              alt="logo"
              style={{ height: "35px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{ marginRight: "-110px" }}>
              <Nav.Link href="#home" className="text-light">
                Why Jain Software
              </Nav.Link>
              <Nav.Link href="#home" className="text-light">
                Software
              </Nav.Link>
              <Nav.Link href="#home" className="text-light">
                Products
              </Nav.Link>
              <Nav.Link href="#home" className="text-light">
                Portfolio
              </Nav.Link>
              <Nav.Link href="#home" className="text-light">
                Services
              </Nav.Link>
              <Nav.Link href="#home" className="text-light">
                Innovations
              </Nav.Link>
              <Nav.Link href="#home" className="text-light">
                Companies
              </Nav.Link>
              <Nav.Link href="#home" className="text-light">
                Contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavHeader