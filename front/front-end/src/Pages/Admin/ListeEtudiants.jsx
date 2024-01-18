import { useState } from "react";
import Api from "../../Components.jsx/Api";
import Loading from "../../Components.jsx/Loading";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";


export default function InscriptionStudent() {
    const navigate = useNavigate();
    const { http } = Api();
    const [loading, setLoading] = useState(true);
    const [etudiant, setEtudiant] = useState([]);

    useEffect(() => {
        http.get("/etudiant").then((res) => {
            setLoading(false);
            return res.data.etudiants
        }).then((data) => {
            setEtudiant(data)
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
                            <h4 className="text-center">Liste Etudiants</h4>
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
                                    {console.log(etudiant)}
                                    {
                                        etudiant.map(e => (
                                            <tr key={e.cin}>
                                                <td>{e.cin}</td>
                                                <td>{e.cne}</td>
                                                <td>{e.nom}</td>
                                                <td>{e.prenom}</td>
                                                <td>{e.email}</td>
                                                <td>{e.phone_number}</td>
                                                <td>{e.moy_gen_dip2}</td>
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
