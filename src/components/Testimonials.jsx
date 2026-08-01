import "../styles/Testimonials.css";

function Testimonials() {

  const testimonials = [

    {
      name: "Arjun Sharma",
      role: "Business Owner",
      review:
        "Vertex Studio completely transformed our online presence. The quality, creativity and attention to detail exceeded every expectation.",
      heart: "❤",
    },

    {
      name: "Priya Mehta",
      role: "Startup Founder",
      review:
        "Working with Vertex Studio was an amazing experience. Every pixel felt premium and every interaction reflected true professionalism.",
      featured: true,
      heart: "❤",
    },

    {
      name: "Rahul Verma",
      role: "Creative Director",
      review:
        "Exceptional creativity, smooth communication and flawless execution. Vertex Studio delivered something truly memorable.",
      heart: "❤",
    },

  ];

  return (

    <section
      id="testimonials"
      className="testimonials"
    >

      <div className="bg-light one"></div>
      <div className="bg-light two"></div>

      <div className="floating-heart h1">❤</div>
      <div className="floating-heart h2">❤</div>
      <div className="floating-heart h3">❤</div>

      <div className="testimonial-container">

        <div className="testimonial-header">

          <span className="testimonial-badge">

            CLIENT LOVE

          </span>

          <h2>

            Loved By

            <span> Our Clients</span>

          </h2>

          <p>

            Every project is crafted with passion,
            creativity and attention to detail.
            Our clients don't just receive a website —
            they receive an unforgettable experience.

          </p>

        </div>

        <div className="testimonial-grid">

          {testimonials.map((item,index)=>(

            <div

              key={index}

              className={`testimonial-card ${item.featured ? "featured" : ""}`}

            >

              <div className="glass-light"></div>

              <div className="quote">

                ❤

              </div>

              <div className="stars">

                ★★★★★

              </div>

              <p className="review">

                {item.review}

              </p>

              <div className="client">

                <div className="avatar">

                  {item.name.charAt(0)}

                </div>

                <div className="client-info">

                  <h4>

                    {item.name}

                    <span className="heart">

                      {item.heart}

                    </span>

                  </h4>

                  <p>

                    {item.role}

                  </p>

                </div>

              </div>

              <div className="love-text">

                Crafted With Passion ❤

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default Testimonials;