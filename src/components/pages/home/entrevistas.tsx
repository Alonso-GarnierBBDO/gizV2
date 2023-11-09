import Image from "next/image";
import BorbujaImagen from '@/assets/img/borbuja_dos.png';
import MariposasColorsImage from '@/assets/img/mariposa_colors.svg';

function EntrevistasComponent(){


    const entrevistas = [
        {
            title: "Jhosman Salas, Puntarenas",
            content: "Sin abejas el mundo deja de existir, es uno de los pilares de la conservación y el desarrollo de los ecosistemas"
        },
        {
            title: "Guillermo Baltodano, Liberia",
            content: "Lo que debe suceder es lo que ha sucedido en productos como el café, darle la misma importancia, así como era bueno para exportación que también el producto sea consumido en el país"
        },
        {
            title: "Apolinar Díaz, Nicoya",
            content: "Hay que fomentar la reproducción de las abejas, porque sabemos que el día que desaparezcan, el mundo entero desaparecería"
        },
    ]

    
    return (
        <>
            <section className="entrevistas_component" id="seamos-voz">
                <section className="principal">
                    <section className="borbula">
                        <Image src={BorbujaImagen.src} alt="Imagen de personas con abejas" width={500} height={500} />
                    </section>
                </section>
                <h2>Seamos voz <br/> <span>para las abejas</span></h2>
                <section className="entrevistas">
                    {
                        entrevistas.map( (item, key) => {
                            return (
                                <section className="entrevista" key={key}>
                                    <p>&quot;{item.content}&quot;</p>
                                    <span>{ item.title }</span>
                                    <section className="abeja_item">
                                        <Image src={MariposasColorsImage} alt="Mariposas de colores" width={150} height={150} />
                                    </section>
                                </section>
                            )
                        })
                    }
                </section>
            </section>
        </>
    )

}

export default EntrevistasComponent;