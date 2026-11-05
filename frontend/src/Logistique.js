import Menu from "./frontaend/Menu";
import { Link } from "react-router-dom";
import logistiqueImg from "./frontaend/assets/images/logistique.jpg";
import chariotImg from "./frontaend/assets/images/Engins de terrassement et de chargement.jpg";
import enginsImg from "./frontaend/assets/images/Grues mobiles et grues à tour.jpg";
import nacelleImg from "./frontaend/assets/images/Nacelles élévatrices mobiles de personnel (NEMP).jpg";
import grueImg from "./frontaend/assets/images/Conducteurs de chariots élévateurs.jpg";
import "./Logistique.css";

function Logistique() {
  const formations = [
    { name: "Conducteurs de chariots élévateurs",
      img: chariotImg,
    },
    { name: "Engins de terrassement et de chargement",
      img: enginsImg,
    },
    {
      name: "Nacelles élévatrices mobiles de personnel (NEMP)",
      img: nacelleImg,
    },
    {
      name: "Grues mobiles et grues à tour",
      img: grueImg,
    },
  ];

  return (
    <div>
      <Menu />
      <section
        className="logistique-hero"
        style={{ backgroundImage: `url(${logistiqueImg})` }}
      >
        <div className="logistique-overlay">
          <h1>Centre de Formation Professionnelle ISCOP</h1>
          <h2>MANUTENTION LOGISTIQUE</h2>
          <p>
            Nous formons les conducteurs qualifiés pour les engins de manutention et de levage.
          </p>
        </div>
      </section>
      <section className="logistique-formations">
        <h2>Formations proposées</h2>
        <div className="formations-grid">
          {formations.map((f) => (
            <div className="formation-card" key={f.name}>
              <img src={f.img} alt={f.name} />
              <h3>{f.name}</h3>
            </div>
          ))}
        </div>
      </section>
      <section className="logistique-avantages">
        <h2>Avantages de la formation</h2>
        <ul>
          <li>Centre agréé avec grande expérience en manutention et logistique</li>
          <li>Formation théorique et pratique intensive</li>
          <li>Adaptée aux besoins du marché marocain et international</li>
          <li>Obtention permis de conduire + certificat professionnel</li>
          <li>Certificats reconnus : CACES R489 / R483 / R482</li>
          <li>Certificat de formation professionnelle « Magasinier »</li>
          <li>Attestations de stage en entreprise</li>
          <li>Possibilité de coaching professionnel</li>
          <li>Formation en alternance (théorie + pratique)</li>
        </ul>
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

export default Logistique;