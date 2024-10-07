import { NavLink } from 'react-router-dom';
import '../styles/navigation.css';

function Navigation() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/aboutme"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          About Me
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Contact
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/portfolio"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Portfolio
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/resume"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Resume
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;