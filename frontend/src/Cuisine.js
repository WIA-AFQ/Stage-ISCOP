import Menu from "./frontaend/Menu";
import { Link } from "react-router-dom";
import cuisineImg from "./frontaend/assets/images/cuisiine.jpeg";
import interImg from "./frontaend/assets/images/cuisin.jpeg";
import patisserieImg from "./frontaend/assets/images/patissiers.jpeg";
import "./Cuisine.css";

function Cuisine() {
  const options = [
    {
      name: "Cuisine Internationale",
      img: interImg,
      desc: "Apprenez les techniques culinaires du monde : cuisine française, italienne, asiatique et orientale."
    },
    {
      name: "Pâtisserie Moderne",
      img: patisserieImg,
      desc: "Maîtrisez les desserts modernes, les gâteaux professionnels et les techniques de décoration avancées."
    }
  ];

  return (
    <div>
      <Menu />

      <section
        className="cuisine-hero"
        style={{ backgroundImage: `url(${cuisineImg})` }}
      >
        <div className="cuisine-overlay">
          <h1>Formation Cuisinier Professionnel</h1>
          <p>4 Mois de Formation – 80% Pratique & 20% Théorique</p>
        </div>
      </section>

      <section className="cuisine-about">
        <h2>Nos Options de Formation</h2>
        <div className="options-grid">
          {options.map((option) => (
            <div className="option-card" key={option.name}>
              <img src={option.img} alt={option.name} />
              <h3>{option.name}</h3>
              <p>{option.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cuisine-programme">
        <h2>Programme & Objectifs</h2>
        <div className="programme-cards">
          <div className="programme-card">
            <h3>80% Pratique</h3>
            <p>Travaux en cuisine réelle, préparation de plats, techniques professionnelles et gestion du temps.</p>
          </div>

          <div className="programme-card">
            <h3>20% Théorique</h3>
            <p>Hygiène alimentaire, sécurité, gestion des coûts et bases de nutrition.</p>
          </div>

          <div className="programme-card">
            <h3>Durée : 4 Mois</h3>
            <p>Formation intensive avec encadrement par des chefs professionnels qualifiés.</p>
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

export default Cuisine;