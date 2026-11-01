import "./Skills.css";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "HTML", level: "Familiar" },
        { name: "CSS", level: "Familiar" },
        { name: "JavaScript", level: "Learning" },
        { name: "React.js", level: "Learning" },
      ],
    },
    {
      title: "Programming & Backend",
      icon: "💻",
      skills: [
        { name: "Java", level: "Learning" },
        { name: "Python", level: "Familiar" },
        { name: "Spring Boot", level: "Learning" },
        { name: "Node.js", level: "Learning" },
      ],
    },
    {
      title: "Database & Tools",
      icon: "⚙️",
      skills: [
        { name: "MySQL", level: "Familiar" },
        { name: "Git & GitHub", level: "Familiar" },
        { name: "VS Code", level: "Familiar" },
        { name: "Eclipse", level: "Familiar" },
      ],
    },
  ];

  return (
    <section className="skills-section">
      <div className="skills-heading">
        <span className="section-tag">WHAT I WORK WITH</span>
        <h1>My <span>Skills</span></h1>
        <p>
          Technologies and tools I use while learning, experimenting
          and building projects.
        </p>
      </div>

      <div className="skills-container">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <div className="skill-card-heading">
              <span className="skill-icon">{group.icon}</span>
              <h2>{group.title}</h2>
            </div>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <span>{skill.name}</span>
                  <span className="skill-level">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="learning-note">
        <span>✨</span>
        <p>
          Always curious, always learning — I believe every project
          is an opportunity to improve.
        </p>
      </div>
    </section>
  );
}

export default Skills;