import Menu from "./frontaend/Menu";
import { Link } from "react-router-dom";
import soutienImg from "./frontaend/assets/images/cours.jpeg";
import primaireImg from "./frontaend/assets/images/primaire.jpg";
import collegeImg from "./frontaend/assets/images/college.jpg";
import "./Soutien.css";

function Soutien() {
  const niveaux = [
    {
      name: "Primaire",
      img: primaireImg,
      matieres: "Français, Anglais, Mathématiques, Arabe"
    },
    {
      name: "Collège - Lycée",
      img: collegeImg,
      matieres: "Mathématiques, Physique, SVT, Français, Anglais"
    }
  ];

  return (
    <div>
      <Menu />

      <section
        className="soutien-hero"
        style={{ backgroundImage: `url(${soutienImg})` }}>
        <div className="soutien-overlay">
          <h1>Soutien Scolaire</h1>
          <p>Accompagnement pédagogique pour la réussite scolaire</p>
        </div>
      </section>

      <section className="soutien-about">
        <h2>Niveaux & Matières</h2>
        <div className="niveaux-grid">
          {niveaux.map((niveau) => (
            <div className="niveau-card" key={niveau.name}>
              <img src={niveau.img} alt={niveau.name} />
              <h3>{niveau.name}</h3>
              <p>{niveau.matieres}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="soutien-objectifs">
        <h2>Nos Objectifs</h2>
        <div className="objectifs-cards">
          <div className="objectif-card">
            <h3>Renforcement des Bases</h3>
            <p>Consolider les connaissances fondamentales dans chaque matière.</p>
          </div>

          <div className="objectif-card">
            <h3>Préparation aux Examens</h3>
            <p>Accompagnement spécifique pour les contrôles et examens officiels.</p>
          </div>

          <div className="objectif-card">
            <h3>Suivi Personnalisé</h3>
            <p>Encadrement adapté au niveau et aux besoins de chaque élève.</p>
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

export default Soutien;