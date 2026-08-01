import { useState } from "react";
import "../styles/FAQ.css";

function FAQ() {
  const [active, setActive] = useState(0);

  const faqs = [
    {
      question: "How do we start a project?",
      answer:
        "We begin with a discussion to understand your goals, brand and vision. After planning the strategy, we move into design, development and final launch.",
    },
    {
      question: "What makes Vertex Studio different?",
      answer:
        "We focus on premium UI, luxury branding, smooth animations and high-performance websites that help businesses stand out from the competition.",
    },
    {
      question: "Do you create custom designs?",
      answer:
        "Yes. Every website is designed from scratch according to your business, ensuring a unique identity instead of using generic templates.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Most websites are completed within 7–21 days depending on the project size, features and revisions.",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "Absolutely. We provide maintenance, updates and technical support even after your website goes live.",
    },
  ];

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section id="faq" className="faq">

      {/* Background Effects */}

      <div className="faq-red-light left"></div>
      <div className="faq-red-light right"></div>

      <div className="faq-particle p1"></div>
      <div className="faq-particle p2"></div>
      <div className="faq-particle p3"></div>

      <div className="faq-container">

        {/* Left Side */}

        <div className="faq-left">

          <span className="faq-badge">
            FAQ
          </span>

          <h2>
            Questions?
            <br />
            <span>We Have Answers.</span>
          </h2>

          <p>
            Everything you need to know about our design,
            development and creative workflow.
            Clear answers. Premium experience.
          </p>

          <div className="faq-line"></div>

        </div>

        {/* Right Side */}

        <div className="faq-right">

          {faqs.map((item, index) => (

            <div
              key={index}
              className={`faq-card ${
                active === index ? "active" : ""
              }`}
            >

              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >

                <div className="faq-number">

                  {(index + 1)
                    .toString()
                    .padStart(2, "0")}

                </div>

                <h3>
                  {item.question}
                </h3>

                <span className="faq-icon">

                  {active === index ? "−" : "+"}

                </span>

              </button>

              <div
                className={`faq-answer ${
                  active === index
                    ? "show"
                    : ""
                }`}
              >

                <p>

                  {item.answer}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQ;