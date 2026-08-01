import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import "../styles/Contact.css";

function Contact() {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    emailjs
      .sendForm(
        "service_tdw8c5g",
        "template_52ht2pz",
        form.current,
        "xv06p8Lnd9KSoXSGv"
      )
      .then(
        () => {
          setSuccess(
            "Your message has been sent successfully!"
          );

          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            budget: "",
            message: "",
          });

          setLoading(false);
        },
        (err) => {
          console.log(err);

          setError(
            "Something went wrong. Please try again."
          );

          setLoading(false);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-bg"></div>

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Left Side */}

        <div className="contact-left">
          <span className="section-tag">CONTACT US</span>

          <h2 className="contact-heading">
            <span className="premium-heading">Let's</span>{" "}
            <span className="white-heading">Build Your</span>{" "}
            <span className="premium-heading">Dream Project</span>
          </h2>

          <p>
            Ready to elevate your business with premium digital solutions?
            Whether you need a stunning website, creative branding or complete
            social media management, Vertex Studio is here to help.
          </p>

          <div className="contact-info">

            <motion.div
              className="info-card"
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <div className="info-icon">
                <FaEnvelope />
              </div>

              <div>
                <h4>Email</h4>
                <p>studiovertex.work@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              className="info-card"
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h4>Location</h4>
                <p>Jaipur, Rajasthan, India</p>
              </div>
            </motion.div>

            <motion.div
              className="info-card"
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <div className="info-icon">
                <FaClock />
              </div>

              <div>
                <h4>Availability</h4>
                <p>Monday – Saturday | 10:00 AM – 8:00 PM</p>
              </div>
            </motion.div>

          </div>
        </div>
{/* Right Side */}

        <motion.form
          ref={form}
          className="contact-form"
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select Service</option>

              <option value="Business Website">
                Business Website
              </option>

              <option value="Portfolio Website">
                Portfolio Website
              </option>

              <option value="NGO Website">
                NGO Website
              </option>

              <option value="Landing Page">
                Landing Page
              </option>

              <option value="Website Redesign">
                Website Redesign
              </option>

              <option value="UI/UX Design">
                UI/UX Design
              </option>

              <option value="Graphic Design">
                Graphic Design
              </option>

              <option value="Logo Design">
                Logo Design
              </option>

              <option value="Banner Design">
                Banner Design
              </option>

              <option value="Thumbnail Design">
                Thumbnail Design
              </option>

              <option value="Video Editing">
                Video Editing
              </option>

              <option value="Social Media Post Design">
                Social Media Post Design
              </option>

              <option value="Social Media Handling">
                Social Media Handling
              </option>
            </select>
          </div>
<input
            type="text"
            name="budget"
            placeholder="Your Budget (Optional)"
            value={formData.budget}
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <p className="privacy-text">
            🔒 Your information is completely secure and confidential. We never
            share your personal details with anyone.
          </p>

          {success && (
            <p className="success-message">
              {success}
            </p>
          )}

          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="submit-btn"
            disabled={loading}
          >
            {loading ? (
              "Sending..."
            ) : (
              <>
                <FaPaperPlane />
                <span>Send Message</span>
              </>
            )}
          </button>

        </motion.form>

      </motion.div>
    </section>
  );
}

export default Contact;