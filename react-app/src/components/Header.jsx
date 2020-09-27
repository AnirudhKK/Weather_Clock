import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import {Link} from "react-router-dom";
  
function Header() {
    return (
<Navbar bg="warning" variant="light" style={{fontSize: 1.2+"rem"}}>
  <Navbar.Brand><Link to="/">Maxx Weather</Link></Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
  <Nav className="ml-auto">
      <Nav.Link><Link to="/login">Login</Link></Nav.Link>
      <Nav.Link><Link to="/register">Register</Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
}


export default Header;