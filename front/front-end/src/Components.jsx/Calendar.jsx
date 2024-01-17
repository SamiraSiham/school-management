import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import * as bootstrap from "bootstrap";
export default function Calendar(props) {
    // const events = [
    //     {
    //         title: "PROF.MOUNADI",
    //         start: "2024-01-17T14:00:00",
    //         end: "2024-01-17T17:00:00",
    //         text: "Une seance de struct",
    //         filiere: "TMW",
    //     },
    //     {
    //         title: "PROF.MOUNADI",
    //         start: "2024-01-17T14:00:00",
    //         end: "2024-01-17T17:00:00",
    //         text: "Une seance de struct",
    //         filiere: "CLE",
    //     },
    // ];
    // console.log(props.data);
    var events = [];
    if (!props.data) {
        console.log("oho");
    } else {
        console.log("Ouii");
        events = [props.data.data];
        console.log(events);
    }

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
