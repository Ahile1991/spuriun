import React from 'react'
import {Navbar, Nav, Container } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'


const Header = () => {
    return (
        <>
      <Navbar bg="dark" variant ="dark" expand="lg">
        <Container> 

          <LinkContainer to='/'> 
  <Navbar.Brand>SpuriunGadget</Navbar.Brand>
  </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <LinkContainer to='/Cart'> 
      <Nav.Link> <i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
      </LinkContainer> 

      <LinkContainer to='/Signin'>
      <Nav.Link> <i className="fas fa-user"></i>Signin</Nav.Link>
      </LinkContainer>
      
    </Nav>
     
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}

export default Header
