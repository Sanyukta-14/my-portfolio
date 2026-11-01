import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      {/* Portfolio Logo */}
      <div className="logo">
        My<span>Portfolio</span>.
      </div>

      {/* Navigation Links */}
      <div className="nav-links">

        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>

        <NavLink to="/skills">
          Skills
        </NavLink>

        <NavLink to="/projects">
          Projects
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;