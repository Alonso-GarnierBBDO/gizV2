"use client";

import Image from "next/image";
import React, { useState } from "react";
import MariposasImage from "@/assets/img/mariposa_rosa.svg";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from '@mui/icons-material/Add';
import MinimizeIcon from '@mui/icons-material/Minimize';


const preguntasFrecuentes = [
    {
        title: "¿Cómo puedo poner en regla mis productos?",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        title: "¿Por qué es recomendable ser parte de una asociación de apicultores?",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        title: "¿Cómo saber que la miel es de calidad?",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        title: "¿Dónde puedo procesar mi miel?",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        title: "¿Dónde puedo aprender sobre apicultura?",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
];

function PreguntasFrecuentesComponent() {

    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };


    return (
        <>
        <section className="preguntas_frecuentes_seccion">
            <section className="image_abeja">
            <Image
                src={MariposasImage.src}
                alt="Imagen de mariposas"
                width={100}
                height={100}
            />
            </section>
            <h2>Preguntas frecuentes</h2>
            <section className="accordeon">

                {
                    preguntasFrecuentes.map( (item, key) => {
                        return (
                            <Accordion className="item-acordeon" key={key} expanded={expanded === `panel_${key}`} onChange={handleChange(`panel_${key}`)}>
                                <AccordionSummary
                                expandIcon={ <ExpandMoreIcon/> }
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                    <h3>{ item.title }</h3>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <p>{item.content}</p>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }

            </section>
        </section>
        </>
    );
}

export default PreguntasFrecuentesComponent;
