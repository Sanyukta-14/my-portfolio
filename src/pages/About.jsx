import "./About.css";

function About() {
  return (
    <section className="about-section">

      <div className="about-heading">
        <span className="section-tag">GET TO KNOW ME</span>

        <h1>
          About <span>Me</span>
        </h1>

        <p>
          A little introduction about my journey,
          education and passion for technology.
        </p>
      </div>

      <div className="about-container">

        {/* Introduction */}

        <div className="about-card intro-card">
          <h2>Hello, I'm Sanyukta! 👋</h2>

          <p>
            I am an MCA student with an interest in
            software development and artificial intelligence.
            I enjoy learning new technologies and building
            projects that turn creative ideas into practical
            digital solutions.
          </p>

          <p>
            My goal is to continuously improve my technical
            knowledge, problem-solving abilities and
            development skills.
          </p>
        </div>

        {/* Education */}

        <div className="about-card education-card">
          <h2>🎓 Education</h2>

          <div className="education-item">
            <span className="education-dot"></span>

            <div>
              <h3>Master of Computer Applications (MCA)</h3>
              <p>
                Late Bhausaheb Hiray S. S. Trust's
                Institute of Computer Application
              </p>
              <span>Expected Graduation: 2028</span>
            </div>
          </div>

          <div className="education-item">
            <span className="education-dot"></span>

            <div>
              <h3>Bachelor's Degree</h3>
              <p>
                Add your undergraduate college and degree
                details here.
              </p>
              <span>Previous Education</span>
            </div>
          </div>

        </div>

        {/* Interests */}

        <div className="about-card interests-card">
          <h2>✨ My Interests</h2>

          <div className="interest-list">
            <span>Web Development</span>
            <span>Artificial Intelligence</span>
            <span>Problem Solving</span>
            <span>Learning New Technologies</span>
          </div>
        </div>

        {/* Career Goals */}

        <div className="about-card goal-card">
          <h2>🚀 My Career Goals</h2>

          <p>
            I aspire to become a skilled software developer,
            work on meaningful technology projects and
            contribute to innovative solutions.
          </p>

          <p>
            I believe in consistent learning, practical
            experience and personal growth.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;