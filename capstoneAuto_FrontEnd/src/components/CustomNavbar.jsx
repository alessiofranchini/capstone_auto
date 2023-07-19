import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function CustomNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Navbar expand="lg" className="custom-navbar p-0">
        <Container>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={`navbar-button border-0 ${menuOpen ? 'collapsed' : ''}`}
            style={{ outline: 'none', boxShadow: 'none' }}
            onClick={handleToggleMenu}
          />
          <Navbar.Collapse id="basic-navbar-nav" className={menuOpen ? 'show' : ''}>
            <Nav className="me-auto">
              <Nav.Link href="/home" className='nav-text'>Home</Nav.Link>
              <Nav.Link href="/collezioni" className='nav-text'>Collezioni</Nav.Link>
              <Nav.Link href="/cliente" className='nav-text'>Cliente</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="/home" className={`ms-auto d-none d-lg-block ${menuOpen ? 'd-lg-none' : ''}`}>
            <img className='logo' src="/assets/img/Black n White Luxury  Rent Car Logo.png" />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
