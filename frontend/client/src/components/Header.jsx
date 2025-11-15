import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h2 className="logo">MyApp</h2>
      </div>

      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/admin">Admin Dashboard</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><button className="logout-btn"><Link to="/login">Login</Link></button></li>
        <li><button className="logout-btn"><Link to="/register">Register</Link></button></li>
      </ul>
    </nav>
  );
}
