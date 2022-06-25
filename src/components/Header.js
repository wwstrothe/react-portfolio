import React from 'react'
import Navigation from './Navigation';
import { Navbar, Container } from 'react-bootstrap'; 

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">William Strothe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Navigation/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header