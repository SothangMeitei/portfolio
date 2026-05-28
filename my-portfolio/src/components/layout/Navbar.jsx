import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="floating-nav">
      {/* Home Link */}
      <NavLink to="/" end className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        <span>Home</span>
      </NavLink>

      {/* Projects Link */}
      <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2"/>
          <path d="M7 7h.01"/>
          <path d="M17 7h.01"/>
          <path d="M12 7h.01"/>
          <path d="M3 12h18"/>
        </svg>
        <span>Projects</span>
      </NavLink>

      {/* Education Link */}
      <NavLink to="/education" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
        <span>Education</span>
      </NavLink>

      {/* Experience Link */}
      <NavLink to="/experience" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
        <span>Experience</span>
      </NavLink>

    </nav>
  );
};

export default Navbar;