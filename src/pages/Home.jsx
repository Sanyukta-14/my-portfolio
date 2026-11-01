import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <section className="hero">

      {/* Aurora Background */}
      <div className="aurora aurora-one"></div>
      <div className="aurora aurora-two"></div>

      {/* Left Content */}
      <div className="hero-content">

        <span className="hero-tag">
          WELCOME TO MY CREATIVE SPACE
        </span>

        <h1>
          Hello, I'm <br />
          <span className="gradient-text">Sanyukta</span>
        </h1>

        <h2>
          MCA Student & Aspiring Developer
        </h2>

        <p>
          I love exploring technology, developing creative
          solutions, and turning ideas into meaningful digital
          experiences. Every project is another opportunity
          to learn, build and grow.
        </p>

        <div className="hero-buttons">

          <Link to="/projects" className="primary-btn">
            Explore My Work ↗
          </Link>

          <Link to="/contact" className="secondary-btn">
            Let's Connect
          </Link>

        </div>

        <div className="hero-note">
          <span className="status-dot"></span>
          Always learning. Always creating.
        </div>

      </div>

      {/* Right Illustration */}
      <div className="hero-visual">

        <div className="visual-glow"></div>

        <div className="developer-card">

          <span className="floating-star star-one">✦</span>
          <span className="floating-star star-two">✧</span>

          {/* Developer Illustration */}
          <svg
            viewBox="0 0 400 400"
            className="developer-svg"
            role="img"
            aria-label="Illustration of a developer working on a laptop"
          >
            {/* Decorative Circle */}
            <circle
              cx="200"
              cy="200"
              r="155"
              fill="#8b5cf6"
              opacity="0.12"
            />

            {/* Laptop Screen */}
            <rect
              x="90"
              y="115"
              width="220"
              height="155"
              rx="18"
              fill="#252044"
              stroke="#a78bfa"
              strokeWidth="5"
            />

            {/* Screen Content */}
            <rect
              x="105"
              y="130"
              width="190"
              height="125"
              rx="8"
              fill="#101025"
            />

            <circle cx="120" cy="145" r="4" fill="#fb7185"/>
            <circle cx="134" cy="145" r="4" fill="#fbbf24"/>
            <circle cx="148" cy="145" r="4" fill="#34d399"/>

            <path
              d="M130 180 L155 200 L130 220"
              stroke="#a78bfa"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M175 220 L220 175"
              stroke="#22d3ee"
              strokeWidth="8"
              strokeLinecap="round"
            />

            {/* Developer Head */}
            <circle cx="200" cy="105" r="38" fill="#f5c49b"/>

            {/* Hair */}
            <path
              d="M163 105 Q158 55 205 60 Q245 65 238 108
              Q225 90 210 88 Q185 103 163 105"
              fill="#352342"
            />

            {/* Body */}
            <path
              d="M145 270 Q150 205 200 205 Q250 205 255 270"
              fill="#a78bfa"
            />

            {/* Laptop Base */}
            <path
              d="M80 270 L320 270 L290 292 L110 292 Z"
              fill="#c4b5fd"
            />

            {/* Laptop Detail */}
            <path
              d="M175 275 L225 275"
              stroke="#6d28d9"
              strokeWidth="5"
              strokeLinecap="round"
            />

          </svg>

          <div className="visual-caption">
            <span>✦</span> Building the Future
          </div>

        </div>

        <div className="floating-label label-top">
          Creative Thinker
        </div>

        <div className="floating-label label-bottom">
          Developer in Progress
        </div>

      </div>

    </section>
  );
}

export default Home;