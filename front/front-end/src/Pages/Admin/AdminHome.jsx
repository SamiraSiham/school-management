import React from "react";
// import enslogo from "../../pictures/enslogo.png";
// import logo from "../../pictures/logo.png";
import { Link } from "react-router-dom";
import img1 from "../../pictures/enslogo.png";
export default function AdminHome() {
    return (
        <div className="container mt-5">
            {/* <div className="card text-bg-dark">
        <img
          src={enslogo}
          className="card-img"
          alt="Logo de ENS"
        />
      </div> */}
            <div className="card text-white bg-success">
                <div className="card-body">
                    <h5 className="card-title">Liste d'enseignants </h5>
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
            <br />
            <div className="card text-white bg-success">
                <div className="card-body">
                    <h5 className="card-title">Liste d'etudiants </h5>
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
            <br />
            <div className="card text-white bg-success">
                <div className="card-body">
                    <h5 className="card-title">Liste de candidats </h5>
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
    );
}
