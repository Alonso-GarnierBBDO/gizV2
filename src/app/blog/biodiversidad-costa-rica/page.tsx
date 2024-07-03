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