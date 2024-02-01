import { useState } from "react";
// import Api from "../Components.jsx/Api";
import Api from "../../../Components.jsx/Api";
import Loading from "../../../Components.jsx/Loading";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function EditEnseignant() {
    
    const navigate = useNavigate();
    const { http } = Api();
    const [loading, setLoading] = useState(false);
    const [inputErrorList, setInputErrorList] = useState({});
    const [prof, setProf] = useState({
        cin: "",
        last_name: "",
        first_name: "",
        phone_number: "",
        email: "",
        mdp: "",
        date_inscription: "",
        salaire: "",
    });
    const cin = useParams('cin').cin;
    useEffect(() => {
        http.get(`/teacher/${cin}`).then((res) => {
            setLoading(false);
            // console.log(res.data);
            return res.data
        }).then((data) => {
            setProf(data);
            // console.log(data);
        })
        // console.log(cin);
    }, []);
    const handleInput = (e) => {
        e.persist();
        setProf({ ...prof, [e.target.name]: e.target.value });
    };
    const modifier = (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            cin: prof.cin,
            last_name: prof.last_name,
            first_name: prof.first_name,
            phone_number: prof.phone_number,
            date_inscription: prof.date_inscription,
            salaire: prof.salaire,
            email: prof.email,
            mot_de_passe: prof.mot_de_passe,
        };
        http
            .put(`/teacher/${cin}`, data)
            .then((res) => {
                alert("Success");
                // navigate("/");
                setLoading(false);
            })
            .catch((err) => {
                if (err.response.status === 422 && err.response.status === 500) {
                    setInputErrorList(err.response.data.errors); // errors are the ones in the validator
                    setLoading(false);
                }
            });
    };
    if (loading) {
        return <Loading />;
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header ">
                            <h4 className="text-center">Inscription Enseignant</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={modifier}>
                                <div className="mb-3">
                                    <label htmlFor="">CIN</label>
                                    <input
                                        type="text"
                                        name="cin"
                                        readOnly
                                        value={prof.cin || ''}
                                        onChange={handleInput}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="">Nom</label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        value={prof.last_name || ''}
                                        onChange={handleInput}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="">Prenom</label>
                                    <input
                                        type="text"
                                        name="first_name"
                                        value={prof.first_name || ''}
                                        onChange={handleInput}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="">Tel</label>
                                    <input
                                        type="text"
                                        name="phone_number"
                                        value={prof.phone_number || ''}
                                        onChange={handleInput}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="">Email</label>
                                    <input
                                        type="mail"
                                        name="email"
                                        value={prof.email || ''}
                                        onChange={handleInput}
                                        className="form-control"
                                    />
                                    <span className="text-danger">{inputErrorList.email}</span>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="">Mot de passe</label>
                                    <input
                                        type="text"
                                        name="mot_de_passe"
                                        value={prof.mot_de_passe || ''}
                                        onChange={handleInput}
                                        className="form-control"
                                    />
                                    <span className="text-danger">{inputErrorList.mdp}</span>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="">Date d'inscription</label>
                                    <input
                                        type="date"
                                        name="date_inscription"
                                        value={prof.date_inscription || ''}
                                        onChange={handleInput}
                                        className="form-control"
                                    />
                                    <span className="text-danger">{inputErrorList.dins}</span>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="">Salaire</label>
                                    <input
                                        type="number"
                                        name="salaire"
                                        value={prof.salaire || ''}
                                        onChange={handleInput}
                                        className="form-control"
                                    />
                                    <span className="text-danger">{inputErrorList.salaire}</span>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-primary w-100">
                                        Modifier
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
