import "./About.css";
import {
  FaLaptopCode,
  FaUsers,
  FaFutbol,
  FaTrophy,
  FaCode,
  FaRocket,
} from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about" data-aos="fade-up">
      <div className="section-title">
        <h2>About Me</h2>
        <div className="underline"></div>
      </div>

      <div className="about-content">

        <div className="about-text">

          <h3>Hi, I'm Sujit Yadav 👋</h3>

          <p>
            I am a <strong>Computer Science Engineering student</strong> at
            <strong> Vignan's Institute of Information Technology</strong>,
            passionate about designing and developing modern web applications
            using Java, Spring Boot, React.js, and MySQL.
          </p>

          <p>
            I believe technology becomes meaningful when it solves real-world
            problems. That's why I enjoy building practical applications such as
            the <strong>Auction-Based Cricket Website</strong>,
            <strong> ATM Banking System</strong>, and
            <strong> BoltsArmy Website</strong>.
          </p>

          <p>
            Apart from coding, I enjoy leading teams, organizing events,
            and participating in sports, which have strengthened my
            communication, leadership, and teamwork skills.
          </p>

        </div>

        <div className="about-cards">

          <div className="card">
            <FaLaptopCode className="about-icon"/>
            <h3>Full Stack Developer</h3>
            <p>
              Building scalable applications with Java, Spring Boot,
              React.js, REST APIs and MySQL.
            </p>
          </div>

          <div className="card">
            <FaUsers className="about-icon"/>
            <h3>Leadership</h3>
            <p>
              President of ISAC, Administrative Director of BoltsArmy,
              and Member of SAC.
            </p>
          </div>

          <div className="card">
            <FaFutbol className="about-icon"/>
            <h3>Sports</h3>
            <p>
              College Cricket Captain, Football Player and Volleyball Player.
            </p>
          </div>

          <div className="card">
            <FaCode className="about-icon"/>
            <h3>Problem Solver</h3>
            <p>
              Passionate about Data Structures, Algorithms and Competitive Programming.
            </p>
          </div>

          <div className="card">
            <FaRocket className="about-icon"/>
            <h3>Innovation</h3>
            <p>
              Always learning new technologies and building real-world projects.
            </p>
          </div>

          <div className="card">
            <FaTrophy className="about-icon"/>
            <h3>Achievements</h3>
            <p>
              Developer, Student Leader, Sports Captain and Community Builder.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;