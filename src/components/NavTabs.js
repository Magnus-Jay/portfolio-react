import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    // <ul className="nav nav-tabs">
    //   <li className="nav-item">
    //     <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
    //       Home
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/portfolio"
    //       className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
    //     >
    //       Portfolio
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/contact"
    //       className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
    //     >
    //       Contact
    //     </Link>
    //   </li>
    // </ul>
    <>
  <Navbar bg="dark" variant="dark">
    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
    <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link>
    <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link>
    </Nav>
    </ Navbar.Collapse>
  </Navbar>
</>
  );
}

export default NavTabs;
