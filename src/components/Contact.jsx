import "../styles/Contact.css";

function Contact() {
  const contacts = [
    {
      icon: "📧",
      title: "Email",
      value: "vertexstudio.business@gmail.com",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+91 XXXXX XXXXX",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Jaipur, Rajasthan",
    },
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact-glow contact-glow-1"></div>
      <div className="contact-glow contact-glow-2"></div>

      <div className="contact-wrapper">

        <div className="contact-left">

          <span className="contact-badge">
            CONTACT US
          </span>

          <h2>
            Let's Build
            <br />
            Something
            <span> Extraordinary.</span>
          </h2>

          <p>
            We design premium websites, luxury brands and
            modern digital experiences that help businesses
            stand out from the competition.
          </p>

          <div className="contact-cards">

            {contacts.map((item, index) => (

              <div
                key={index}
                className="contact-card"
              >

                <div className="card-icon">
                  {item.icon}
                </div>

                <div>

                  <h3>{item.title}</h3>

                  <span>{item.value}</span>

                </div>

              </div>

            ))}

          </div>

          <div className="social-links">

            <a href="#">Instagram</a>

            <a href="#">LinkedIn</a>

            <a href="#">GitHub</a>

          </div>

        </div>

        <div className="contact-right">

          <form className="contact-form">

            <div className="input-group">

              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

            </div>

            <input
              type="text"
              placeholder="Business / Company"
            />

            <input
              type="text"
              placeholder="Project Budget"
            />

            <textarea
              rows="7"
              placeholder="Tell us about your dream project..."
            ></textarea>

            <button>
              Send Message →
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;