import React from 'react'
import { Nav, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="nav-content">
      <Row className="nav-row">
        <Nav className="me-auto nav-bar">
          <ul className="nav nav-tabs">
            <Nav.Link as={NavLink} to="/">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link as={NavLink} to="contact">
              Contact
            </Nav.Link>
            <Nav.Link as={NavLink} to="resume">
              Resume
            </Nav.Link>
          </ul>
        </Nav>
      </Row>
    </div>
  );
}

export default Navigation