import { useState } from "react";
import Menu from "./frontaend/Menu";
import "./Inscriptioninfo.css";

function Inscription() {
  const [formData, setFormData] = useState({
    nomcomplet: "",
    email: "",
    telephone: "",
    choix_formation: "",
    message: ""
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(""); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
const response = await fetch("http://127.0.0.1:8000/api/inscription.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        alert("Inscription envoyée avec succès !");
        setSent(true);
        setFormData({
          nomcomplet: "",
          email: "",
          telephone: "",
          choix_formation: "",
          message: ""
        });
      } else {
        setError(data.message || "Erreur lors de l'inscription");
      }
    } catch (error) {
      console.error("Erreur:", error);
      setError("Erreur de connexion. Vérifiez que Laravel tourne sur port 8000");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div>
        <Menu />
        <div className="inscription-page">
          <div className="inscription-container">
            <div className="success-container">
              <h2> Inscription confirmée !</h2>
              <p>Nous vous contacterons bientôt.</p>
              <button onClick={() => setSent(false)} className="btn-secondary">
                Nouvelle inscription
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Menu />
      <div className="inscription-page">
        <div className="inscription-container">
          <div className="inscription-form">
            <h2>Inscription à la formation</h2>
            {error && <div className="error-msg">{error}</div>}
            <form onSubmit={handleSubmit}>
              <input type="text" name="nomcomplet" value={formData.nomcomplet} onChange={handleChange} placeholder="Nom complet *"required/>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email *" required/>
              <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="Téléphone * "required/>
              <select name="choix_formation" value={formData.choix_formation} onChange={handleChange} required>
                <option value="">Choisir la formation *</option>
                <option value="Informatique">Informatique</option>
                <option value="Langues">Langues</option>
                <option value="Marketing Digital">Marketing Digital</option>
                <option value="Cuisine">Cuisine</option>
                <option value="Pack Sage">Pack Sage</option>
              </select>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message (optionnel)" rows="4"/>
              <button type="submit" disabled={loading}>
                {loading ? "Envoi..." : "S'inscrire"}
              </button>
            </form>
          </div>
          <div className="inscription-image"></div>
        </div>
      </div>
    </div>
  );
}

export default Inscription;