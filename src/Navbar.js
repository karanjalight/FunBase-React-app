/* import {Link} from 'react-router-dom' */
import { Navbar, Nav } from 'react-bootstrap';


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

export const Navbary = () => {
  return (
    <div>



<Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="#">Fun Baze</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Predict Age</Nav.Link>
            <Nav.Link href="/catfact"> Catfact</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>



       


       {/*   <Link to="/home" > Home</Link>
         <Link to="/menu" > Menu</Link>
         <Link to="/about" > About Us</Link> */}
      </div>
    
  )
}