import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./frontaend/Accueil";
import Contact from "./frontaend/Contact";
import Informatique from "./Informatique";
import Prescolaire from "./Prescolaire";
import PackSage from "./PackSage";
import Inscriptioninfo from "./Inscriptioninfo";
import Langues from "./Langues";
import Allemand from "./Allemand";
import Anglais from "./Anglais";
import Francais from "./Francais";
import Espagnol from "./Espagnol";
import Inscriptionlang from "./Inscriptionlang";
import Cuisine from "./Cuisine";
import Soutien from "./Soutien";
import Marketing from "./Marketing";
import Logistique from "./Logistique";
import Formation from "./frontaend/Formations";
import AdminLogin from "./frontaend/AdminLogin";
import AdminDashboard from "./frontaend/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/informatique" element={<Informatique />} />
        <Route path="/prescolaire" element={<Prescolaire />} />
        <Route path="/packsage" element={<PackSage />} />
        <Route path="/inscription" element={<Inscriptioninfo />} />
        <Route path="/langues" element={<Langues />} />
        <Route path="/langues/allemand" element={<Allemand />} />
        <Route path="/langues/anglais" element={<Anglais />} />
        <Route path="/langues/francais" element={<Francais />} />
        <Route path="/langues/espagnol" element={<Espagnol />} />
        <Route path="/inscriptionlang/:formation" element={<Inscriptionlang />} />
        <Route path="/Cours de Cuisine" element={<Cuisine />} />
        <Route path="/Cours" element={<Soutien />} />
        <Route path="/Marketing Digital" element={<Marketing />} />
        <Route path="/Manutention & Logistique" element={<Logistique />} />
        <Route path="/formations" element={<Formation />} />
        
      
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/*import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./frontaend/Accueil";
import Contact from "./Contact";
import Informatique from "./Informatique";
import Prescolaire from "./Prescolaire";
import PackSage from "./PackSage";
import Inscriptioninfo from"./Inscriptioninfo";
import Langues from"./Langues";
import Allemand from"./Allemand";
import Anglais from"./Anglais";
import Francais from"./Francais";
import Espagnol from"./Espagnol";
import Inscriptionlang from"./Inscriptionlang";
import Cuisine from "./Cuisine";
import Soutien from "./Soutien";
import Marketing from "./Marketing";
import Logistique from "./Logistique";
import Formation from "./frontaend/Formations";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/informatique" element={<Informatique />} />
        <Route path="/prescolaire" element={<Prescolaire />} />
        <Route path="/packsage" element={<PackSage />} />
         <Route path="/inscription" element={<Inscriptioninfo />} />
         <Route path="/langues" element={<Langues/>} />
         <Route path="/langues/allemand" element={<Allemand />} />
          <Route path="/langues/anglais" element={<Anglais />} />
          <Route path="/langues/francais" element={<Francais />} />
          <Route path="/langues/espagnol" element={<Espagnol />} />
          <Route path="/inscriptionlang/:formation" element={<Inscriptionlang />} />
          <Route path="/Cours de Cuisine" element={<Cuisine/>} />
          <Route path="/Cours" element={<Soutien/>} />
           <Route path="/Marketing Digital" element={<Marketing/>} />
           <Route path="/Manutention & Logistique" element={<Logistique/>} />
           <Route path="/formations" element={<Formation/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;*/