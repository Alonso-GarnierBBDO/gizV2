import Image from "next/image";
import BackgroundImage from '@/assets/img/background_buscamos.png';

function QueBuscamosComponent(){

    return (
        <>
            <section className="queBuscamos">
                <h2>¿Qué buscamos?</h2>
                <section className="content">
                    <section className="list">
                        <ul>
                            <li>
                                <p>
                                    <strong>Generar mayor interés </strong>
                                    de la población de Costa Rica en los productos de la colmena.
                                </p>
                            </li>
                            <li>
                                <p><strong>Desarrollar capacidades en las personas apicultoras</strong> para la aplicación de mejores prácticas de producción sostenible de miel.</p>
                            </li>
                            <li>
                                <p><strong>Mejorar las condiciones ambientales y ecosistémicas</strong> para garantizar refugio y alimento a los distintos polinizadores.</p>
                            </li>
                            <li>
                                <p><strong>Mejorar los ingresos de las personas apicultoras</strong></p>
                            </li>
                        </ul>
                    </section>
                </section>
            </section>
        </>
    )

}

export default QueBuscamosComponent;