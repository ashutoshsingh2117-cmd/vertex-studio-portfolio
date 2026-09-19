import "../styles/Gallery.css";

import fintechProject from "../assets/fintech-project.png";
import realestateProject from "../assets/realestate-project.png";
import travelProject from "../assets/travel-project.png";
import saasAiProject from "../assets/saas-ai-project.png";
import mobileApp from "../assets/mobile-app.png";
import saasDashboard from "../assets/saas-dashboard.png";

function Gallery() {
  const gallery = [
    {
      image: fintechProject,
      title: "Fintech Banking",
      category: "Fintech / Web Design",
      mobile: false,
    },
    {
      image: realestateProject,
      title: "Luxury Real Estate",
      category: "Real Estate / Web Design",
      mobile: false,
    },
    {
      image: travelProject,
      title: "Luxury Travel",
      category: "Travel / Web Design",
      mobile: false,
    },
    {
      image: saasAiProject,
      title: "AI SaaS Platform",
      category: "SaaS / AI Product",
      mobile: false,
    },
    {
      image: mobileApp,
      title: "Mobile Banking App",
      category: "UI / UX",
      mobile: true,
    },
    {
      image: saasDashboard,
      title: "SaaS Dashboard",
      category: "Web Application",
      mobile: false,
    },
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-heading">
        <span className="gallery-badge">PORTFOLIO</span>

        <h2>
          <span className="portfolio-heading">Portfolio</span>{" "}
          Gallery
        </h2>

        <p>
          Explore our premium concepts,
          luxury interfaces and modern
          digital experiences.
        </p>
      </div>

      <div className="gallery-grid">
        {gallery.map((item, index) => (
          <article
            className={`gallery-card ${
              item.mobile ? "mobile-card" : ""
            }`}
            key={index}
          >
            <div className="gallery-image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="gallery-overlay">
              <span>{item.category}</span>
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Gallery;