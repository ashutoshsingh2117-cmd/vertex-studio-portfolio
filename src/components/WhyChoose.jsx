import "../styles/WhyChoose.css";
import { useState } from "react";

const features = [
  {
    title: "Creative Design",
    description:
      "Luxury interfaces crafted with modern UI, premium branding and pixel-perfect attention to every detail.",
  },
  {
    title: "Lightning Fast",
    description:
      "Blazing-fast websites optimized for performance, smooth animations and seamless user experience.",
  },
  {
    title: "Responsive Experience",
    description:
      "Every website adapts perfectly across desktop, tablet and mobile with flawless responsiveness.",
  },
  {
    title: "Trusted Support",
    description:
      "Long-term support, regular improvements and reliable maintenance for complete peace of mind.",
  },
];

function WhyChoose() {

  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (

    <section
      id="why"
      className="why-section"
    >

      <div className="why-grid">

        <div className="why-left">

          <span className="why-badge">
            WHY VERTEX
          </span>

          <h2>

            Why Choose{" "}

            <span className="vertex-highlight">

              Vertex

            </span>{" "}

            Studio?

          </h2>

          <p>

            We build luxury digital experiences
            that combine premium design,
            cutting-edge technology and
            flawless performance.

          </p>

        </div>

        <div className="why-right">

          {

            features.map((item,index)=>(

              <div

                key={index}

                className={`why-card ${
                  active===index ? "active" : ""
                }`}

                onClick={() => handleToggle(index)}

              >

                {/* Premium Shine */}

                <div className="shine"></div>

                <div className="why-card-top">

                  <h3>

                    {item.title}

                  </h3>

                  <div className="why-icon">

                    {

                      active===index

                      ?

                      "−"

                      :

                      "+"

                    }

                  </div>

                </div>

                <div

                  className={`why-content ${
                    active===index ? "open" : ""
                  }`}

                >

                  <p>

                    {item.description}

                  </p>

                </div>

              </div>

            ))

          }

        </div>

      </div>

    </section>

  );

}

export default WhyChoose;