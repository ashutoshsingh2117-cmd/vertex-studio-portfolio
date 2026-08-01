import "../styles/Gallery.css";

import aboutStudio from "../assets/about-studio.png";
import aboutWorkspace from "../assets/about-workspace.png";
import aiCommand from "../assets/ai-command-center.png";
import luxuryShowcase from "../assets/luxury-showcase.png";
import mobileApp from "../assets/mobile-app.png";
import saasDashboard from "../assets/saas-dashboard.png";

function Gallery() {

  const gallery = [

    {
      image: aboutStudio,
      title: "Creative Studio",
      category: "Workspace",
      mobile: false,
    },

    {
      image: aboutWorkspace,
      title: "Premium Workspace",
      category: "Brand Identity",
      mobile: false,
    },

    {
      image: aiCommand,
      title: "AI Command Center",
      category: "Dashboard",
      mobile: false,
    },

    {
      image: luxuryShowcase,
      title: "Luxury Showcase",
      category: "Web Design",
      mobile: false,
    },

    {
      image: mobileApp,
      title: "Mobile App",
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

    <section
      className="gallery"
      id="gallery"
    >

      <div className="gallery-heading">

        <span className="gallery-badge">

          PORTFOLIO

        </span>

        <h2>

          <span className="portfolio-heading">

            Portfolio

          </span>{" "}

          Gallery

        </h2>

        <p>

          Explore our premium concepts,
          luxury interfaces and modern
          digital experiences.

        </p>

      </div>

      <div className="gallery-grid">

        {

          gallery.map((item,index)=>(

            <article
              className={`gallery-card ${item.mobile ? "mobile-card" : ""}`}
              key={index}
            >

              <div className="gallery-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

              </div>

              <div className="gallery-overlay">

                <span>

                  {item.category}

                </span>

                <h3>

                  {item.title}

                </h3>

              </div>

            </article>

          ))

        }

      </div>

    </section>

  );

}

export default Gallery;