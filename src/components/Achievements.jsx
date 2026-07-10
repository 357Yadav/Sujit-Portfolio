import "./Achievements.css";

const achievements = [
  {
    year: "2026",
    title: "Administrative Director - BoltsArmy",
    description:
      "Managing operations, coordinating teams, and supporting community events."
  },
  {
    year: "2026",
    title: "President - ISAC",
    description:
      "Leading student initiatives, organizing technical and cultural events."
  },
  {
    year: "2026",
    title: "College Cricket Captain",
    description:
      "Captaining the college cricket team and representing the institute."
  },
  {
    year: "2026",
    title: "Auction-Based Cricket Website",
    description:
      "Developed a full-stack cricket auction platform using React, Spring Boot and MySQL."
  },
  {
    year: "2026",
    title: "ATM Banking System",
    description:
      "Built a desktop banking application using Java Swing and MySQL."
  },
  {
    year: "2026",
    title: "BoltsArmy Website",
    description:
      "Developed the official website for BoltsArmy."
  }
];

function Achievements() {
  return (
    <section className="achievements" id="achievements">

      <h2>Achievements</h2>

      <div className="timeline">

        {achievements.map((item,index)=>(
          <div className="timeline-card" key={index}>

            <div className="year">
              {item.year}
            </div>

            <div className="content">

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Achievements;