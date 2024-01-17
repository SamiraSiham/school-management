import React from "react";
// import enslogo from "../pictures/enslogo.png";
import logo from "../pictures/logo.png";
import CarouselPage from "../Components.jsx/CarouselPage";
export default function Home() {
    return (
        <div className="container mt-5">
            {/* <div className="card text-bg-dark">
                <img
                    src={enslogo}
                    className="card-img"
                    alt="Logo de ENS"
                    style={{ opacity: "0.7" }}
                />
                <div className="card-img-overlay text-center text-dark">
                    <h5 className="card-title">Ecole Normale Superieur</h5>
                    <p className="card-text">
                        Cet espace est dedie aux annonces
                    </p>
                </div>
                
            </div> */}
            <CarouselPage />

            <div className="container d-flex">
                <div
                    className="card mb-3 mt-3 mx-3"
                    style={{ maxWidth: "540px" }}
                >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={logo}
                                className="img-fluid rounded-start"
                                alt="logo "
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">
                                    Licence Professionnelle d'enseignement
                                </h5>
                                <p className="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="card mb-3 mt-3 mx-3"
                    style={{ maxWidth: "540px" }}
                >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={logo}
                                className="img-fluid rounded-start"
                                alt="logo "
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Concours d'acces</h5>
                                <p className="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="card mb-3 mt-3 mx-3"
                    style={{ maxWidth: "540px" }}
                >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={logo}
                                className="img-fluid rounded-start"
                                alt="logo "
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Soutenances</h5>
                                <p className="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container d-flex">
                <div
                    className="card mb-3 mt-3 mx-3"
                    style={{ maxWidth: "540px" }}
                >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={logo}
                                className="img-fluid rounded-start"
                                alt="logo "
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Resultat Master</h5>
                                <p className="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="card mb-3 mt-3 mx-3"
                    style={{ maxWidth: "540px" }}
                >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={logo}
                                className="img-fluid rounded-start"
                                alt="logo "
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">
                                    Planing des exames finaux
                                </h5>
                                <p className="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="card mb-3 mt-3 mx-3"
                    style={{ maxWidth: "540px" }}
                >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={logo}
                                className="img-fluid rounded-start"
                                alt="logo "
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Autres</h5>
                                <p className="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
