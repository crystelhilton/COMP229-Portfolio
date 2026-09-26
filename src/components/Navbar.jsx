import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">

      <NavLink to="/" className="brand" aria-label="Crystel Hilton home">
        <div className="logo" aria-hidden="true">
          CH
        </div>

        <div className="brand-text">
          <span className="brand-name">CRYSTEL HILTON</span>
          <span className="brand-field">
            Digital Health • Technology • Data
          </span>
        </div>
      </NavLink>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/education">Education</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

    </nav>
  )
}

export default Navbar