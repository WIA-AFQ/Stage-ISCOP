import Menu from "./frontaend/Menu"; 
import { useState } from "react";
import infoImg from "./frontaend/assets/images/buritique.jpeg";
import wordImg from "./frontaend/assets/images/word.png";
import excelImg from "./frontaend/assets/images/excel.png";
import pptImg from "./frontaend/assets/images/power.jpg";
import accessImg from "./frontaend/assets/images/access.jpg";
import outlookImg from "./frontaend/assets/images/outlook.jpg";
import "./Informatique.css";
import "./Inscriptioninfo.css"; 

function Informatique() {
  
  const logiciels = [
    { name: "Word", img: wordImg },
    { name: "Excel", img: excelImg },
    { name: "PowerPoint", img: pptImg },
    { name: "Access", img: accessImg },
    { name: "Outlook", img: outlookImg },
  ];

 
  return (
    <div>
      <Menu />

      <section
        className="info-hero"
        style={{ backgroundImage: `url(${infoImg})` }}
      >
        <div className="info-overlay">
          <h1>Formation Informatique & Bureautique</h1>
          <p>Développez vos compétences sur Microsoft Office.</p>
        </div>
      </section>

      <section className="info-about">
        <h2>Logiciels Enseignés</h2>
        <div className="logiciels-grid">
          {logiciels.map((l, i) => (
            <div className="logiciel-card" key={i}>
              <img src={l.img} alt={l.name} />
              <h3>{l.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="info-objectives">
        <h2>Objectifs</h2>
        <div className="objectives-cards">
          <div className="objective-card">
            <h3>Maîtriser les logiciels</h3>
            <p>Word, Excel, PowerPoint, Access, Outlook</p>
          </div>
          <div className="objective-card">
            <h3>Compréhension informatique</h3>
            <p>Bases de l’informatique et systèmes d’exploitation.</p>
          </div>
          <div className="objective-card">
            <h3>Pratique professionnelle</h3>
            <p>Appliquer les outils dans un contexte professionnel.</p>
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

export default Informatique;