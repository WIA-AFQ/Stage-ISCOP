import { Link } from "react-router-dom";
import Menu from "./frontaend/Menu";
import "./PackSage.css";
import sageImg from "./frontaend/assets/images/ppack.jpeg";

function PackSage() {
  return (
    <div>
      <Menu />

      {/* HERO avec grande image */}
      <section className="hero-pack">
        <img src={sageImg} alt="Pack Sage Formation" className="hero-img"/>
        <div className="hero-overlay">
          <h1>Formation Pack Sage</h1>
          <p>Devenez expert en comptabilité et gestion avec le logiciel Sage</p>
          
        </div>
      </section>
      <section className="infos">
        <h2>Informations sur la formation</h2>
        <div className="info-grid">
          <div className="info-box"><h4>Durée</h4><p>4 mois</p></div>
          <div className="info-box"><h4>Niveau</h4><p>Débutant → Intermédiaire</p></div>
          <div className="info-box"><h4>Fréquence</h4><p>3 séances / semaine</p></div>
          <div className="info-box"><h4>Certificat</h4><p>Attestation de formation</p></div>
        </div>
      </section>
 <section className="about"> <div className="about-grid"> <div className="about-text"> <h2>À propos de la formation</h2> <p> Cette formation Pack Sage vous permet d’apprendre la comptabilité et la gestion d’entreprise avec l’un des logiciels les plus utilisés par les entreprises. </p> <p> Grâce à des exercices pratiques et des cas réels, vous serez capable de gérer les factures, la paie, les déclarations fiscales et les opérations comptables. </p> </div> <div className="about-image"> <img src={sageImg} alt="sage formation"/> </div> </div> </section>

      <section className="objectives">
        <h2>Objectifs de la formation</h2>
        <div className="cards">
          <div className="card"><h3>Comptabilité</h3><p>Comprendre les bases de la comptabilité générale.</p></div>
          <div className="card"><h3>Gestion administrative</h3><p>Organiser les documents et opérations financières.</p></div>
          <div className="card"><h3>Pratique Sage</h3><p>Maîtriser le logiciel Sage avec des exercices pratiques.</p></div>
        </div>
      </section>
      <section className="programme">
        <h2>Programme de la formation</h2>
        <div className="programme-grid">
          <div className="prog">Introduction à la comptabilité</div>
          <div className="prog">Gestion des factures clients</div>
          <div className="prog">Gestion fournisseurs</div>
          <div className="prog">Gestion de la paie</div>
          <div className="prog">Déclarations fiscales</div>
          <div className="prog">Utilisation complète de Sage</div>
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

export default PackSage;