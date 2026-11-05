import { useState } from 'react';
 import { useNavigate } from 'react-router-dom'; 
 import './AdminLogin.css';
  function AdminLogin() { 
    const [formData, setFormData] = useState({ email: '', password: '' });
   const [error, setError] = useState(''); 
   const navigate = useNavigate(); 
   const handleChange = (e) => { setFormData({...formData, [e.target.name]: e.target.value}); }; 
   const handleSubmit = async (e) => { e.preventDefault(); try { 
    const res = await fetch('http://127.0.0.1:8000/api/admin-login.php', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) }); 
   const data = await res.json(); console.log(data); 
   if (data.success) { localStorage.setItem('admin_token', data.token); navigate('/admin-dashboard'); } 
   else { setError(data.message); } } catch { setError('Erreur serveur'); } }; 
   return (
     <div className="login-page"> <div className="login-box"> 
     <h2> Admin Login</h2> {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}> <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
       <input type="password" name="password" placeholder="Password" onChange={handleChange} required /> 
       <button type="submit">Login</button> </form> </div> </div> ); } 
       export default AdminLogin;








/*import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

function AdminLogin() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://127.0.0.1:8000/api/admin-login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      console.log(data);

      if (data.success) {
        localStorage.setItem('admin_token', data.token);
        navigate('/admin-dashboard');
      } else {
        setError(data.message);
      }

    } catch {
      setError('Erreur serveur');
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>🔐 Admin Login</h2>
        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;*/











 