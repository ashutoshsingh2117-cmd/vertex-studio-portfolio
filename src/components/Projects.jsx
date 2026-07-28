import "../styles/Projects.css";

import ecommerce from "../assets/ecommerce-project.png";
import gym from "../assets/gym-project.png";
import restaurant from "../assets/restaurant-project.png";
import mobileui from "../assets/mobile-app.png";

function Projects() {

  const projects = [

    {
      id:"01",
      title:"Luxury E-Commerce Website",
      category:"Web Design & Development",
      image:ecommerce,
      mobile:false,
    },

    {
      id:"02",
      title:"Mobile App UI / UX",
      category:"App Design",
      image:mobileui,
      mobile:true,
    },

    {
      id:"03",
      title:"Premium Gym Website",
      category:"UI / UX Design",
      image:gym,
      mobile:false,
    },

    {
      id:"04",
      title:"Luxury Restaurant Website",
      category:"Brand Identity",
      image:restaurant,
      mobile:false,
    },

  ];

  return (

    <section
      id="projects"
      className="projects-section"
    >

      <div className="projects-header">

        <span className="projects-badge">
          OUR WORK
        </span>

        <h2>
          Portfolio Gallery
        </h2>

        <p>

          Premium digital experiences crafted
          with luxury aesthetics,
          modern UI and flawless performance.

        </p>

      </div>

      <div className="masonry-grid">

        {

          projects.map((project,index)=>(

            <div

              key={index}

              className={
                project.mobile
                ?
                "project-card mobile-card"
                :
                "project-card"
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

              </div>

            </div>

          ))

        }

      </div>

    </section>

  );

}

export default Projects;