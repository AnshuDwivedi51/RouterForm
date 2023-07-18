import React from 'react'
import { Container, Nav,Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
        
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Form Data</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Add">Add Data</NavLink>
            <NavLink to="/preview">View</NavLink>

          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header