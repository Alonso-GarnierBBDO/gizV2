// import BackgroundAbout from '@/assets/img/about_background.png';
import Image from 'next/image';
import MariposaImage from '@/assets/img/mariposa.svg';

function AboutComponent(){

    const styleAbout = {

        // backgroundImage: `url(${BackgroundAbout.src})`,

    }

    return (
        <>
            <section className="about_home" style={styleAbout}>
                <section>
                    <h2>¿Quiénes  somos?</h2>
                    <p>Somos un movimiento a través del cual pretendemos llegar a la mayor cantidad de personas con información de valor, que les permita conocer <strong> la importancia de la polinización en la vida y la alimentación mundial</strong>, aplicar consejos para cuidar a las abejas y maneras de aportar para hacer la diferencia.</p>
                </section>
                <section className='image'>
                    <Image src={MariposaImage.src} alt='Mariposa imagen' width={70} height={70}/>
                </section>
                <section>
                    <h2>Nuestro propósito</h2>
                    <p>Trabajamos para mejorar las condiciones para una producción sostenible de miel en Costa Rica, aplicando mejores prácticas, comercio justo, aumentando la capacidad de polinización y fortaleciendo la biodiversidad.</p>
                </section>
            </section>
        </>
    )

}

export default AboutComponent;