import { useState } from "react";
import Api from "../Components.jsx/Api";
import Loading from "../Components.jsx/Loading";
import { useNavigate } from "react-router-dom";

export default function LoginCandidat() {
  const navigate = useNavigate();
  const { http } = Api();
  const [loading, setLoading] = useState(false);
  const [inputErrorList, setInputErrorList] = useState({});
  const [candidat, setCandidat] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    e.persist();
    setCandidat({ ...candidat, [e.target.name]: e.target.value });
  };
  const login = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      email: candidat.email,
      password: candidat.password,
    };
    http
      .post("/login-candidat", data)
      .then((res) => {
        alert("Dik sa3a chof wach mchat wla la");
        navigate("/candidat-home");
        setLoading(false);
        
      })
      .catch((err) => {
        if (err.response.status === 422) {
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
              <h4 className="text-center">Login Candidat</h4>
            </div>
            <div className="card-body">
              <form onSubmit={login}>
                
                <div className="mb-3">
                  <label htmlFor="">Email</label>
                  <input
                    type="mail"
                    name="email"
                    value={candidat.email}
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
                    value={candidat.password}
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
