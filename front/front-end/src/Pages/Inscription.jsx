import { Link } from "react-router-dom";
import student from "../pictures/graduated.png";
import prof from "../pictures/teacher.png";
export default function Inscription() {
  return (
    <div className="container d-flex mt-5">
      <div className="card mx-auto" style={{ width: "25rem" }}>
        <img src={prof} className="card-img-top" alt="Logo d'un prof" />
        <div className="card-body">
          <h5 className="card-title">Professeur</h5>
          <p className="card-text">
            Clickez dessous pour s'inscrire comme Prof
          </p>
          <Link to="/nouvelle-inscription-prof" className="btn btn-primary">
            S'inscrire
          </Link>
        </div>
      </div>
      <div className="card mx-auto" style={{ width: "25rem" }}>
        <img src={student} className="card-img-top" alt="Logo d'un etudiant" />
        <div className="card-body">
          <h5 className="card-title">Etudiant</h5>
          <p className="card-text">
            Clickez dessous pour s'inscrire comme Etudiant
          </p>
          <Link to="/nouvelle-inscription-student" className="btn btn-primary">
            S'inscrire
          </Link>
        </div>
      </div>
    </div>
  );
}
