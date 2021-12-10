import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from '../assets/logo.png';
import { list } from '../menu';

export function Header() {
  return (
    <Navbar variant="dark" expand="lg" className="header">
      <Container>
        <Navbar.Brand href="/">
        <img src={Logo} alt="Logo" width="40" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            { list.map((item, key) => <Nav.Link key={key} href={item.href}>{item.name}</Nav.Link>)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}