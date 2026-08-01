import "../styles/Services.css";

function Services() {

  const services = [
    {
      icon: "🌐",
      title: "Premium Web Design",
      description:
        "Luxury and modern website designs crafted to give your business a powerful first impression.",
    },
    {
      icon: "💻",
      title: "Web Development",
      description:
        "Responsive, secure and high-performance websites built with modern technologies.",
    },
    {
      icon: "🏢",
      title: "Business Website",
      description:
        "Professional business websites that build trust and generate quality leads.",
    },
    {
      icon: "👨‍💼",
      title: "Portfolio Website",
      description:
        "Premium portfolio websites that beautifully showcase your work and achievements.",
    },
    {
      icon: "🤝",
      title: "NGO Website",
      description:
        "Modern NGO websites designed to inspire trust and increase community impact.",
    },
    {
      icon: "🚀",
      title: "Landing Page",
      description:
        "High-converting landing pages focused on performance and customer engagement.",
    },
    {
      icon: "🎨",
      title: "UI / UX Design",
      description:
        "Elegant interfaces with intuitive user experiences across every device.",
    },
    {
      icon: "♻️",
      title: "Website Redesign",
      description:
        "Transform outdated websites into premium digital experiences.",
    },
    {
      icon: "🖋️",
      title: "Logo Design",
      description:
        "Unique luxury logos that perfectly represent your brand identity.",
    },
    {
      icon: "🖼️",
      title: "Banner Design",
      description:
        "Creative banners designed for promotions, branding and advertising.",
    },
    {
      icon: "📸",
      title: "Thumbnail Design",
      description:
        "Scroll-stopping thumbnails that increase clicks and engagement.",
    },
    {
      icon: "📱",
      title: "Social Media Posts",
      description:
        "Premium social media creatives that make your brand stand out.",
    },
    {
      icon: "📈",
      title: "Social Media Handling",
      description:
        "Complete social media management for consistent brand growth.",
    },
    {
      icon: "🎬",
      title: "Video Editing",
      description:
        "Professional cinematic editing with premium transitions and effects.",
    },
    {
      icon: "⚡",
      title: "Website Optimization",
      description:
        "Improve speed, SEO and performance for the best user experience.",
    },
    {
      icon: "🛠️",
      title: "Maintenance & Support",
      description:
        "Regular updates, security monitoring and long-term website support.",
    },
  ];

  return (
    <section id="services" className="services-section">

      <div className="services-particles">
        <span className="services-dot dot1"></span>
        <span className="services-dot dot2"></span>
        <span className="services-dot dot3"></span>
        <span className="services-dot dot4"></span>
        <span className="services-dot dot5"></span>
        <span className="services-dot dot6"></span>
        <span className="services-dot dot7"></span>
        <span className="services-dot dot8"></span>
        <span className="services-dot dot9"></span>
        <span className="services-dot dot10"></span>
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
          We create luxury digital experiences that combine
          modern design, development and creativity to help
          your brand stand above the competition.
        </p>

      </div>

      <div className="services-grid">

        {services.map((service, index) => (

          <div className="service-card" key={index}>

            <div className="service-glow"></div>

            <div className="service-top">

              <div className="service-icon">
                {service.icon}
              </div>

              <div className="service-number">
                {String(index + 1).padStart(2, "0")}
              </div>

            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

          </div>

        ))}

      </div>

    </section>
  );

}

export default Services;