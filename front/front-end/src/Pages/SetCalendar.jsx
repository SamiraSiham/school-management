import React, { useEffect, useState } from "react";
import Calendar from "../Components.jsx/Calendar";
import { useNavigate } from "react-router-dom";
import Api from "../Components.jsx/Api";
export default function SetCalendar() {
    const [title, setTitle] = useState([]);
    const [date, setDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [text, setText] = useState([]);
    const [co, setCo] = useState("");
    const [filfil, setFilfil] = useState("");
    const [tete, setTete] = useState("");
    const [filiere, setFiliere] = useState([]);
    const { http } = Api();
    const navigate = useNavigate();
    const handleSceance = (e) => {
        e.preventDefault();
        const data = {
            name: tete,
            filiere: filfil,
            intitule: co,
            dateSceance: date,
            heureDebut: startTime,
            heureFin: endTime,
        };
        console.log(data);

        // setDataSet({ data });
        var success = false;
        http.post("/seance/create", data).then((res) => {
            console.log(res.data);
            success = true;
        });
        if (success) {
            window.location.reload();
        }
        // navigate("/calendar");
    };
    useEffect(() => {
        http.get("/filliere").then((res) => {
            var fil = [];
            for (var i = 0; i < res.data.fillieres.length; i++) {
                fil.push(res.data.fillieres[i].intitule);
            }
            setFiliere(fil);
        });
        // console.log(filiere);

        http.get("/teacher").then((res) => {
            console.log(res.data.teachers.length);
            var te = [];
            for (var i = 0; i < res.data.teachers.length; i++) {
                te.push(res.data.teachers[i].last_name);
            }
            setTitle(te);
        });
        // console.log(title);

        http.get("/cours").then((res) => {
            var co = [];
            for (var i = 0; i < res.data.length; i++) {
                co.push(res.data[i].nom_cours);
            }
            setText(co);
        });
        // console.log(title);
    }, []);

    const MySelectFiliere = () => {
        return (
            <select
                name="mySelect"
                className="form-control"
                value={filfil}
                onChange={(e) => setFilfil(e.target.value)}
            >
                {filiere.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        );
    };
    // console.log(filfil);
    const MySelectTeacher = () => {
        return (
            <select
                name="mm"
                className="form-control"
                value={tete}
                onChange={(e) => setTete(e.target.value)}
            >
                {title.map((option, index) => (
                    <option key={index} value={`Prof ${option}`}>
                        {`Prof ${option}`}
                    </option>
                ))}
            </select>
        );
    };
    // console.log(tete);
    const MySelectCours = () => {
        return (
            <select
                name="cc"
                className="form-control"
                value={co}
                onChange={(e) => setCo(e.target.value)}
            >
                {text.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        );
    };
    // console.log(text);
    return (
        <div className="container mt-5">
            <h1 className="text-center">Emploi du temps</h1>
            <form onSubmit={handleSceance}>
                <div className="mb-3">
                    <label htmlFor="">Nom de l'enseignant</label>
                    {/* <input
                        type="text"
                        name="nom"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                    /> */}
                    {<MySelectTeacher />}
                </div>
                <div className="mb-3">
                    <label htmlFor="">Filiere cible</label>
                    {/* <input
                        type="text"
                        name="filiere"
                        value={filiere}
                        onChange={(e) => setFiliere(e.target.value)}
                        className="form-control"
                    /> */}
                    {<MySelectFiliere />}
                </div>
                <div className="mb-3">
                    <label htmlFor="">Intitule de la sceance</label>
                    {/* <input
                        type="text"
                        name="intit"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="form-control"
                    /> */}
                    {<MySelectCours />}
                </div>
                <div className="mb-3">
                    <label htmlFor="">Date seance</label>
                    <input
                        type="date"
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="">Heure de debut</label>
                    <input
                        type="time"
                        name="heuredeb"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="">Heure de fin</label>
                    <input
                        type="time"
                        name="heurefin"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">
                        Ajouter Sceance
                    </button>
                </div>
            </form>
            <div className="calendar">{<Calendar />}</div>
        </div>
    );
}
