import "../styles/About.css";

function About() {

  return (

    <section id="about" className="about-section">

      {/* Animated Background Dots */}

      <div className="about-dots" aria-hidden="true">

        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

      </div>

      <div className="about-left">

        <span className="about-badge">
          ABOUT US
        </span>

        <h2>
          Crafting Premium Digital
          <span> Experiences.</span>
        </h2>

        <p>
          Vertex Studio is a luxury web design and development agency creating
          premium websites, modern user experiences and high-converting digital
          solutions for ambitious brands.
        </p>

        <div className="about-stats">

          <div className="stat-box">
            <h3>05+</h3>
            <span>Years Experience</span>
          </div>

          <div className="stat-box">
            <h3>50+</h3>
            <span>Premium Projects</span>
          </div>

          <div className="stat-box">
            <h3>99%</h3>
            <span>Client Satisfaction</span>
          </div>

        </div>

      </div>

      <div className="about-right">

        <div className="about-card">

          <span className="card-badge">
            VERTEX STUDIO
          </span>

          <h3>
            Luxury Digital
            <br />
            Agency
          </h3>

          <div className="gold-line"></div>

          <div className="feature-list">

            <div className="feature-item">
              <span>✦</span>
              <p>Premium Website Design</p>
            </div>

            <div className="feature-item">
              <span>✦</span>
              <p>Modern UI / UX Experience</p>
            </div>

            <div className="feature-item">
              <span>✦</span>
              <p>Fast & Responsive Development</p>
            </div>

            <div className="feature-item">
              <span>✦</span>
              <p>Luxury Brand Identity</p>
            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default About;