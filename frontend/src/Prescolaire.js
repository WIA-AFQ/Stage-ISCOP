import Menu from "./frontaend/Menu"; 
import "./Prescolaire.css";
import presImg from "./frontaend/assets/images/presscolaire.jpeg";

function Prescolaire() {
  return (
    <div>
      <Menu />
      <section className="hero">
        <img src={presImg} alt="Formation Préscolaire" className="hero-img"/>
        <div className="hero-overlay">
          <h1>Formation Éducatrices Préscolaire</h1>
          <p>
            Formation professionnelle pour préparer des éducatrices qualifiées capables
            d’accompagner les enfants en utilisant des méthodes pédagogiques modernes
          </p>
        </div>
      </section>
      <section className="hero-features">
        <div className="features">
          <div className="feature">
            <span></span>
            <h3>Durée de la formation</h3>
            <p>6 Mois</p>
          </div>

          <div className="feature">
            <span></span>
            <h3>Certificat</h3>
            <p>Certificat reconnu</p>
          </div>

          <div className="feature">
            <span></span>
            <h3>Stage pratique</h3>
            <p>Mise en pratique sur le terrain</p>
          </div>
        </div>
      </section>
      <section className="about">
        <h2>À propos</h2>
        <p>
          Cette formation vise à qualifier les éducatrices afin d’acquérir des compétences en communication, 
          en orientation et en animation d’activités pédagogiques adaptées aux enfants en âge préscolaire.
        </p>
      </section>
      <section className="objectives">
        <h2>Objectifs</h2>
        <div className="cards">
          <div className="card">
            <h3>Développement de l’enfant</h3>
            <p>Comprendre les étapes fondamentales du développement de l’enfant et ses besoins.</p>
          </div>

          <div className="card">
            <h3>Méthodes pédagogiques</h3>
            <p>Adopter des méthodes pédagogiques modernes et ludiques.</p>
          </div>

          <div className="card">
            <h3>Gestion de classe</h3>
            <p>Créer un environnement sûr et stimulant pour l’apprentissage.</p>
          </div>
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

export default Prescolaire;