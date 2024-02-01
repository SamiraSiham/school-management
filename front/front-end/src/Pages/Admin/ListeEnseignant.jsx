import { useState } from "react";
import Api from "../../Components.jsx/Api";
import Loading from "../../Components.jsx/Loading";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";


export default function ListeEnseignant() {
    const navigate = useNavigate();
    const { http } = Api();
    const [loading, setLoading] = useState(true);
    const [enseignant, setEnseignant] = useState([]);

    useEffect(() => {
        http.get("/teacher").then((res) => {
            setLoading(false);
            console.log(res.data.teachers);
            return res.data.teachers
        }).then((data) => {
            setEnseignant(data)
        })
    }, []);

    if (loading) {
        return <Loading />;
    }

    const handleDelete = (cin) =>{
        if(window.confirm('Are you sure you want to delete this record?') == true) {
            http.delete(`/teacher/${cin}`).then((res) => {
                setLoading(false);
                console.log(res);
                return res
            })
            alert('Teacher deleted successfully');
            window.location.reload();
            console.log(cin);
        }
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="row card-header ">
                            <div className="col-9">
                                <h4 className="text-center">Liste Enseignants</h4>
                            </div>
                            <div className="col-3">
                                <Link className="btn btn-success" to='/nouvelle-inscription-prof'>Ajouter</Link>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">CIN</th>
                                        <th scope="col">NOM</th>
                                        <th scope="col">PRENOM</th>
                                        <th scope="col">EMAIL</th>
                                        <th scope="col">TEL</th>
                                        <th scope="col">ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        enseignant.map(e => (
                                            <tr key={e.cin}>
                                                <td>{e.cin}</td>

                                                <td>{e.last_name}</td>
                                                <td>{e.first_name}</td>
                                                <td>{e.email}</td>
                                                <td>{e.phone_number}</td>
                                                <td>
                                                    <Link className="btn btn-info" to={`/modifier-enseignant/${e.cin}`}>Modifier</Link>
                                                    <span> </span>
                                                    <button className="btn btn-danger" onClick={(event) => handleDelete(e.cin)}>Supprimer</button>
                                                </td>
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
