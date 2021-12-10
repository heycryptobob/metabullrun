import { Navbar, Container } from "react-bootstrap";
import Logo from '../assets/logo.png';

export function Header() {
  return (
    <Navbar variant="dark" expand="lg" className="header">
      <Container>
        <Navbar.Brand href="/">
        <img src={Logo} alt="Logo" width="40" height="40" />
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#audit">Audit</Nav.Link>
            <Nav.Link href="#tokenomics">Tokenomics</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#roadmap">Roadmap</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}