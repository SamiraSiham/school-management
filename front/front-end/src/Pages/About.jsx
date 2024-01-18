import React from "react";
import CarouselPage from "../Components.jsx/CarouselPage";

export default function About() {
    return (
        <div className="container mt-5">
            <h1 className="text-center">
                {/* Had about hi zayda tandir fiha chi 7aja */}
                L'école normale supérieure (E.N.S) de Rabat
            </h1>
            <p style={{textAlign : "justify"}}>
            L'École Normale Supérieure (E.N.S.) de Rabat a été créée en 1978, 
            à côté d'autres établissements du même genre, dans le cadre d'un programme national destiné 
            à la formation des enseignants du Secondaire de second cycle (Secondaire qualifiant selon la terminologie actuellement
            en vigueur) afin de répondre à une demande accrue dans le secteur de 
            l'enseignement public à cette époque et visant en même temps la marocanisation des cadres. 
            Une mission que l'établissement a dignement accomplie, en plus de beaucoup d'autres formations 
            initiales et continues dont l'agrégation, dans diverses disciplines et spécialités, 
            jusqu'en 2010 sous la tutelle du département de l'Éducation Nationale, grâce à son potentiel humain 
            encadrant hautement qualifié, riche et diversifié.
            </p>
            <CarouselPage />
        </div>
    );
}
