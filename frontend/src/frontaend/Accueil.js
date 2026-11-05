import { useEffect } from "react";
import Menu from "./Menu";
import "./Accueil.css";
import { Link } from "react-router-dom";
import logo from"./assets/images/logo.jpeg";
function Accueil() {

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          entry.target.classList.add("show");
        }
      });
    });

    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <div>
      <Menu />
     <section
  className="hero-acu"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')" }}>
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="badge">
            🎓 Centre de formation professionnelle
          </span>

          <h1>
            Le leader des <br />
            <span className="highlight">formations professionnelles</span>
          </h1>

          <p>
            Développez vos compétences avec des formations modernes et pratiques.
          </p>

            <div className="hero-buttons">
            <Link to="/inscription" className="btn-hero">
              REJOINDRE MAINTENANT
            </Link>
          
             
            

            <a href="#formations" className="btn-secondary">
              VOIR FORMATIONS
            </a>
          </div>
        </div>

      </section>
      <section id="formations" className="section fade-in">
        <h2>Nos Formations</h2>

        <div className="formations-grid-f">

          <div className="formation-card-g">
            <h3>Informatique</h3>
            <p>Développement web et bureautique</p>
          </div>

          <div className="formation-card-g">
            <h3>Langues</h3>
            <p>Français, Anglais, Espagnol</p>
          </div>

          <div className="formation-card-g">
            <h3>Cuisine</h3>
            <p>Formation professionnelle</p>
          </div>

          <div className="formation-card-g">
            <h3>Marketing</h3>
            <p>Réseaux sociaux et publicité</p>
          </div>

          <div className="formation-card-g">
            <h3>Logistique</h3>
            <p>Gestion et transport</p>
          </div>

          <div className="formation-card-g">
            <h3>Préscolaire</h3>
            <p>Éducation des enfants</p>
          </div>
          <div className="formation-card-g">
            <h3>Soutien</h3>
            <p>Niveaux & Matières</p>
          </div>
          <div className="formation-card-g">
            <h3>PackSage</h3>
            <p>Comptabilité et Gestion </p>
          </div>

        </div>
      </section>
       {/* POURQUOI NOUS */}
      <section className="section dark fade-in">
        <h2>Pourquoi nous choisir ?</h2>

        <div className="advantages">

          <div className="adv-card">⭐ Formateurs experts</div>
          <div className="adv-card">🎓 Diplômes certifiés</div>
          <div className="adv-card">📈 Insertion professionnelle</div>

        </div>
      </section>
      {/* CONTACT */}
      <section id="contact" className="footer-section fade-in">

        <div className="footer-container">

          <div className="footer-col">
             <div className="logo-df">
  <img src={logo} alt="ISCOP Logo" />
</div>
            <p>Institut de Soutien Coaching et Orientation / Privé.</p>
          </div>

          <div className="footer-col">
            <h4>CONTACT</h4>
            <p>📞 +212 661 350450 </p>
              <p>📞+212 607 158182</p>
            <p>✉  info@iscopsup.com</p>
          </div>

        </div>

        <div className="footer-bottom">
        © 2018 - 2019 ISCOP All Rights Reserved. - Powered By SG Digital
        </div>

      </section>


    </div>
  );
}

export default Accueil;



/*import { useEffect } from "react";
import Menu from "./Menu";
import "./Accueil.css";

function Accueil() {

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          entry.target.classList.add("show");
        }
      });
    });

    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <div>
      <Menu />*/

      {/* HERO */}
      /*<section className="hero-acu">
        <div className="hero-content">

          <span className="badge">
            🎓 Centre de formation professionnelle
          </span>

          <h1>
            Construisez votre <br />
            <span className="highlight">avenir professionnel</span>
          </h1>

          <p>
            Des formations modernes pour développer vos compétences
            et réussir votre carrière.
          </p>

          <div className="hero-buttons">
            <a href="#formations" className="btn-primary">
              Nos formations
            </a>

            <a href="#contact" className="btn-secondary">
              Contact
            </a>
          </div>

        </div>
      </section>*/

      {/* FORMATIONS */}
      /*<section id="formations" className="section fade-in">
        <h2>Nos Formations</h2>

        <div className="formations-grid">

          <div className="formation-card">💻
            <h3>Informatique</h3>
            <p>Développement web et bureautique</p>
          </div>

          <div className="formation-card">🌍
            <h3>Langues</h3>
            <p>Français, Anglais, Espagnol</p>
          </div>

          <div className="formation-card">👨‍🍳
            <h3>Cuisine</h3>
            <p>Formation professionnelle</p>
          </div>

          <div className="formation-card">📊
            <h3>Marketing</h3>
            <p>Réseaux sociaux et publicité</p>
          </div>

          <div className="formation-card">📦
            <h3>Logistique</h3>
            <p>Gestion et transport</p>
          </div>

          <div className="formation-card">👶
            <h3>Préscolaire</h3>
            <p>Éducation des enfants</p>
          </div>

        </div>
      </section>*/

      {/* POURQUOI NOUS */}
      /*<section className="section dark fade-in">
        <h2>Pourquoi nous choisir ?</h2>

        <div className="advantages">

          <div className="adv-card">⭐ Formateurs experts</div>
          <div className="adv-card">🎓 Diplômes certifiés</div>
          <div className="adv-card">📈 Insertion professionnelle</div>

        </div>
      </section>*/

      {/* CONTACT */}
      /*<section id="contact" className="footer-section fade-in">

        <div className="footer-container">

          <div className="footer-col">
            <h3 className="logo">Centre<span>Pro</span></h3>
            <p>Votre partenaire pour réussir votre carrière.</p>
          </div>

          <div className="footer-col">
            <h4>CONTACT</h4>
            <p>📞 +212 6 xx xx xx xx</p>
            <p>✉ contact@centre.ma</p>
          </div>

        </div>

        <div className="footer-bottom">
          © 2025 CentrePro
        </div>

      </section>

    </div>
  );
}

export default Accueil;*/