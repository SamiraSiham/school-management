import React, { useEffect, useState } from "react";
import Calendar from "../Components.jsx/Calendar";
import { useNavigate } from "react-router-dom";
export default function SetCalendar() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [text, setText] = useState("");
    const [filiere, setFiliere] = useState("");
    const [dataSet, setDataSet] = useState({ data: {} });
    const navigate = useNavigate();
    const handleSceance = (e) => {
        e.preventDefault();
        var data = [];
        data = [
            ...data,
            {
                title: title,
                start: `${date}T${startTime}:00`,
                end: `${date}T${endTime}:00`,
                text: text,
            },
        ];
        // navigate("/calendar");
        console.log(data);
        setDataSet({ data });
    };
    useEffect(() => {
        <Calendar data={dataSet} />;
    }, []);
    return (
        <div className="container mt-5">
            <h1 className="text-center">Emploi du temps</h1>
            <form onSubmit={handleSceance}>
                <div className="mb-3">
                    <label htmlFor="">Nom de l'enseignant</label>
                    <input
                        type="text"
                        name="nom"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="">Filiere cible</label>
                    <input
                        type="text"
                        name="filiere"
                        value={filiere}
                        onChange={(e) => setFiliere(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="">Intitule de la sceance</label>
                    <input
                        type="text"
                        name="intit"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="form-control"
                    />
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
            <div className="calendar">{<Calendar data={dataSet} />}</div>
        </div>
    );
}
