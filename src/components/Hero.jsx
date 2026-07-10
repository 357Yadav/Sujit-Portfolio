import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <span className="welcome-text">👋 Hello, I'm</span>

       <h1 className="gradient-name">
    Sujit Yadav
</h1>

        <TypeAnimation
          sequence={[
            "Java Full Stack Developer",
            2000,
            "Student Leader",
            2000,
            "Cricket Captain",
            2000,
            "Community Builder",
            2000,
            "Problem Solver",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="typing-text"
        />

        <p className="hero-description">
          Building Software • Leading Teams • Inspiring Communities.
          <br />
          Passionate about Java, Spring Boot, React.js, MySQL, and creating
          real-world applications that make an impact.
        </p>

        <div className="buttons">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn"
          >
            Download Resume
          </a>

          <a href="#projects" className="secondary-btn">
            View Projects <FaArrowRight />
          </a>

          <a href="#contact" className="outline-btn">
            Contact Me
          </a>
        </div>

        <div className="socials">
          <a
            href="https://github.com/357Yadav"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sujit-yadav-5a5bb624a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:sujityadav6809@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="hero-right">
  <div className="profile-container">

    <img
      src="/portfolio.jpeg"
      alt="Sujit Yadav"
      className="profile-image"
    />

    <h3>Sujit Yadav</h3>

    <p>Java Full Stack Developer</p>

  </div>
</div>
    </section>
  );
}

export default Hero;