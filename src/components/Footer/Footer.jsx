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
            ராசிபுரம் குடிமக்கள் இணைப்பு
          </p>

          <span className="footer-tagline">
            உங்கள் குரல் • உங்கள் வார்டு • உங்கள் முன்னேற்றம்
          </span>

        </div>

        <div className="footer-contact">

          <h4>
            தொடர்புக்கு
          </h4>

          <p>
            📍 ராசிபுரம், நாமக்கல்
          </p>

          <p>
            📧 support@rasipuramconnect.in
          </p>

          <p>
            📞 +91 98765 43210
          </p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 ராசிபுரம் குடிமக்கள் இணைப்பு.
          அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.
        </p>

      </div>

    </footer>
  );
};

export default Footer;