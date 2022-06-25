import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <Nav className="me-auto">
      <Link to="/">About</Link>
      <Link to="portfolio">Portfolio</Link>
      <Link to="contact">Contact</Link>
      <Link to="resume">Resume</Link>
    </Nav>
  );
}

export default Navigation