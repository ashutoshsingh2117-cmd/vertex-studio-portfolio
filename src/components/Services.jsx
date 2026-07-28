import "../styles/Services.css";

function Services() {

  const services = [

    {
      title:"Premium Web Design",
      description:"Luxury and modern website designs created to represent your brand professionally.",
    },

    {
      title:"Web Development",
      description:"Fast, secure and responsive websites built with modern technologies.",
    },

    {
      title:"UI / UX Design",
      description:"Beautiful interfaces with smooth user experience that keeps visitors engaged.",
    },

    {
      title:"Website Optimization",
      description:"Improve speed, performance and overall website experience.",
    },

  ];

  return (

    <section
      id="services"
      className="services-section"
    >

      <div className="services-header">

        <span className="services-badge">
          OUR SERVICES
        </span>

        <h2>
          Premium Digital Solutions
        </h2>

        <p>
          We craft premium websites and digital experiences
          that help brands stand out with luxury design,
          performance and modern technology.
        </p>

      </div>

      <div className="services-grid">

        {services.map((service,index)=>(

          <div
            className="service-card"
            key={index}
          >

            <div className="service-number">
              0{index+1}
            </div>

            <h3>
              {service.title}
            </h3>

            <p>
              {service.description}
            </p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Services;