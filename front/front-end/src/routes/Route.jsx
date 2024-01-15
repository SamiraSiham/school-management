import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Inscription from "../Pages/Inscription";
import InscriptionStudent from "../Pages/InscriptionStudent";
import InscriptionProf from "../Pages/InscriptionProf";
export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/nouvelle-inscription" element={<Inscription />} />
      <Route path="/nouvelle-inscription-prof" element={<InscriptionProf />} />
      <Route path="/nouvelle-inscription-student" element={<InscriptionStudent />} />
    </Routes>
  );
}
