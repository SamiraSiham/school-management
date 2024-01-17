import { useState } from "react";
import Api from "../Components.jsx/Api";
import Loading from "../Components.jsx/Loading";
import { useNavigate } from "react-router-dom";

export default function InscriptionProf() {
  const navigate = useNavigate();
  const { http } = Api();
  const [loading, setLoading] = useState(false);
  const [inputErrorList, setInputErrorList] = useState({});
  const [prof, setProf] = useState({
    cin: "",
    nom: "",
    prenom: "",
    tel: "",
    email: "",
    mdp: "",
    dins: "",
    salaire: "",
  });
  const handleInput = (e) => {
    e.persist();
    setProf({ ...prof, [e.target.name]: e.target.value });
  };
  const inscrire = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      cin: prof.cin,
      last_name: prof.nom,
      first_name: prof.prenom,
      phone_number: prof.tel,
      date_inscription: prof.dins,
      salaire: prof.salaire,
      email: prof.email,
      mot_de_passe: prof.mdp,
    };
    http
      .post("/teachers", data)
      .then((res) => {
        alert("Dik sa3a chof wach mchat wla la");
        navigate("/");
        setLoading(false);
      })
      .catch((err) => {
        if (err.resppnse.status === 422 && err.resppnse.status === 500) {
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
              <form onSubmit={inscrire}>
                <div className="mb-3">
                  <label htmlFor="">CIN</label>
                  <input
                    type="text"
                    name="cin"
                    value={prof.cin}
                    onChange={handleInput}
                    className="form-control"
                  />
                  <span className="text-danger">{inputErrorList.cin}</span>
                </div>
                <div className="mb-3">
                  <label htmlFor="">Nom</label>
                  <input
                    type="text"
                    name="nom"
                    value={prof.nom}
                    onChange={handleInput}
                    className="form-control"
                  />
                  <span className="text-danger">{inputErrorList.nom}</span>
                </div>
                <div className="mb-3">
                  <label htmlFor="">Prenom</label>
                  <input
                    type="text"
                    name="prenom"
                    value={prof.prenom}
                    onChange={handleInput}
                    className="form-control"
                  />
                  <span className="text-danger">{inputErrorList.prenom}</span>
                </div>
                <div className="mb-3">
                  <label htmlFor="">Tel</label>
                  <input
                    type="text"
                    name="tel"
                    value={prof.tel}
                    onChange={handleInput}
                    className="form-control"
                  />
                  <span className="text-danger">{inputErrorList.tel}</span>
                </div>
                <div className="mb-3">
                  <label htmlFor="">Email</label>
                  <input
                    type="mail"
                    name="email"
                    value={prof.email}
                    onChange={handleInput}
                    className="form-control"
                  />
                  <span className="text-danger">{inputErrorList.email}</span>
                </div>
                <div className="mb-3">
                  <label htmlFor="">Mot de passe</label>
                  <input
                    type="password"
                    name="mdp"
                    value={prof.mdp}
                    onChange={handleInput}
                    className="form-control"
                  />
                  <span className="text-danger">{inputErrorList.mdp}</span>
                </div>
                <div className="mb-3">
                  <label htmlFor="">Date d'inscription</label>
                  <input
                    type="date"
                    name="dins"
                    value={prof.dins}
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
                    value={prof.salaire}
                    onChange={handleInput}
                    className="form-control"
                  />
                  <span className="text-danger">{inputErrorList.salaire}</span>
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary w-100">
                    S'inscrire
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
