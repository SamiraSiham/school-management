import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Inscription from "../Pages/Inscription";
import InscriptionStudent from "../Pages/InscriptionStudent";
import InscriptionProf from "../Pages/InscriptionProf";
import EspaceEtudiant from "../Pages/EspaceEtudiant";
import EspaceEnseignant from "../Pages/EspaceEnseignant";
import Calendar from "../Components.jsx/Calendar";
import SetCalendar from "../Pages/SetCalendar";
import LoginProf from "../Pages/LoginProf";
import Home2 from "../Pages/Prof/Home";
import EtudiantHome from "../Pages/Etudiant/EtudiantHome";
import AdminHome from "../Pages/Admin/AdminHome";
import LoginEtudiant from "../Pages/LoginEtudiant";
import LoginAdmin from "../Pages/LoginAdmin";
import LoginCandidat from "../Pages/LoginCandidat";
import ListeEtudiants from "../Pages/Admin/ListeEtudiants";
import ListeEnseignant from "../Pages/Admin/ListeEnseignant";
import ListeCandidats from "../Pages/Admin/ListeCandidats";
import EditEtudiant from "../Pages/Admin/crud-etudiants/EditEtudiant";
export default function MyRoutes() {
  return (
    <Routes>
      {/* basic routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/nouvelle-inscription" element={<Inscription />} />
      <Route path="/nouvelle-inscription-prof" element={<InscriptionProf />} />
      <Route path="/nouvelle-inscription-student" element={<InscriptionStudent />} />

    {/* login routes */}
      <Route path="/login-prof" element={<LoginProf />} />
      <Route path="/login-etudiant" element={<LoginEtudiant />} /> 
      <Route path="/login-admin" element={<LoginAdmin />} /> 
      {/* <Route path="/login-candidat" element={<LoginCandidat />} />  */}
      
      
      {/* etudiants */}
      <Route path="/etudiant-home" element={<EtudiantHome />} />
      <Route path="/espace-etudiant" element={<EspaceEtudiant />} />
      
      {/* enseignants */}
      <Route path="/prof-home" element={<Home2 />} />
      <Route path="/espace-enseignant" element={<EspaceEnseignant />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/setcalendar" element={<SetCalendar />} />


      {/* admins */}
      <Route path="/admin-home" element={<AdminHome />} />
      <Route path="/liste-etudiants" element={<ListeEtudiants />} />
      <Route path="/liste-enseignant" element={< ListeEnseignant/>} />
      <Route path="/liste-candidats" element={< ListeCandidats/>} />

      
    </Routes>
  );
}
