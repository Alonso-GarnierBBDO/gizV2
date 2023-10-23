import MapaSVGComponent from "./mapa/mapa_svg";
import Image from "next/image";
import MariposasColorsImage from '@/assets/img/mariposa_colors.svg';


function MapaComponent(){

    return (
        <>
            <section className="mapa_section">
                <section className="mapa_image">
                    <MapaSVGComponent/>
                </section>
                <section className="mapa_content">
                    <section className="image">
                        <Image src={MariposasColorsImage.src} alt="Mariposas a colors" width={100} height={100}/>
                    </section>
                    <section className="content">
                        <p>Tradicionalmente, la apicultura se desarrolla en <strong> Guanacaste, Península de Nicoya, Pacífico Central, Pacífico Norte, Pacífico Sur y Valle Central. </strong></p>
                        <p>Últimamente se han gestado esfuerzos en la zona Huetar Norte y la zona atlántica.</p>
                    </section>  
                </section>
            </section>
        </>
    )

}

export default MapaComponent;