import "../styles/Projects.css";

import ecommerce from "../assets/ecommerce-project.png";
import gym from "../assets/gym-project.png";
import restaurant from "../assets/restaurant-project.png";

function Projects() {

  const projects = [

    {
      image: ecommerce,
      category: "WEB DESIGN & DEVELOPMENT",
      title: "Luxury E-Commerce Website",
      description:
        "Crafted with premium UI, luxury aesthetics and modern web technologies to deliver an unforgettable digital experience.",
    },

    {
      image: gym,
      category: "FITNESS WEBSITE",
      title: "Premium Gym Website",
      description:
        "Premium fitness experience designed with modern visuals, smooth animations and high performance architecture.",
    },

    {
      image: restaurant,
      category: "RESTAURANT BRANDING",
      title: "Luxury Restaurant Website",
      description:
        "Elegant restaurant website focused on luxury branding, immersive visuals and seamless user experience.",
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

          <span className="featured-gradient">
            Featured
          </span>{" "}

          Projects

        </h2>

        <p>
          Explore a selection of premium digital
          experiences crafted with luxury aesthetics,
          modern UI and flawless performance.
        </p>

      </div>

      <div className="projects-list">

        {projects.map((project,index)=>(

          <article
            className="project-card"
            key={index}
          >

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

            </div>

            <div className="project-content">

              <span className="project-category">
                {project.category}
              </span>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

            </div>

          </article>

        ))}

      </div>

    </section>

  );

}

export default Projects;