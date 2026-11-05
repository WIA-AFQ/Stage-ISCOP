import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import "./Formations.css";

import cuisineImg from "./assets/images/cuisiine.jpeg";
import infoImg from "./assets/images/info.png";
import languesImg from "./assets/images/languees.jpeg";
import prescoImg from "./assets/images/presscolaire.jpeg";
import packImg from "./assets/images/sage.png";
import marketingImg from "./assets/images/marr.png";
import logistiqueImg from "./assets/images/loggsitique.jpeg";
import coursenf from "./assets/images/cours.jpeg";

function Formation() {
  const formations = [
    {
      title: "Informatique",
      desc: "Bureautique, développement web et programmation",
      image: infoImg,
      link: "/informatique"
    },
    {
      title: "Éducatrices Préscolaire",
      desc: "Formation pour travailler avec les enfants",
      image: prescoImg,
      link: "/prescolaire"
    },
    {
      title: "Pack Sage",
      desc: "Gestion et comptabilité avec Sage",
      image: packImg,
      link: "/packsage"
    },
    {
      title: "Langues",
      desc: "Anglais, Français, Espagnol",
      image: languesImg,
      link: "/Langues"
    },
    {
      title: "Marketing Digital",
      desc: "Publicité, réseaux sociaux et SEO",
      image: marketingImg,
      link: "/Marketing Digital"
    },
    {
      title: "Cours de Cuisine",
      desc: "Cuisine professionnelle avec chefs expérimentés",
      image: cuisineImg,
      link: "/Cours de Cuisine"
    },
    {
      title: "Logistique",
      desc: "Gestion des stocks et manutention",
      image: logistiqueImg,
      link: "/Manutention & Logistique"
    },
    {
      title: "Soutien Scolaire",
      desc: "Cours pour enfants et soutien scolaire",
      image: coursenf,
      link: "/Cours"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % formations.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [formations.length]);

  return (
    <div className="formations-page">
      <Menu />
      
      <section className="hero-section">
        <div className="hero-slider">
          {formations.map((formation, index) => (
            <div
              key={`hero-${index}`}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${formation.image})` }}
            >
              <div className="hero-overlay" />
              <div className="hero-content">
                
                <h1 className="hero-title">{formation.title}</h1>
                <p className="hero-desc">{formation.desc}</p>
                <Link to={formation.link} className="hero-cta">
                  Découvrir → 
                </Link>
              </div>
            </div>
          ))}
          <div className="slider-indicators">
            {formations.map((_, index) => (
              <button
                key={`indicator-${index}`}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="formations-grid">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nos Formations Disponibles</h2>
            <p className="section-subtitle">Toutes nos formations certifiantes en un clic</p>
          </div>
          
          <div className="formations-container">
            {formations.map((formation, index) => (
              <Link 
                key={`card-${index}`} 
                to={formation.link} 
                className="formation-card"
              >
                <div className="card-image-container">
                  <img 
                    src={formation.image} 
                    alt={formation.title}
                    className="card-image"
                  />
                  <div className="card-overlay">
                    <svg className="plus-icon" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeWidth="2" d="M12 5v14M5 12h14"/>
                    </svg>
                  </div>
                </div>
                <div className="card-content">
                  <h3>{formation.title}</h3>
                  <p>{formation.desc}</p>
                  <div className="card-cta">
                    <span>Découvrir</span>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Formation;








/*import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import "./Formations.css";

// images
import cuisineImg from "./assets/images/cuisiine.jpeg";
import infoImg from "./assets/images/infformatique.jpg";
import languesImg from "./assets/images/languees.jpeg";
import prescoImg from "./assets/images/presscolaire.jpeg";
import packImg from "./assets/images/sage.png";
import marketingImg from "./assets/images/marketing.jpg";
import logistiqueImg from "./assets/images/loggsitique.jpeg";
import coursenf from "./assets/images/cours.jpeg";

function Formation() {

  const slides = [
    {
      img: cuisineImg,
      title: "Cours de Cuisine",
      desc: "Apprenez la cuisine professionnelle avec des chefs expérimentés."
    },
    {
      img: infoImg,
      title: "Informatique",
      desc: "Bureautique, développement web et programmation."
    },
    {
      img: languesImg,
      title: "Langues",
      desc: "Apprenez Anglais, Français et Espagnol."
    },
    {
      img: prescoImg,
      title: "Éducatrices Préscolaire",
      desc: "Formation spécialisée pour travailler avec les enfants."
    },
    {
      img: packImg,
      title: "Pack Sage",
      desc: "Gestion et comptabilité avec le logiciel Sage."
    },
    {
      img: marketingImg,
      title: "Marketing Digital",
      desc: "Publicité, réseaux sociaux et SEO."
    },
    {
      img: logistiqueImg,
      title: "Logistique",
      desc: "Gestion des stocks et manutention."
    },
    {
      img: coursenf,
      title: "Cours",
      desc: "Cours pour enfants et soutien scolaire."
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);
  const sections = [
  { title: "Cours de Cuisine", desc: "Apprenez la cuisine professionnelle", image: cuisineImg },
  { title: "Informatique", desc: "Bureautique, développement web et programmation", image: infoImg },
  { title: "Langues", desc: "Anglais, Français, Espagnol", image: languesImg },
  { title: "Éducatrices Préscolaire", desc: "Formation pour travailler avec les enfants", image: prescoImg },
  { title: "Pack Sage", desc: "Gestion et comptabilité avec Sage", image: packImg },
  { title: "Marketing Digital", desc: "Publicité, réseaux sociaux et SEO", image: marketingImg },
  { title: "Manutention & Logistique", desc: "Gestion des stocks et manutention", image: logistiqueImg },
  { title: "Soutien Scolaire", desc: "Cours pour enfants et soutien scolaire", image: coursenf },
];

  return (
    <div>

      <Menu />
*/
      {/* HERO SLIDER */}

    /*  <div className="hero-slider">

        {slides.map((slide, i) => (

          <div
            key={i}
            className={`hero-slide ${i === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.img})` }}
          >

            <div className="hero-content">

              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>

              
            </div>

          </div>

        ))}

      </div>
*/
     {/* Cards Grid */} 
    /* <div className="sections"> 
        {sections.map((s, i) => ( s.title === "Informatique" ?
             ( <Link to="/informatique" key={i} className="card-link"> 
        <div className="card"> 
            <img src={s.image} alt={s.title} /> 
        <h3>{s.title}</h3>
         <p>{s.desc}</p> </div> </Link> 
        ) : s.title === "Éducatrices Préscolaire" ? 
        ( <Link to="/prescolaire" key={i} className="card-link"> 
        <div className="card"> 
            <img src={s.image} alt={s.title} />
         <h3>{s.title}</h3> 
         <p>{s.desc}</p> </div> </Link> 
         ) : s.title === "Pack Sage" ? 
         ( <Link to="/packsage" key={i} className="card-link">
          <div className="card"> <img src={s.image} alt={s.title} />
           <h3>{s.title}</h3> <p>{s.desc}</p> </div> </Link>
            ) : s.title === "Soutien Scolaire" ? 
            ( <Link to="/Cours" key={i} className="card-link"> 
            <div className="card">
                 <img src={s.image} alt={s.title} />
                  <h3>{s.title}</h3> <p>{s.desc}</p> 
                  </div> </Link> 
                  ) : s.title === "Manutention & Logistique" ? 
                  ( <Link to="/Manutention & Logistique" key={i} className="card-link">
                     <div className="card">
                         <img src={s.image} alt={s.title} /> 
                         <h3>{s.title}</h3> <p>{s.desc}</p> </div> </Link> 
                         ): s.title === "Cours de Cuisine" ? ( <Link to="/Cours de Cuisine" key={i} className="card-link"> 
                         <div className="card"> 
                            <img src={s.image} alt={s.title} />
                             <h3>{s.title}</h3> <p>{s.desc}</p> </div> </Link> 
                             ): s.title === "Marketing Digital" ? ( <Link to="/Marketing Digital" key={i} className="card-link"> 
                             <div className="card"> <img src={s.image} alt={s.title} /> <h3>{s.title}</h3>
                              <p>{s.desc}</p> </div> </Link> ): s.title === "Langues" ?
                               ( <Link to="/Langues" key={i} className="card-link"> <div className="card">
                                 <img src={s.image} alt={s.title} /> <h3>{s.title}</h3> <p>{s.desc}</p> </div> </Link>
                                  ) : ( <div className="card" key={i}> <img src={s.image} alt={s.title} />
                                   <h3>{s.title}</h3> <p>{s.desc}</p> </div>
                                   ) ))} </div>

       

      </div>

    
  );
}

export default Formation;*/