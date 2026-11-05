import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [inscriptions, setInscriptions] = useState([]);
  const [editData, setEditData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) return navigate("/admin-login");
    loadData(token);
  }, []);

  const loadData = async (token) => {
    setLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:8000/api/admin-inscriptions.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      const data = await res.json();

      if (data.success) {
        setInscriptions(data.inscriptions);
      } else {
        alert( "Erreur serveur");
      }
    } catch (err) {
      alert("Erreur serveur");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("admin_token");
    navigate("/admin-login");
  };

  const filtered = inscriptions.filter(
    (i) =>
      i.nomcomplet.toLowerCase().includes(search.toLowerCase()) ||
      i.email.toLowerCase().includes(search.toLowerCase()) ||
      i.choix_formation.toLowerCase().includes(search.toLowerCase())
  );

  const confirmDelete = async () => {
   const token = localStorage.getItem("admin_token");
    const res = await fetch("http://127.0.0.1:8000/api/admin-delete.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, id: deleteId }),
    });
    const data = await res.json();

    if (data.success) {
      setInscriptions(inscriptions.filter((i) => i.id !== deleteId));
      setDeleteId(null);
    }
  };

  const handleUpdate = async () => {
    const token = localStorage.getItem("admin_token");

    try {
      const res = await fetch("http://127.0.0.1:8000/api/admin-update.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...editData, token }),
      });

      const data = await res.json();

      if (data.success) {
        setEditData(null);
        loadData(token);
      }
    } catch {
      alert("Erreur serveur");
    }
  };

  const closeModal = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setDeleteId(null);
      setEditData(null);
    }
  };

  if (loading) return <h2>Chargement...</h2>;

  return (
    <div className="dashboard">
      <div className="header">
        <h1> Admin Dashboard</h1>
        <div className="header-actions">
          <span className="stats">Total: {inscriptions.length}</span>
          <button className="refresh-btn" onClick={() => loadData(localStorage.getItem("admin_token"))}>
            Actualiser
          </button>
          <button className="logout-btn" onClick={logout}>Déconnexion</button>
        </div>
      </div>

      <div className="top-actions">
        <input type="text" placeholder=" Recherche (nom, email, formation)..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
             }}
          className="search-input"/>
  
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom Complet</th>
              <th>Email</th>
              <th>Téléphone</th>
              <th>Formation</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.nomcomplet}</td>
                  <td>{item.email}</td>
                  <td>{item.telephone}</td>
                  <td>{item.choix_formation}</td>
                  <td className="actions">
                    <button className="edit-btn" onClick={() => setEditData(item)}   title="Modifier">  Modifier</button>
                    <button className="delete-btn"  onClick={() => setDeleteId(item.id)} title="Supprimer"> Supprimer</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-data">
                  Aucun résultat trouvé
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {deleteId !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <div className="modal-header">
              <h3> Confirmer la suppression</h3>
              <button className="close-btn" onClick={() => setDeleteId(null)}>×</button>
            </div>
            <p>Voulez-vous vraiment supprimer cet enregistrement ? Cette action est irréversible.</p>
            <div className="modal-buttons">
              <button className="delete-confirm-btn" onClick={confirmDelete} disabled={loading}>
                {loading ? "Suppression..." : " Oui, supprimer"}
              </button>
              <button className="cancel-btn" onClick={() => setDeleteId(null)} disabled={loading}>
                 Annuler
              </button>
            </div>
          </div>
        </div>
      )}
      {editData && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <div className="modal-header">
              <h3> Modifier l'inscription #{editData.id}</h3>
              <button className="close-btn" onClick={() => setEditData(null)}>×</button>
            </div>
            <div className="form-grid">
              <input value={editData.nomcomplet} onChange={(e) => setEditData({ ...editData, nomcomplet: e.target.value })}
                placeholder="Nom complet *"/>
              <input value={editData.email} onChange={(e) => setEditData({ ...editData, email: e.target.value })} placeholder="Email *"
                type="email"/>
              <input value={editData.telephone} onChange={(e) => setEditData({ ...editData, telephone: e.target.value })} placeholder="Téléphone"/>
              <input value={editData.choix_formation} onChange={(e) => setEditData({ ...editData, choix_formation: e.target.value })} placeholder="Formation"/>
            </div>
            <div className="modal-buttons">
              <button className="save-btn" onClick={handleUpdate} disabled={loading}>
                {loading ? "Enregistrement..." : " Enregistrer"}
              </button>
              <button className="cancel-btn" onClick={() => setEditData(null)} disabled={loading}> Annuler</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;