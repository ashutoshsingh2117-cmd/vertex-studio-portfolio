import {
  FiGlobe,
  FiLayout,
  FiBriefcase,
  FiTarget,
  FiPenTool,
  FiInstagram,
  FiVideo,
  FiZap,
} from "react-icons/fi";

import "../styles/Services.css";

function Services() {
  const services = [
    {
      icon: <FiGlobe />,
      title: "Web Design & Development",
      description:
        "Premium responsive websites built with modern design, smooth interactions and powerful technology.",
    },
    {
      icon: <FiLayout />,
      title: "UI / UX Design",
      description:
        "Elegant interfaces and intuitive user experiences designed around your brand and audience.",
    },
    {
      icon: <FiBriefcase />,
      title: "Business Websites",
      description:
        "Professional digital experiences designed to build trust and turn visitors into clients.",
    },
    {
      icon: <FiTarget />,
      title: "Landing Pages",
      description:
        "Focused landing experiences built for campaigns, products, conversions and growth.",
    },
    {
      icon: <FiPenTool />,
      title: "Brand & Logo Design",
      description:
        "Distinctive visual identities crafted to create a refined and memorable brand presence.",
    },
    {
      icon: <FiInstagram />,
      title: "Social Media Design",
      description:
        "Premium social creatives that keep your visual identity consistent and engaging.",
    },
    {
      icon: <FiVideo />,
      title: "Video Editing",
      description:
        "Modern cinematic edits, transitions and visual effects for powerful digital content.",
    },
    {
      icon: <FiZap />,
      title: "Optimization & Support",
      description:
        "Performance improvements, maintenance and reliable support for your digital presence.",
    },
  ];

  return (
    <section id="services" className="services-section">

      <div className="services-orb services-orb-one"></div>
      <div className="services-orb services-orb-two"></div>

      <div className="services-particles" aria-hidden="true">
        <span className="services-dot dot1"></span>
        <span className="services-dot dot2"></span>
        <span className="services-dot dot3"></span>
        <span className="services-dot dot4"></span>
        <span className="services-dot dot5"></span>
        <span className="services-dot dot6"></span>
        <span className="services-dot dot7"></span>
        <span className="services-dot dot8"></span>
      </div>

      <div className="services-header">

        <span className="services-badge">
          OUR SERVICES
        </span>

        <h2>
          Premium Digital{" "}
          <span className="solutions-text">
            Solutions
          </span>
        </h2>

        <p>
          From powerful websites to refined digital experiences,
          we create modern solutions designed to make your brand
          stand apart.
        </p>

      </div>

      <div className="services-grid">

        {services.map((service, index) => (

          <article
            className="service-card"
            key={service.title}
          >

            <div className="service-card-glow"></div>

            <div className="service-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="service-top-line"></div>

            <div className="service-icon-wrap">
              <div className="service-icon">
                {service.icon}
              </div>
            </div>

            <div className="service-content">

              <h3>{service.title}</h3>

              <p>{service.description}</p>

            </div>

            <div className="service-bottom">

              <span className="service-line"></span>

              <span className="service-arrow">
                ↗
              </span>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Services;