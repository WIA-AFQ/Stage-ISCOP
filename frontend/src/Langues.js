import Menu from "./frontaend/Menu";
import { Link } from "react-router-dom";
import "./Langues.css";

import germany from "./frontaend/assets/images/langues/allemand.png";
import usa from "./frontaend/assets/images/langues/anglais.png";
import france from "./frontaend/assets/images/langues/français.png";
import espagnol from "./frontaend/assets/images/langues/espagne.jpg";
import heroImage from "./frontaend/assets/images/imaglang.jpg";

function Langues() {
  return (
    <div>
      <Menu />
      <section
        className="hero-langues"
        style={{ backgroundImage: `url(${heroImage})` }} >
        <div className="overlay-langues">
          <h1>Formations en Langues</h1>
          <p>
            Développez vos compétences linguistiques avec des formations
            adaptées à tous les niveaux.
          </p>
        </div>
      </section>
      <section className="langues-section">
        <h2 className="langues-title">Langues populaires</h2>

        <div className="langues-grid">

          <Link to="/langues/allemand" className="langue-card">
            <img src={germany} alt="Allemand" />
            <span>Cours d'allemand</span>
          </Link>

          <Link to="/langues/anglais" className="langue-card">
            <img src={usa} alt="Anglais" />
            <span>Cours d'anglais</span>
          </Link>

          <Link to="/langues/francais" className="langue-card">
            <img src={france} alt="Français" />
            <span>Cours de français</span>
          </Link>

          <Link to="/langues/espagnol" className="langue-card">
            <img src={espagnol} alt="Espagnol" />
            <span>Cours d'espagnol</span>
          </Link>

        </div>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <p>📞 +212 661 350450 </p>
          <p>📞+212 607 158182</p>
          <p>✉ info@iscopsup.com</p>
          <p>© 2026 Centre de Formation. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default Langues;