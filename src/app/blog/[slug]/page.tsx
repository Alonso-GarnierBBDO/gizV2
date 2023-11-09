'use client'

import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { useState } from 'react';



function BlogItem(){

    const params = useParams();
    const slug = params.slug;
    const [content, setContent] = useState([
        {
            slug: 'biodiversidad-costa-rica',
            content: `<p>Costa Rica es conocida por su rica biodiversidad, y las abejas no son una excepción. Este pequeño país centroamericano alberga una gran variedad de especies de abejas, cada una con características únicas y un papel crucial en el equilibrio ecológico. En este blog, exploraremos algunos de los tipos de abejas más destacados que podemos encontrar en Costa Rica.</p>
            <p>Comenzando por las abejas meliponas, estas abejas nativas son altamente valoradas por los apicultores locales. La Melipona beecheii, también conocida como la abeja de la miel, produce un tipo especial de miel llamada "miel de abeja sin aguijón". Estas abejas son consideradas polinizadoras clave y su importancia en la preservación de la biodiversidad y los ecosistemas no puede ser subestimada.</p>
            <p>Otro tipo de abeja importante en Costa Rica es la abeja africanizada, también conocida como "abeja asesina". Aunque su nombre pueda parecer intimidante, estas abejas desempeñan un papel vital en la polinización de los cultivos. Aunque son más defensivas que otras especies de abejas, son responsables de la producción de miel en el país y contribuyen a la economía local.</p>
            <p>No podemos olvidar mencionar a las abejas solitarias, como la abeja carpintera y la abeja de las orquídeas. A diferencia de las abejas sociales, estas abejas construyen sus nidos de forma individual y no viven en colonias. La abeja carpintera, como su nombre lo indica, excava galerías en la madera, mientras que la abeja de las orquídeas tiene una estrecha relación simbiótica con las orquídeas, ya que es su principal polinizador.</p>
            <p>Un grupo fascinante de abejas en Costa Rica son las abejas sin aguijón, también conocidas como abejas nativas. Estas abejas se caracterizan por la ausencia de un aguijón defensivo, lo que las hace menos agresivas en comparación con otras especies. Además de su papel en la polinización, estas abejas son apreciadas por su producción de miel y cera.</p>
            <p>Por último, pero no menos importante, están las abejas productoras de miel europeas. Estas abejas, introducidas en Costa Rica, son responsables de la mayoría de la producción comercial de miel en el país. Se adaptan bien al clima y a los diversos paisajes de Costa Rica, y su laboriosa recolección de néctar contribuye a la diversidad y a la salud de los ecosistemas locales.</p>
            <p>En resumen, Costa Rica alberga una amplia gama de especies de abejas, cada una con características únicas y un papel crucial en el ecosistema. Desde las abejas meliponas y africanizadas, hasta las abejas solitarias y sin aguijón, todas desempeñan un papel importante en la polinización de las plantas y en la producción de miel. La conservación de estas especies es fundamental para garantizar la sostenibilidad y la preservación de la biodiversidad.</p>`,
            title: 'La biodiversidad en Costa Rica'
        },
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


    console.log(slug);
    

    return (
        <>
            <section className="blog_individual">

                {

                    content.map( (items, key) => {

                        

                        if(items.slug == slug){

                            return (
                                <section key={key}>
                                    <h1>{items.title}</h1>
                                    <section dangerouslySetInnerHTML={{__html: items.content}} ></section>
                                </section>
                            )
                        }
                    })
                }
            </section>
        </>
    )

}

export default BlogItem;