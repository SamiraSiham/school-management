import { Link } from "react-router-dom";
import student from "../pictures/graduated.png";
import prof from "../pictures/teacher.png";
import admin from "../pictures/administrator.png";
import candidat from "../pictures/candidate.png";
export default function Inscription() {
    return (
        <div className="container d-flex mt-5">
            <div className="card mx-auto" style={{ width: "25rem" }}>
                <img src={prof} className="card-img-top" alt="Logo d'un prof" />
                <div className="card-body">
                    <h5 className="card-title">Enseignant</h5>
                    <p className="card-text">
                        Clickez dessous pour s'inscrire comme Enseignant
                    </p>
                    <Link to="/login-prof" className="btn btn-primary">
                        S'inscrire
                    </Link>
                </div>
            </div>
            <div className="card mx-auto" style={{ width: "25rem" }}>
                <img
                    src={student}
                    className="card-img-top"
                    alt="Logo d'un etudiant"
                />
                <div className="card-body">
                    <h5 className="card-title">Etudiant</h5>
                    <p className="card-text">
                        Clickez dessous pour s'inscrire comme Etudiant
                    </p>
                    {/* <Link
                        to="/nouvelle-inscription-student"
                        className="btn btn-primary"
                    > */}
                    <Link to="/login-etudiant" className="btn btn-primary">
                        S'inscrire
                    </Link>
                </div>
            </div>
            {/* <div className="card mx-auto" style={{ width: "25rem" }}>
                <img src={candidat} className="card-img-top" alt="Logo d'un etudiant" />
                <div className="card-body">
                    <h5 className="card-title">Candidat</h5>
                    <p className="card-text">
                        Clickez dessous pour s'inscrire comme Candidat
                    </p>
                    <Link to="/login-candidat" className="btn btn-primary">
                        S'inscrire
                    </Link>
                </div>
            </div> */}
            <div className="card mx-auto" style={{ width: "25rem" }}>
                <img src={admin} className="card-img-top" alt="Logo d'un etudiant" />
                <div className="card-body">
                    <h5 className="card-title">Admin</h5>
                    <p className="card-text">
                        Clickez dessous pour s'inscrire comme Admin
                    </p>
                    <Link to="/login-etudiant" className="btn btn-primary">
                        S'inscrire
                    </Link>
                </div>
            </div>
        </div>
    );
}
