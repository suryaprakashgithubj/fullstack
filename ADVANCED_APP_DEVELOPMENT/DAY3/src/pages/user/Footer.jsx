import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer style={{ textAlign: "center", padding: "20px", backgroundColor: "#093A3E", marginTop: "65px" }}>
      <div style={{ color: "white" }}>
        <p>&copy; {new Date().getFullYear()} Our Website. All rights reserved.</p>
        <div>
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faTwitter} style={{ marginRight: '10px', color: 'white' }} />
          </a>
          <a href="https://facebook.com">
            <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '10px', color: 'white' }} />
          </a>
          <a href="https://instagram.com">
            <FontAwesomeIcon icon={faInstagram} style={{ marginRight: '10px', color: 'white' }} />
          </a>
          <a href="mailto:info@example.com">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white' }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
