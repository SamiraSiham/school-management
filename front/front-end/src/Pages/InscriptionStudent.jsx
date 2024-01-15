import { useState } from "react";
import Api from "../Components.jsx/Api";
import Loading from "../Components.jsx/Loading";
import { useNavigate } from "react-router-dom";

export default function InscriptionStudent() {
  //   const [cin, setCin] = useState("");
  //   const [massar, setMassar] = useState("");
  //   const [nom, setNom] = useState("");
  //   const [prenom, setPrenom] = useState("");
  //   const [dns, setDns] = useState("");
  //   const [anbac, setAnbac] = useState("");
  //   const [flbac, setFlbac] = useState("");
  //   const [ddip, setDdip] = useState("");
  //   const [andip, setAndip] = useState("");
  const navigate = useNavigate();
  const { http } = Api();
  const [loading, setLoading] = useState(false);
  const [inputErrorList, setInputErrorList] = useState({});
  const [student, setStudent] = useState({
    cin: "",
    massar: "",
    nom: "",
    prenom: "",
    dns: "",
    tel: "",
    email: "",
    mdp: "",
    dip1: "",
    dip2: "",
    dip3: "",
    moy_gen_dip1: "",
    moy_gen_dip2: "",
    moy_gen_dip3: "",
    choix1: "",
    choix2: "",
    choix3: "",
  });
  const handleInput = (e) => {
    e.persist();
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const inscrire = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      cin: student.cin,
      massar: student.massar,
      nom: student.nom,
      prenom: student.prenom,
      dns: student.dns,
      tel: student.tel,
      email: student.tel,
      mdp: student.mdp,
      dip1: student.dip1,
      dip2: student.dip2,
      dip3: student.dip3,
      moy_gen_dip1: student.moy_gen_dip1,
      moy_gen_dip2: student.moy_gen_dip2,
      moy_gen_dip3: student.moy_gen_dip3,
      choix1: student.choix1,
      choix2: student.choix2,
      choix3: student.choix3,
    };
    http
      .post("/inscription-student", data)
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
              <h4 className="text-center">Inscription Etudiant</h4>
            </div>
            <div className="card-body">
              <form onSubmit={inscrire}>
                <div className="container d-flex justify-content-around">
                  <div className="mb-3">
                    <label htmlFor="">CIN</label>
                    <input
                      type="text"
                      name="cin"
                      value={student.cin}
                      onChange={handleInput}
                      className="form-control"
                    />
                    <span className="text-danger">{inputErrorList.cin}</span>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="">Code Massar</label>
                    <input
                      type="text"
                      name="massar"
                      value={student.massar}
                      onChange={handleInput}
                      className="form-control"
                    />
                    <span className="text-danger">{inputErrorList.massar}</span>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="">Nom</label>
                  <input
                    type="text"
                    name="nom"
                    value={student.nom}
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
                    value={student.prenom}
                    onChange={handleInput}
                    className="form-control"
                  />
                  <span className="text-danger">{inputErrorList.prenom}</span>
                </div>
                <div className="mb-3">
                  <label htmlFor="">tel</label>
                  <input
                    type="number"
                    name="tel"
                    value={student.tel}
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
                    value={student.email}
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
                    value={student.mdp}
                    onChange={handleInput}
                    className="form-control"
                  />
                  <span className="text-danger">{inputErrorList.mdp}</span>
                </div>
                <div className="mb-3">
                  <label htmlFor="">Date de naissance</label>
                  <input
                    type="date"
                    name="dns"
                    value={student.dns}
                    onChange={handleInput}
                    className="form-control"
                  />
                  <span className="text-danger">{inputErrorList.dns}</span>
                </div>
                <div className="container d-flex justify-content-around">
                  <div className="mb-3">
                    <label htmlFor="">Diplome N1</label>
                    <input
                      type="text"
                      name="dip1"
                      value={student.dip1}
                      onChange={handleInput}
                      className="form-control"
                      placeholder="Bac Pc,SVT .."
                    />
                    <span className="text-danger">{inputErrorList.dip1}</span>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="">Moyenne Generale</label>
                    <input
                      type="number"
                      name="moy_gen_dip1"
                      value={student.moy_gen_dip1}
                      onChange={handleInput}
                      className="form-control"
                    />
                    <span className="text-danger">
                      {inputErrorList.moy_gen_dip1}
                    </span>
                  </div>
                </div>
                <div className="container d-flex justify-content-around">
                  <div className="mb-3">
                    <label htmlFor="">Diplome N2</label>
                    <input
                      type="text"
                      name="dip2"
                      value={student.dip2}
                      onChange={handleInput}
                      className="form-control"
                      placeholder="Bac+2: DTS DUT DEUG"
                    />
                    <span className="text-danger">{inputErrorList.dip2}</span>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="">Moyenne Generale</label>
                    <input
                      type="number"
                      name="moy_gen_dip2"
                      value={student.moy_gen_dip2}
                      onChange={handleInput}
                      className="form-control"
                    />
                    <span className="text-danger">
                      {inputErrorList.moy_gen_dip2}
                    </span>
                  </div>
                </div>
                <div className="container d-flex justify-content-around">
                  <div className="mb-3">
                    <label htmlFor="">Diplome N3</label>
                    <input
                      type="text"
                      name="dip3"
                      value={student.dip3}
                      onChange={handleInput}
                      className="form-control"
                      placeholder="Bac+3"
                    />
                    <span className="text-danger">{inputErrorList.dip3}</span>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="">Moyenne Generale</label>
                    <input
                      type="number"
                      name="moy_gen_dip3"
                      value={student.moy_gen_dip3}
                      onChange={handleInput}
                      className="form-control"
                    />
                    <span className="text-danger">
                      {inputErrorList.moy_gen_dip3}
                    </span>
                  </div>
                </div>
                {/* -------------------------------------- CHOIX ----------------------------------- */}
                <div className="mb-3">
                  <label htmlFor="">Choix 1</label>
                  <select
                    name="choix1"
                    className="form-control"
                    id=""
                    onChange={handleInput}
                  >
                    <option value="choix" selected disabled>
                      Choix1
                    </option>
                    <option value="tmw">tmw</option>
                    <option value="cle">cle</option>
                    <option value="anglais">anglais</option>
                  </select>
                  <span className="text-danger">{inputErrorList.choix1}</span>
                </div>
                <div className="mb-3">
                  <label htmlFor="">Choix 2</label>
                  <select
                    name="choix2"
                    className="form-control"
                    onChange={handleInput}
                  >
                    <option value="choix" selected disabled>
                      Choix2
                    </option>

                    <option value="tmw">tmw</option>
                    <option value="cle">cle</option>
                    <option value="anglais">anglais</option>
                  </select>
                  <span className="text-danger">{inputErrorList.choix2}</span>
                </div>
                <div className="mb-3">
                  <label htmlFor="">Choix 3</label>
                  <select
                    name="choix3"
                    className="form-control"
                    onChange={handleInput}
                  >
                    <option value="choix" selected disabled>
                      Choix3
                    </option>

                    <option value="tmw">tmw</option>
                    <option value="cle">cle</option>
                    <option value="anglais">anglais</option>
                  </select>
                  <span className="text-danger">{inputErrorList.choix3}</span>
                </div>
                {/* ----------------------------------------------------------------------- */}
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
