import "../styles/Contact.css";

function Contact() {
  const contactInfo = [
    {
      icon: "✉",
      title: "Email",
      value: "vertexstudio.business@gmail.com",
      link: "mailto:vertexstudio.business@gmail.com",
    },
    {
      icon: "☎",
      title: "Phone",
      value: "+91 XXXXX XXXXX",
      link: "tel:+91XXXXXXXXXX",
    },
    {
      icon: "⌂",
      title: "Location",
      value: "Jaipur, Rajasthan",
      link: "#",
    },
  ];

  return (
    <section className="contact" id="contact">

      <div className="contact-bg"></div>
      <div className="contact-glow glow-one"></div>
      <div className="contact-glow glow-two"></div>

      <div className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-left">

          <span className="contact-tag">
            LET'S CONNECT
          </span>

          <h2>
            Let's Create
            <br />
            Something
            <span> Exceptional.</span>
          </h2>

          <p className="contact-description">
            We build premium websites and modern digital
            experiences that help brands stand out with
            elegance, performance and creativity.
          </p>

          <div className="contact-info">

            {contactInfo.map((item, index) => (

              <a
                href={item.link}
                key={index}
                className="info-card"
              >

                <div className="info-icon">
                  {item.icon}
                </div>

                <div className="info-text">

                  <small>
                    {item.title}
                  </small>

                  <h4>
                    {item.value}
                  </h4>

                </div>

              </a>

            ))}

          </div>

          <div className="contact-social">

            <a href="#">
              Instagram
            </a>

            <a href="#">
              GitHub
            </a>

            <a href="#">
              LinkedIn
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="contact-right">

          <div className="form-card">

            <div className="form-top">

              <h3>
                Start Your Project
              </h3>

              <p>
                Fill in the details and let's turn your
                vision into reality.
              </p>

            </div>

            <form className="contact-form">

              <div className="double-input">

                <input
                  type="text"
                  placeholder="Full Name"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                />

              </div>

              <input
                type="text"
                placeholder="Company / Brand"
              />
              <input
                type="text"
                placeholder="Estimated Budget"
              />

              <textarea
                rows="6"
                placeholder="Tell us about your project..."
              ></textarea>

              <button
                type="submit"
                className="contact-btn"
              >
                <span>Send Message</span>

                <div className="btn-circle">
                  →
                </div>

              </button>

            </form>

            <div className="form-footer">

              <div className="footer-item">

                <h4>
                  Fast Response
                </h4>

                <span>
                  Usually within 24 hours
                </span>

              </div>

              <div className="footer-divider"></div>

              <div className="footer-item">

                <h4>
                  Premium Quality
                </h4>

                <span>
                  Modern • Luxury • Responsive
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;