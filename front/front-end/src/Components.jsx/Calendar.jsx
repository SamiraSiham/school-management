import React, { useEffect, useState } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import * as bootstrap from "bootstrap";
import Api from "../Components.jsx/Api";
export default function Calendar() {
    const [events, setEv] = useState([]);
    var event = [];
    // console.log(events);
    const { http } = Api();
    useEffect(() => {
        http.get("/seance").then((res) => {

            for (var i = 0; i < res.data.Sceances.length; i++) {
                console.log(res.data.Sceances[i]);
                event.push({
                    title: res.data.Sceances[i].name,
                    start: `${res.data.Sceances[i].dateSceance}T${res.data.Sceances[i].heureDebut}`,
                    end: `${res.data.Sceances[i].dateSceance}T${res.data.Sceances[i].heureFin}`,
                    text: res.data.Sceances[i].intitule,
                    filiere: res.data.Sceances[i].filiere,
                });
                setEv(event);
            }
            // console.log(event);
        });
    }, []);

    return (
        <div className="container">
            <h1 className="text-center mt-3 mb-5">Calendar</h1>
            <Fullcalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView={"dayGridMonth"}
                headerToolbar={{
                    start: "today prev,next",
                    center: "title",
                    end: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                height={"70vh"}
                events={events}
                eventDidMount={(info) => {
                    const content =
                        info.event._def.extendedProps.text +
                        "/" +
                        info.event._def.extendedProps.filiere;
                    // console.log(content);
                    return new bootstrap.Popover(info.el, {
                        title: info.event.title,
                        placement: "auto",
                        trigger: "hover",
                        customClass: "popoverStyle",
                        content: content,
                    });
                }}
            />
        </div>
    );
}
