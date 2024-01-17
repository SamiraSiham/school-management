import { useState } from "react";
import Api from "../Components.jsx/Api";
import Loading from "../Components.jsx/Loading";
import { useNavigate } from "react-router-dom";

export default function LoginEtudiant() {
  const navigate = useNavigate();
  const { http } = Api();
  const [loading, setLoading] = useState(false);
  const [inputErrorList, setInputErrorList] = useState({});
  const [etudiant, setEtudiant] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    e.persist();
    setEtudiant({ ...etudiant, [e.target.name]: e.target.value });
  };
  const login = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      email: etudiant.email,
      password: etudiant.password,
    };
    http
      .post("/login-etudiant", data)
      .then((res) => {
        alert("Dik sa3a chof wach mchat wla la");
        navigate("/etudiant-home");
        setLoading(false);
        
      })
      .catch((err) => {
        // if (err.response.status === 422 && err.response.status === 500) {
        // if(err.response.status === 500){
        //     setInputErrorList([
        //         "login error"
        //     ]);
        // }
        if (err.response.status === 422) {
          // navigate('/')
          setInputErrorList(err.response.data.errors); // errors are the ones in the validator
          setLoading(false);
        }
      });
  };
  if (loading == true) {
    return <Loading />;
  }
  if(inputErrorList){
    console.log(inputErrorList);
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header ">
              <h4 className="text-center">Login Etudiant</h4>
            </div>
            <div className="card-body">
              <form onSubmit={login}>
                
                <div className="mb-3">
                  <label htmlFor="">Email</label>
                  <input
                    type="mail"
                    name="email"
                    value={etudiant.email}
                    onChange={handleInput}
                    className="form-control"
                  />
                  
                  <span className="text-danger">{inputErrorList ? inputErrorList.email : null}</span>
                </div>
                <div className="mb-3">
                  <label htmlFor="">Mot de passe</label>
                  <input
                    type="password"
                    name="password"
                    value={etudiant.password}
                    onChange={handleInput}
                    className="form-control"
                  />
                  <span className="text-danger">{inputErrorList ? inputErrorList.password : null}</span>
                </div>
                
                
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary w-100">
                    Log in
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
