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
export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/nouvelle-inscription" element={<Inscription />} />
      <Route path="/nouvelle-inscription-prof" element={<InscriptionProf />} />
      <Route path="/nouvelle-inscription-student" element={<InscriptionStudent />} />
      <Route path="/espace-etudiant" element={<EspaceEtudiant />} />
      <Route path="/espace-enseignant" element={<EspaceEnseignant />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/setcalendar" element={<SetCalendar />} />
    </Routes>
  );
}
