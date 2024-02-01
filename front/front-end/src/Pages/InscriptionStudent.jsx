import { useState } from "react";
import Api from "../Components.jsx/Api";
import Loading from "../Components.jsx/Loading";
import { useNavigate } from "react-router-dom";

export default function InscriptionStudent() {
  const navigate = useNavigate();
  const { http } = Api();
  const [loading, setLoading] = useState(false);

  const [inputErrorList, setInputErrorList] = useState({});
  

  const [student, setStudent] = useState({
    cin: "",
    cne: "",
    nom: "",
    prenom: "",
    date_naiss: "",
    phone_number: "",
    email: "",
    mdp: "",
    diplome_1: "",
    diplome_2: "",
    diplome_3: "",
    moy_gen_dip1: "",
    moy_gen_dip2: "",
    moy_gen_dip3: "",
    choix_1: "",
    choix_2: "",
    choix_3: "",
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
      cne: student.cne,
      nom: student.nom,
      prenom: student.prenom,
      date_naiss: student.date_naiss,
      phone_number: student.phone_number,
      email: student.email,
      password: student.password,
      diplome_1: student.diplome_1,
      diplome_2: student.diplome_2,
      diplome_3: student.diplome_3,
      moy_gen_dip1: student.moy_gen_dip1,
      moy_gen_dip2: student.moy_gen_dip2,
      moy_gen_dip3: student.moy_gen_dip3,
      choix_1: student.choix_1,
      choix_2: student.choix_2,
      choix_3: student.choix_3,
    };
    console.log(data);
    http
      .post("/candidat", data)
      .then((res) => {
        alert("success");
        // navigate("/");
        setLoading(false);
      })
        // .catch((err) => {
        //   if (err.response.status === 422 || err.response.status === 500) {
        //     setInputErrorList(err.response.data.errors); // errors are the ones in the validator
        //     setLoading(false);
        //   }
        // });
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
                      name="cne"
                      value={student.cne}
                      onChange={handleInput}
                      className="form-control"
                    />
                    <span className="text-danger">{inputErrorList.cne}</span>
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
                    name="phone_number"
                    value={student.phone_number}
                    onChange={handleInput}
                    className="form-control"
                  />
                  <span className="text-danger">{inputErrorList.phone_number}</span>
                </div>
                <div className="mb-3">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
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
                    name="password"
                    value={student.password}
                    onChange={handleInput}
                    className="form-control"
                  />
                  <span className="text-danger">{inputErrorList.password}</span>
                </div>
                <div className="mb-3">
                  <label htmlFor="">Date de naissance</label>
                  <input
                    type="date"
                    name="date_naiss"
                    value={student.date_naiss}
                    onChange={handleInput}
                    className="form-control"
                  />
                  <span className="text-danger">{inputErrorList.date_naiss}</span>
                </div>
                <div className="container d-flex justify-content-around">

                  <div className="mb-3">
                    <label htmlFor="">Diplome N1</label>
                    <input
                      type="file"
                      name="diplome_1"
                      value={student.diplome_1.name}
                      onChange={handleInput}
                      className="form-control"
                      placeholder="Bac Pc,SVT .."
                    />
                    <span className="text-danger">{inputErrorList.diplome_1}</span>
                  </div>

                  {/* {[...Array(3).keys()].map((inputIndex) => (
                    <div key={inputIndex}>
                      <input type="file" multiple onChange={(e) => handleFileChange(e, inputIndex)} />
                    </div>
                  ))} */}

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
                      type="file"
                      name="diplome_2"
                      value={student.diplome_2.name}
                      onChange={handleInput}
                      className="form-control"
                      placeholder="Bac+2: DTS DUT DEUG"
                    />
                    <span className="text-danger">{inputErrorList.diplome_2}</span>
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
                      type="file"
                      name="diplome_3"
                      value={student.diplome_3.name}
                      onChange={handleInput}
                      className="form-control"
                      placeholder="Bac+3"
                    />
                    <span className="text-danger">{inputErrorList.diplome_3}</span>
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
                    name="choix_1"
                    className="form-control"
                    id=""
                    
                    onChange={handleInput}
                  >
                    <option value="" defaultChecked disabled>
                      Choix1
                    </option>
                    <option value="tmw">tmw</option>
                    <option value="cle">cle</option>
                    <option value="anglais">anglais</option>
                  </select>
                  <span className="text-danger">{inputErrorList.choix_1}</span>
                </div>
                <div className="mb-3">
                  <label htmlFor="">Choix 2</label>
                  <select
                    name="choix_2"
                    className="form-control"
                    
                    onChange={handleInput}
                  >
                    <option value="" defaultChecked disabled>
                      Choix2
                    </option>

                    <option value="tmw">tmw</option>
                    <option value="cle">cle</option>
                    <option value="anglais">anglais</option>
                  </select>
                  <span className="text-danger">{inputErrorList.choix_2}</span>
                </div>
                <div className="mb-3">
                  <label htmlFor="">Choix 3</label>
                  <select
                    name="choix_3"
                    className="form-control"
                    onChange={handleInput}
                  >
                    <option value="" defaultChecked disabled>
                      Choix3
                    </option>

                    <option value="tmw">tmw</option>
                    <option value="cle">cle</option>
                    <option value="anglais">anglais</option>
                  </select>
                  <span className="text-danger">{inputErrorList.choix_3}</span>
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
