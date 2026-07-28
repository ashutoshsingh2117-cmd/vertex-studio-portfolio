import "../styles/Testimonials.css";

function Testimonials() {

  const testimonials = [
    {
      name: "Arjun Sharma",
      role: "Business Owner",
      review:
        "Vertex Studio transformed our vision into a premium digital experience. The design quality and attention to detail were outstanding.",
    },
    {
      name: "Priya Mehta",
      role: "Startup Founder",
      review:
        "Amazing creativity and modern approach. The final website looked elegant, fast and exactly matched our brand identity.",
    },
    {
      name: "Rahul Verma",
      role: "Creative Director",
      review:
        "A perfect combination of design and technology. The experience was smooth and the results exceeded expectations.",
    },
  ];


  return (
    <section className="testimonials" id="testimonials">

      <div className="testimonial-glow"></div>


      <div className="testimonial-container">


        <div className="testimonial-header">

          <span className="testimonial-badge">
            TESTIMONIALS
          </span>


          <h2>
            What Our <span>Clients Say</span>
          </h2>


          <p>
            Real experiences from people who trusted
            Vertex Studio for their digital journey.
          </p>

        </div>



        <div className="testimonial-grid">


          {testimonials.map((item,index)=>(

            <div
              className="testimonial-card"
              key={index}
            >


              <div className="quote">
                "
              </div>


              <p className="review">
                {item.review}
              </p>


              <div className="client">

                <div className="avatar">
                  {item.name.charAt(0)}
                </div>


                <div>

                  <h4>
                    {item.name}
                  </h4>

                  <span>
                    {item.role}
                  </span>

                </div>

              </div>


              <div className="stars">
                ★★★★★
              </div>


            </div>

          ))}


        </div>


      </div>


    </section>
  );
}


export default Testimonials;