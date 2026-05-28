import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        {/* The brand logo/name routes back to the root */}
        <NavLink to="/" end>
          <strong>Sothang's portfolio</strong>
        </NavLink>
      </div>
      
      <ul className="nav-links">
        <li>
          <NavLink 
            to="/" 
            end 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Architecture & Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;