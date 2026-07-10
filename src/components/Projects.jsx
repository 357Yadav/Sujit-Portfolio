import React from "react";

const projects = [
  {
    title: "Auction-Based Cricket Website",
    image: "/auction.png",
    description:
      "A full-stack cricket player auction platform with Admin Dashboard, Franchise Management, Player Registration, Live Auction, and Team Management.",
    tech: "React (JSX) • Spring Boot • Java • MySQL",
    live: "https://auction-portal-sigma.vercel.app/",
    github: "https://github.com/357Yadav/Auction-portal",
  },
  {
    title: "BoltsArmy Website",
    image: "/boltsarmy.png",
    description:
      "Official fan engagement platform featuring memberships, player profiles, fixtures, gallery, and latest news.",
    tech: "React • JavaScript • HTML • CSS",
    live: "#", // Replace with your deployed BoltsArmy website when available
    github: "#",
  },
  {
    title: "ATM Banking System",
    image: "/atm.png",
    description:
      "Desktop banking application with Login, Signup, Deposit, Withdrawal, Balance Enquiry, Mini Statement, Fast Cash, and PIN Change.",
    tech: "Java • Swing • JDBC • MySQL",
    live: "#", // Desktop application, so no live deployment
    github: "https://github.com/357Yadav/-ATM-Banking-Systemv",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "80px 10%",
        background: "#0f172a",
        color: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "50px",
        }}
      >
        My Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px,1fr))",
          gap: "30px",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 10px 20px rgba(0,0,0,.4)",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h3>{project.title}</h3>

              <p style={{ color: "#cbd5e1" }}>
                {project.description}
              </p>

              <p>
                <strong>Tech Stack:</strong>
                <br />
                {project.tech}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      background: "#38bdf8",
                      color: "#000",
                      padding: "10px 18px",
                      borderRadius: "8px",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Live Demo
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    border: "2px solid #38bdf8",
                    color: "#38bdf8",
                    padding: "10px 18px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;