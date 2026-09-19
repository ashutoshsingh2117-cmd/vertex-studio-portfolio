import "./../styles/Hero.css";
import heroBg from "../assets/hero-bg.png";

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.30), rgba(0,0,0,.75)), url(${heroBg})`,
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-container">

        <div className="hero-left"></div>

        <div className="hero-right">

          <div className="hero-badge">
            PREMIUM DIGITAL AGENCY
          </div>

          <h1>
            <span className="hero-gradient">
              WE
            </span>{" "}

            BUILD <br />

            PREMIUM <br />

            DIGITAL{" "}

            <span className="hero-gradient">
              EXPERIENCES
            </span>
          </h1>

          <p>
            Luxury Websites, Branding &
            High-End Digital Experiences
            crafted to make your business
            unforgettable.
          </p>

          <div className="hero-buttons">

            <button
              className="gold-btn"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              View Portfolio
            </button>

            <button
              className="outline-btn"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              Let's Talk
            </button>

          </div>

          <div className="hero-stats">

            <div className="stat-box">
              <h2>50+</h2>
              <span>Projects</span>
            </div>

            <div className="stat-box">
              <h2>100%</h2>
              <span>Premium Design</span>
            </div>

            <div className="stat-box">
              <h2>24/7</h2>
              <span>Support</span>
            </div>

          </div>

        </div>

      </div>

      <div
        className="scroll-indicator"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({
              behavior: "smooth",
            })
        }
      >
        <span></span>
      </div>

    </section>
  );
}

export default Hero;