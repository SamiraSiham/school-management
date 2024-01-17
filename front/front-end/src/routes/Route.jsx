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
import LoginEtudiant from "../Pages/LoginEtudiant";
export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/nouvelle-inscription" element={<Inscription />} />
      <Route path="/nouvelle-inscription-prof" element={<InscriptionProf />} />
      <Route path="/login-prof" element={<LoginProf />} />
      <Route path="/login-etudiant" element={<LoginEtudiant />} />
      <Route path="/prof-home" element={<Home2 />} />
      <Route path="/etudiant-home" element={<EtudiantHome />} />
      <Route path="/nouvelle-inscription-student" element={<InscriptionStudent />} />
      <Route path="/espace-etudiant" element={<EspaceEtudiant />} />
      <Route path="/espace-enseignant" element={<EspaceEnseignant />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/setcalendar" element={<SetCalendar />} />
    </Routes>
  );
}
