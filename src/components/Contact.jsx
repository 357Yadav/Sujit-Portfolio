import "./Contact.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Get In Touch</h2>

      <p>
        I'm always open to discussing internships, software development,
        collaborations, and exciting projects.
      </p>

      <div className="contact-container">

        <div className="contact-info">

          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span>sujityadav6809@gmail.com</span>
          </div>

          <div className="contact-item">
            <FaPhone className="icon" />
            <span>+91 6202867228</span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <span>Visakhapatnam, Andhra Pradesh</span>
          </div>

        </div>

        <div className="social-buttons">

          <a
            href="https://github.com/357Yadav"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sujit-yadav-5a5bb624a"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;