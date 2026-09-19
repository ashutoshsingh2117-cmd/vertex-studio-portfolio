import { motion } from "framer-motion";
import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bg">
        <div className="footer-overlay"></div>
      </div>

      <motion.div
        className="footer-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Premium Top Divider */}
        <div className="footer-top-divider"></div>

        <motion.h2
          className="footer-logo"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="footer-logo-premium">
            VERTEX STUDIO
          </span>
        </motion.h2>

        <p className="footer-text">
          Creating premium digital experiences with modern design,
          creative solutions and powerful technology.
        </p>

        <div className="footer-social">
          <a
            href="https://www.instagram.com/_vertex.studio___?igsh=NDc4NXAxamRvc2Ni"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn instagram"
          >
            <FaInstagram />
            <span>Instagram</span>
          </a>

          <a
            href="https://github.com/ashutoshsingh2117-cmd"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn github"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/ashutosh-kumar-080b5a277"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn linkedin"
          >
            <FaLinkedinIn />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://wa.me/919257930628"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn whatsapp"
          >
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>
        </div>

        <div className="footer-divider"></div>

        <p className="footer-copy">
          © 2026{" "}
          <span className="footer-premium-text">
            Vertex Studio
          </span>
          . All Rights Reserved.
        </p>

        <p className="footer-credit">
          Designed & Developed by{" "}
          <span className="footer-premium-text">
            Ashutosh Kumar
          </span>
        </p>
      </motion.div>
    </footer>
  );
}

export default Footer;