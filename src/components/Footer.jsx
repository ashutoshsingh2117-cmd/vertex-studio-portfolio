import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-glow"></div>

      <div className="footer-container">

        <h3 className="footer-logo">
          VERTEX STUDIO
        </h3>

        <p className="footer-text">
          Creating premium digital experiences with modern design,
          creative solutions and powerful technology.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>


        <div className="footer-social">

          <a href="#">
            Instagram
          </a>

          <a href="#">
            GitHub
          </a>

          <a href="#">
            LinkedIn
          </a>

        </div>


        <div className="footer-line"></div>


        <div className="footer-bottom">
          © 2026 Vertex Studio | Designed by Ashutosh Kumar
        </div>

      </div>

    </footer>
  );
}

export default Footer;