import { Navbar, Nav, } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function CustomNavbar() {
  return (
    <div>
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav"  className="navbar-button border-0" style={{ outline: 'none', boxShadow: 'none' }}/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home" className='nav-text'>Home</Nav.Link>
              <Nav.Link href="/collezioni" className='nav-text'>Collezioni</Nav.Link>
              <Nav.Link href="/cliente" className='nav-text'>Cliente</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;