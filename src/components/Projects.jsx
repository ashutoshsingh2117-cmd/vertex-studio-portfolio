import "../styles/Projects.css";

import ecommerce from "../assets/ecommerce-project.png";
import gym from "../assets/gym-project.png";
import restaurant from "../assets/restaurant-project.png";

function Projects() {

  const projects = [

    {
      id: "01",
      title: "Luxury E-Commerce Website",
      category: "Web Design & Development",
      image: ecommerce,
      featured: true,
    },

    {
      id: "02",
      title: "Premium Gym Website",
      category: "Fitness Website",
      image: gym,
      featured: false,
    },

    {
      id: "03",
      title: "Luxury Restaurant Website",
      category: "Restaurant Branding",
      image: restaurant,
      featured: false,
    },

  ];

  return (

    <section
      id="projects"
      className="projects-section"
    >

      <div className="projects-header">

        <span className="projects-badge">
          FEATURED PROJECTS
        </span>

        <h2>
          Featured Projects
        </h2>

        <p>

          Explore a selection of premium digital
          experiences crafted with luxury aesthetics,
          modern UI and flawless performance.

        </p>

      </div>

      <div className="featured-projects-grid">

        {projects.map((project, index) => (

          <div

            key={index}

            className={
              project.featured
                ? "project-card featured-card"
                : "project-card"
            }

          >

            <div className="project-number">

              {project.id}

            </div>

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

            </div>

            <div className="project-overlay">

              <span className="project-category">

                {project.category}

              </span>

              <h3>

                {project.title}

              </h3>

              {

                project.featured && (

                  <p className="project-description">

                    Crafted with premium UI, luxury
                    aesthetics and modern web
                    technologies to deliver an
                    unforgettable digital experience.

                  </p>

                )

              }

              <button className="project-btn">

                View Project →

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Projects;
