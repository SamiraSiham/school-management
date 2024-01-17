import React from "react";
import { Link } from "react-router-dom";
import img1 from "../pictures/img4.png";
export default function EspaceEnseignant() {
    return (
        <div className="container mt-5">
            <h1 className="text-center">Espace Enseignant</h1>
            <div className="container mt-5">
                <div className="card text-white bg-success">
                    <div className="card-body">
                        <h5 className="card-title">Emploi du temps</h5>
                        <p className="card-text">
                            Vous pouvez ajouter vos seance ici !
                        </p>
                        <p className="card-text">
                            <small className="text-muted"></small>
                        </p>
                    </div>
                    <img
                        src={img1}
                        className="card-img-top"
                        alt="Etudiant images"
                    />
                    <Link to="/setcalendar" className="btn btn-success ">
                        Go To
                    </Link>
                </div>
            </div>
        </div>
    );
}
