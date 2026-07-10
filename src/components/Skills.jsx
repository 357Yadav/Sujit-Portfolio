import React from "react";

const skills = [
  { name: "Java", level: 95 },
  { name: "Spring Boot", level: 90 },
  { name: "React.js", level: 90 },
  { name: "JavaScript", level: 88 },
  { name: "HTML & CSS", level: 95 },
  { name: "MySQL", level: 90 },
];

function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "80px 10%",
        background: "#111827",
        color: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "40px",
          marginBottom: "50px",
        }}
      >
        Skills
      </h2>

      {skills.map((skill) => (
        <div key={skill.name} style={{ marginBottom: "25px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
            }}
          >
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>

          <div
            style={{
              width: "100%",
              height: "10px",
              background: "#374151",
              borderRadius: "20px",
            }}
          >
            <div
              style={{
                width: `${skill.level}%`,
                height: "100%",
                background: "#38bdf8",
                borderRadius: "20px",
              }}
            />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;