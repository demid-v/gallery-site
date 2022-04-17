import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../styles/header.css";
import { useState } from "react";
import Image from "react-bootstrap/Image";
import profilePic from "../assets/pfp.jpg";

function Header() {
  const [navState, setNavState] = useState(false);

  function collapseNav() {
    setNavState(false);
  }

  function setNavExpanded(expanded) {
    setNavState(expanded);
  }

  return (
    <Navbar
      collapseOnSelect
      expand=""
      bg="dark"
      variant="dark"
      onToggle={setNavExpanded}
      expanded={navState}
      className="sticky-top px-2 pr-1"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="bg-dark">
        <div className="profile-info">
          <Image src={profilePic} roundedCircle className="pfp mt-4 mb-3" />
          <p className="text-secondary mb-1">Васильев Демид</p>
          <p className="text-secondary">vasilyev.demid.e@gmail.com</p>
        </div>
        <Nav onClick={collapseNav} className="mr-auto">
          <Nav.Link as={Link} to="/gallery">
            Галлерея
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            Обо мне
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
