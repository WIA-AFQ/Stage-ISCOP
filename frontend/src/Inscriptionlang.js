import { useParams } from "react-router-dom";
import { useState } from "react";
import Menu from "./frontaend/Menu";
import "./InscriptionLang.css";

function Inscriptionlang() {
  const { formation } = useParams();
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    niveau: "",
  });

  const [success, setSuccess] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données envoyées :", {
      ...formData,
      formation,
    });
    setSuccess(true);
  };

  return (
    <div>
      <Menu />
      <section className="inscription-hero">
        <h1>Inscription - {formation}</h1>
      </section>
      <section className="form-section">
        {success ? (
          <div className="success-box">
           Votre inscription pour <strong>{formation}</strong> a été enregistrée !
          </div>
        ) : (
          <form className="inscription-form" onSubmit={handleSubmit}>
            <input type="text" name="nom" placeholder="Nom" required onChange={handleChange}/>

            <input type="text" name="prenom" placeholder="Prénom" required onChange={handleChange}/>

            <input type="email" name="email" placeholder="Email" required onChange={handleChange} />

            <input type="tel"  name="telephone"  placeholder="Téléphone" required onChange={handleChange}  />
            <select name="niveau" required onChange={handleChange}>
              <option value="">Choisissez votre niveau</option>
              <option value="Débutant">Débutant</option>
              <option value="Intermédiaire">Intermédiaire</option>
              <option value="Avancé">Avancé</option>
            </select>
            <button type="submit"> Valider l'inscription </button>
          </form>
        )}
      </section>
    </div>
  );
}

export default Inscriptionlang;