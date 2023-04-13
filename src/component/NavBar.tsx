import { Nav,Navbar} from "react-bootstrap"
import Container from "react-bootstrap/esm/Container"
import {Link} from 'react-router-dom'
const NavBar = () =>{
    return(  
    <Navbar bg="primary" variant="dark">
    <Container fluid>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Link to="/" className="nav-link">Home</Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>)
}

export default NavBar