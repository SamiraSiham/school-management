import { Link } from "react-router-dom";
import logo from "../pictures/logo.png";
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Bootstrap" width="50" height="50" />
                    ENS-Rabat
                </Link>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                to="/nouvelle-inscription"
                            >
                                Inscription
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                to="/espace-etudiant"
                            >
                                Espace Etudiant
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                to="/espace-enseignant"
                            >
                                Espace Enseignant
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
