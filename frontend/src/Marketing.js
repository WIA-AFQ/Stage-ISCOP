import Menu from "./frontaend/Menu";
import { Link } from "react-router-dom";
import marketingImg from "./frontaend/assets/images/marr.png";
import fbInstaImg from "./frontaend/assets/images/faccebock-insta.jpeg";
import googleImg from "./frontaend/assets/images/google.jpeg";
import webImg from "./frontaend/assets/images/site web.jpeg";
import ecommerceImg from "./frontaend/assets/images/inphographi.jpeg";
import "./Marketing.css";
import "./Inscriptioninfo.css"; 
function Marketing() {
  
  const modules = [
    {
      name: "Facebook & Instagram Ads",
      img: fbInstaImg,
      desc: "Apprenez à créer et gérer des campagnes publicitaires efficaces sur les réseaux sociaux."
    },
    {
      name: "Google & YouTube Ads",
      img: googleImg,
      desc: "Maîtrisez les campagnes publicitaires sur Google Search et YouTube pour générer du trafic ciblé."
    },
    {
      name: "Création de sites web",
      img: webImg,
      desc: "Concevez des sites web professionnels optimisés pour le marketing digital."
    },
    {
      name: "Infographie & E-commerce",
      img: ecommerceImg,
      desc: "Créez des contenus visuels attractifs et apprenez les bases de la gestion de boutiques en ligne."
    }
  ];
   

  return (
    <div>
      <Menu />

      <section
        className="marketing-hero"
        style={{ backgroundImage: `url(${marketingImg})` }}
      >
        <div className="marketing-overlay">
          <h1>Formation Marketing Digital</h1>
          <p>4 Mois de Formation – 80% Pratique & 20% Théorique</p>
        </div>
      </section>

      <section className="marketing-modules">
        <h2>Nos Modules</h2>
        <div className="modules-grid">
          {modules.map((mod) => (
            <div className="module-card" key={mod.name}>
              <img src={mod.img} alt={mod.name} />
              <h3>{mod.name}</h3>
              <p>{mod.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="marketing-objectifs">
        <h2>Objectifs de la Formation</h2>
        <div className="objectifs-cards">
          <div className="objectif-card">
            <h3>80% Pratique</h3>
            <p>Mise en place de campagnes réelles, création de sites, gestion e-commerce.</p>
          </div>

          <div className="objectif-card">
            <h3>20% Théorique</h3>
            <p>Stratégie marketing, ciblage, analyse des performances et optimisation des campagnes.</p>
          </div>

          <div className="objectif-card">
            <h3>Durée : 4 Mois</h3>
            <p>Formation intensive encadrée par des professionnels du marketing digital.</p>
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

export default Marketing;