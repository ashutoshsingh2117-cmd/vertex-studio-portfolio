import "../styles/Stats.css";

import {
  FiAward,
  FiZap,
  FiSmartphone,
  FiHeadphones,
} from "react-icons/fi";

function Stats() {

  const stats = [
    {
      icon: <FiAward />,
      number: "Premium",
      title: "Quality Design",
    },
    {
      icon: <FiZap />,
      number: "Fast",
      title: "Delivery",
    },
    {
      icon: <FiSmartphone />,
      number: "100%",
      title: "Responsive",
    },
    {
      icon: <FiHeadphones />,
      number: "24/7",
      title: "Support",
    },
  ];

  return (
    <section className="stats">

      <div className="stats-ambient"></div>

      <div className="stats-particles" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="stats-wrapper">

        <div className="stats-grid">

          {stats.map((item, index) => (

            <div
              className="stats-card"
              key={index}
            >

              <div className="card-corner"></div>

              <div className="stats-card-top">

                <span className="stats-index">
                  0{index + 1}
                </span>

                <div className="stats-icon">
                  {item.icon}
                </div>

              </div>

              <div className="stats-content">

                <span className="stats-eyebrow">
                  VERTEX STUDIO
                </span>

                <h2>
                  {item.number}
                </h2>

                <p>
                  {item.title}
                </p>

              </div>

              <div className="stats-bottom">

                <span className="stats-line"></span>

                <span className="stats-arrow">
                  ↗
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;