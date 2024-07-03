'use client'

import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { useState } from 'react';



function BlogItem(){

    const params = useParams();
    const slug = params.slug;
    const [content, setContent] = useState([
        {
            slug: 'cuidados-esenciales',
            content: `<p>Las abejas desempeñan un papel fundamental en nuestro ecosistema al ser polinizadoras clave de plantas y cultivos. Sin embargo, en los últimos años, se ha observado un preocupante declive en las poblaciones de abejas en todo el mundo debido a diversos factores, como el uso de pesticidas, la pérdida de hábitat y el cambio climático. Es vital que tomemos medidas para proteger a estas valiosas criaturas. En este blog, exploraremos los cuidados principales que debemos tener hacia las abejas.</p>
                        <p>
                            <ul>
                                <li>Preservar y crear hábitats adecuados: Las abejas necesitan una variedad de flores y plantas para obtener néctar y polen. Debemos asegurarnos de conservar y proteger los espacios naturales donde las abejas encuentran alimento, así como plantar flores y arbustos en nuestros jardines y espacios públicos. Crear un jardín amigable para las abejas con una diversidad de flores nativas y evitar el uso de pesticidas tóxicos es fundamental para su supervivencia.</li>
                                <li>Evitar el uso de pesticidas: Los pesticidas y herbicidas pueden ser altamente tóxicos para las abejas y otros polinizadores. Si es necesario utilizar productos químicos en el jardín o en cultivos, se deben elegir opciones menos tóxicas y aplicarlos de manera cuidadosa, siguiendo siempre las instrucciones del fabricante. Además, se pueden explorar alternativas orgánicas y métodos de control de plagas naturales para reducir la dependencia de los productos químicos.</li>
                                <li>Fomentar la apicultura responsable: Los apicultores desempeñan un papel crucial en la protección de las abejas. Si estás interesado en la apicultura, es importante que te formes adecuadamente y sigas prácticas responsables de manejo de colmenas. Esto incluye la garantía de condiciones higiénicas en las colmenas, la protección contra enfermedades y plagas, y la adopción de métodos de extracción de miel que minimicen el estrés en las abejas.</li>
                                <li>Educar y crear conciencia: La educación es clave para fomentar la protección de las abejas. Debemos difundir información sobre su importancia en los ecosistemas y los peligros que enfrentan. Organizar charlas, talleres y eventos relacionados con las abejas puede ayudar a crear conciencia y promover acciones positivas en la comunidad.</li>
                                <li>Contribuir a programas de conservación: Existen organizaciones y programas dedicados a la conservación de las abejas. Puedes considerar donar tiempo, recursos o fondos para apoyar estos esfuerzos. Estas iniciativas trabajan en la investigación, el monitoreo de poblaciones de abejas y la implementación de estrategias para su protección y recuperación.</li>
                            </ul>
                        </p>
                        <p>En conclusión, proteger a las abejas requiere un esfuerzo colectivo. Preservar hábitats, evitar el uso de pesticidas tóxicos, fomentar la apicultura responsable, educar y contribuir a programas de conservación son acciones que todos podemos tomar para asegurar la supervivencia de estos importantes polinizadores.</p>
                    `,
            title: 'Cuidados Esenciales para Proteger a las Abejas'
        }
    ]);
    

    return (
        <>
            <section className="blog_individual">

                {

                    content.map( (items, key) => {


                            return (
                                <section key={key}>
                                    <h1>{items.title}</h1>
                                    <section dangerouslySetInnerHTML={{__html: items.content}} ></section>
                                </section>
                            )
                    })
                }
            </section>
        </>
    )

}

export default BlogItem;