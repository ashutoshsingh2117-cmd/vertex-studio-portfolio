import { useState } from "react";
import "../styles/FAQ.css";

function FAQ() {

  const [active, setActive] = useState(0);

  const faqs = [
    {
      number: "01",
      question: "How do we start a project?",
      answer:
        "We begin by understanding your vision, goals and requirements. After planning the strategy, we move into design, development and final launch."
    },
    {
      number: "02",
      question: "What makes Vertex Studio different?",
      answer:
        "We focus on creating premium digital experiences that combine modern design, smooth interactions and powerful technology."
    },
    {
      number: "03",
      question: "Do you create custom designs?",
      answer:
        "Yes, every project is uniquely designed according to your brand identity and audience. No templates, only custom experiences."
    },
    {
      number: "04",
      question: "How long does a project take?",
      answer:
        "The timeline depends on project requirements. We focus on delivering high-quality results with proper attention to every detail."
    },
    {
      number: "05",
      question: "Do you provide support after launch?",
      answer:
        "Yes, we provide maintenance and support to keep your website updated, secure and performing smoothly."
    }
  ];


  return (

    <section className="luxury-faq" id="faq">

      <div className="faq-bg-glow"></div>


      <div className="luxury-faq-container">


        <div className="faq-left">

          <span className="faq-tag">
            FAQ
          </span>


          <h2>
            Questions?
            <br />
            <span>
              We have answers.
            </span>
          </h2>


          <p>
            Everything you need to know about our
            design process, development workflow
            and creative solutions.
          </p>


          <div className="faq-line"></div>

        </div>



        <div className="faq-right">


          {faqs.map((item,index)=>(

            <div
              className={`luxury-card ${
                active === index ? "active" : ""
              }`}
              key={index}
            >


              <button
                onClick={() =>
                  setActive(
                    active === index ? null : index
                  )
                }
              >


                <div className="faq-question-box">

                  <span className="faq-number">
                    {item.number}
                  </span>


                  <span>
                    {item.question}
                  </span>

                </div>


                <span className="faq-arrow">
                  →
                </span>


              </button>



              <div className="luxury-answer">

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