import { Link } from "react-router-dom";
import "./Menu.css";
import logo from "./assets/images/logo.jpeg";

function Menu() {
  return (
    <nav className="navbar">

      <div className="logo">
        <img src={logo} alt="logo" />
        <div className="logo-text">
          <span className="top">Centre</span>
          <span className="middle">ISCOP</span>
          <span className="bottom">Formation</span>
        </div>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/formations">Formations</Link></li>
        <li><a href="/#apropos">À propos</a></li>
        <li><a href="/#contact">Contact</a></li>
        <li className="inscription-link">
          <Link to="/inscription">REJOINDRE MAINTENANT</Link>
        </li>
      </ul>

    </nav>
  );
}

export default Menu;
/*import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <nav className="navbar">
      <div className="logo">Centre de Formation</div>

      <ul className="nav-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/formations">Formations</Link></li>
       <li><a href="/#apropos">À propos</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Menu;*/