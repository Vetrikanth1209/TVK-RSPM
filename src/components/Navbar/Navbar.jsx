import "./Navbar.css";
import logo from "../../assets/images/navlogo.jpg";

import {
  Navbar,
  Container,
  Button
} from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar
      expand="lg"
      className="custom-navbar"
    >
      <Container fluid>

        <Navbar.Brand className="navbar-brand-custom">

          <img
            src={logo}
            alt="TVK"
            className="nav-logo"
          />

          <div className="logo-text">

            <span className="logo-text-main">
              தமிழக வெற்றிக் கழகம்
            </span>

            <span className="logo-text-sub">
              Rasipuram Citizen Connect
            </span>

          </div>

        </Navbar.Brand>

        

      </Container>
    </Navbar>
  );
};

export default CustomNavbar;