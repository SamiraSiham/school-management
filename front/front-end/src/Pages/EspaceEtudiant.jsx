import React from "react";
import img1 from "../pictures/enslogo.png";
import img2 from "../pictures/img4.png";
import img3 from "../pictures/img1.jpeg";
import { Link } from "react-router-dom";
export default function EspaceEtudiant() {
    return (
        <div className="container mt-5">
            <h1 className="text-center">Espace Etudiant</h1>
            <div className="container mt-5">
                <div className="card text-white bg-success">
                    <div className="card-body">
                        <h5 className="card-title">Nos Filieres </h5>
                        <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
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
                    <Link to="/" className="btn btn-success ">
                        Go To
                    </Link>
                </div>
            </div>

            <div className="container mt-5">
                <div className="card text-white bg-success">
                    <div className="card-body">
                        <h5 className="card-title">Inscription</h5>
                        <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                        </p>
                        <p className="card-text">
                            <small className="text-muted"></small>
                        </p>
                    </div>
                    <img
                        src={img2}
                        className="card-img-top"
                        alt="Etudiant images"
                    />
                    <Link
                        to="/nouvelle-inscription-student"
                        className="btn btn-success "
                    >
                        Go To
                    </Link>
                </div>
            </div>
            <div className="container mt-5">
                <div className="card text-white bg-success">
                    <div className="card-body">
                        <h5 className="card-title">Emploi du temps</h5>
                        <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                        </p>
                        <p className="card-text">
                            <small className="text-muted"></small>
                        </p>
                    </div>
                    <img
                        src={img3}
                        className="card-img-top"
                        alt="Etudiant images"
                    />
                    <Link to="/calendar" className="btn btn-success ">
                        Go To
                    </Link>
                </div>
            </div>
        </div>
    );
}
