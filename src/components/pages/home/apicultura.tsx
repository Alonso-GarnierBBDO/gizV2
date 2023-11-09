import Image from "next/image";
import PersonasAbejasImage from '@/assets/img/personas_obteniendo_avejas.png';

function ApiculturaComponent(){

    return (
        <>
            <section className="apicultura_section" id="apicultura">
                <section className="content_image">
                    <section className="image">
                        <Image src={PersonasAbejasImage.src} alt="Imagen de personas" width={700} height={700} />
                    </section>
                </section>
                <section className="content_title">
                    <h2>Apicultura en <br/> Costa Rica</h2>
                    <section className="content">
                        <p>La apicultura produce importantes beneficios por medio de la acción polinizadora de las abejas. </p>
                        <p>
                            <strong>Gracias al clima y biodiversidad de Costa Rica, somos un lugar propicio para la cría de abejas y la producción de miel y otros productos apícolas. </strong>
                        </p>
                        <p>Es decir, que la apicultura sostenible además de beneficiar al equilibrio ecológico también constituye una importante actividad económica.</p>
                        <p>En Costa Rica, se promueve la apicultura sostenible y se busca evitar el uso excesivo de pesticidas en las zonas donde se crían las abejas. </p>
                        <p>
                            <strong>Costa Rica es el país que más rápido a revertido la deforestación, teniendo hoy en día 52% de territorio boscoso.</strong>
                        </p>
                        <p>
                            La calidad de la miel costarricense es <strong> reconocida internacionalmente.</strong>
                        </p>
                    </section>
                </section>
            </section>
        </>
    )

}

export default ApiculturaComponent;