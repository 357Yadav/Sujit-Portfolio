import "./Leadership.css";

const leadership = [
  {
    icon: "🏏",
    title: "College Cricket Captain",
    description:
      "Leading the college cricket team, planning match strategies, motivating players, and representing the team in tournaments.",
  },
  {
    icon: "⚡",
    title: "Administrative Director - BoltsArmy",
    description:
      "Managing administrative operations, coordinating volunteers, organizing events, and supporting the growth of the BoltsArmy community.",
  },
  {
    icon: "🎓",
    title: "President - ISAC",
    description:
      "Leading student initiatives, organizing technical and cultural events, and encouraging student participation.",
  },
  {
    icon: "👥",
    title: "Member - SAC",
    description:
      "Working with the Student Activity Council to organize campus events and improve student engagement.",
  },
  {
    icon: "⚽",
    title: "Football Player",
    description:
      "Representing the college in football while developing teamwork, discipline, and leadership skills.",
  },
  {
    icon: "🏐",
    title: "Volleyball Player",
    description:
      "Active volleyball player with experience in team coordination and competitive sports.",
  },
];

function Leadership() {
  return (
    <section className="leadership" id="leadership">
      <h2>Leadership & Responsibilities</h2>

      <div className="leadership-grid">
        {leadership.map((item, index) => (
          <div className="leadership-card" key={index}>
            <div className="icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Leadership;