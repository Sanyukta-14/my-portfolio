
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "EchoMind",
      category: "AI / Machine Learning",
      description:
        "An offline causal investigation laboratory that simulates systems, detects anomalies and ranks possible causes of unexpected outcomes.",
      technologies: ["Python", "Machine Learning", "Streamlit"],
      github: "https://github.com/Sanyukta-14/EchoMind",
      featured: true,
    },
    {
      title: "Employee Management System",
      category: "Full Stack Development",
      description:
        "A group project designed to manage employee information and organisational records through a web-based system.",
      technologies: ["Java", "Spring Boot", "MySQL"],
      github: "",
    },
    {
      title: "Weather App",
      category: "Web Development",
      description:
        "A weather application project created to practise frontend development and displaying weather information.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Sanyukta-14/smart-weather-advisor",
    },
    {
      title: "Online Ticket Booking",
      category: "Web Development",
      description:
        "A project concept for exploring the user flow of an online ticket booking platform.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Sanyukta-14/OnlineTicketBookingSystem-Deployment",
    },
    {
      title: "College Event Management",
      category: "Web Development",
      description:
        "A project focused on organising and presenting college event information.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "",
    },
    {
      title: "Mini Projects",
      category: "Practice Projects",
      description:
        "A collection of smaller projects including Tic-Tac-Toe, Stopwatch and Responsive Landing Page.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "",
    },
  ];

  return (
    <section className="projects-section">
      <div className="projects-heading">
        <span className="section-tag">MY WORK</span>
        <h1>Featured <span>Projects</span></h1>
        <p>
          A selection of projects through which I explore ideas,
          practise development and improve my technical skills.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            className={`project-card ${project.featured ? "featured-project" : ""}`}
            key={project.title}
          >
            {project.featured && (
              <span className="featured-label">MAIN PROJECT</span>
            )}

            <span className="project-category">{project.category}</span>

            <h2>{project.title}</h2>

            <p className="project-description">
              {project.description}
            </p>

            <div className="technology-list">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            {project.github && (
              <a
                className="project-link"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub ↗
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;