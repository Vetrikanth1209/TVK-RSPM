import "./Footer.css";
import logo from "../../assets/images/navlogo.jpg";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-overlay"></div>

      <div className="footer-container">

        <div className="footer-brand">

          <img
            src={logo}
            alt="TVK"
            className="footer-logo"
          />

          <h3>
            தமிழக வெற்றிக் கழகம்
          </h3>

          <p>
            Rasipuram Citizen Connect
          </p>

          <span className="footer-tagline">
            உங்கள் குரல் • உங்கள் வார்டு • உங்கள் முன்னேற்றம்
          </span>

        </div>

        <div className="footer-links">

          <h4>Quick Links</h4>

          <ul>
            <li>Home</li>
            <li>Leadership</li>
            <li>Grievances</li>
            <li>Citizen Services</li>
            <li>Contact</li>
          </ul>

        </div>

        <div className="footer-contact">

          <h4>Contact</h4>

          <p>📍 Rasipuram, Namakkal</p>

          <p>📧 support@rasipuramconnect.in</p>

          <p>📞 +91 98765 43210</p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Rasipuram Citizen Connect.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;