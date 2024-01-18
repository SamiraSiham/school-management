import { useState } from "react";
import Api from "../../Components.jsx/Api";
import Loading from "../../Components.jsx/Loading";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";


export default function InscriptionCandidat() {
    const navigate = useNavigate();
    const { http } = Api();
    const [loading, setLoading] = useState(true);
    const [candidat, setCandidat] = useState([]);

    const handleValidation = (e) => {
        e.preventDefault();
        http
            .post("/validate-students")
            .then((res) => {
                alert("success");
                navigate("/liste-etudiants");
                setLoading(false);

            })
    }

    useEffect(() => {
        http.get("/candidat").then((res) => {
            setLoading(false);
            // const res = res.data;
            // setEtudiant(res.data.etudiants)
            return res.data.candidats
        }).then((data) => {
            setCandidat(data)
        })
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header ">
                            <div className="row">
                                <div className="col-8">
                                    <h4 className="text-center">Liste Candidats</h4>
                                </div>
                                <div className="col-4">
                                    <button onClick={handleValidation} className="btn btn-success">Valider les inscriptions</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">CIN</th>
                                        <th scope="col">CNE</th>
                                        <th scope="col">NOM</th>
                                        <th scope="col">PRENOM</th>
                                        <th scope="col">EMAIL</th>
                                        <th scope="col">TEL</th>
                                        <th scope="col">MOYENNE BAC+2</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        candidat.map(c => (
                                            <tr key={c.cin}>
                                                <td>{c.cin}</td>
                                                <td>{c.cne}</td>
                                                <td>{c.nom}</td>
                                                <td>{c.prenom}</td>
                                                <td>{c.email}</td>
                                                <td>{c.phone_number}</td>
                                                <td>{c.moy_gen_dip2}</td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
