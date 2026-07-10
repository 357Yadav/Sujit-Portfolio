import "./Highlights.css";
import { FaLaptopCode, FaUsers, FaTrophy, FaCode } from "react-icons/fa";

function Highlights() {
  return (
    <section className="highlights">

      <div className="highlight-card">
        <FaLaptopCode className="highlight-icon"/>
        <h2>3+</h2>
        <p>Projects</p>
      </div>

      <div className="highlight-card">
        <FaUsers className="highlight-icon"/>
        <h2>4</h2>
        <p>Leadership Roles</p>
      </div>

      <div className="highlight-card">
        <FaTrophy className="highlight-icon"/>
        <h2>3</h2>
        <p>Sports</p>
      </div>

      <div className="highlight-card">
        <FaCode className="highlight-icon"/>
        <h2>10+</h2>
        <p>Technologies</p>
      </div>

    </section>
  );
}

export default Highlights;