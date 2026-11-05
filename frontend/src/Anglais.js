import { Link } from "react-router-dom";
import Menu from "./frontaend/Menu";
import "./Anglais.css";

function Anglais() {
  return (
    <div>
      <Menu />

      {/* HERO */}
      <section className="langue-hero">
        <h1>Formation en EAnglais</h1>
        <p>Maîtrisez l'espagnol avec un programme complet et structuré.</p>
      </section>

      {/* CONTENT */}
      <section className="langue-content">
        <div className="langue-box">

          <h2>Informations sur la formation</h2>

          <p><strong>Durée :</strong> 5 mois</p>
          <p><strong>Niveau :</strong> Débutant à Intermédiaire</p>
          <p><strong>Fréquence :</strong> 3 séances par semaine</p>
          <p><strong>Certificat :</strong> Attestation délivrée en fin de formation</p>

          <h3>Programme :</h3>
          <ul>
            <li>Grammaire et conjugaison</li>
            <li>Communication orale</li>
            <li>Compréhension écrite</li>
            <li>Vocabulaire professionnel</li>
            <li>Préparation aux examens</li>
          </ul>

         
        </div>
      </section>

    </div>
  );
}

export default Anglais;