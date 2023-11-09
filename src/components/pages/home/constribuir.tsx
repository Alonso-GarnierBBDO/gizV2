import Image from "next/image";
import MariposasColorsImage from '@/assets/img/mariposa_colors.svg';
import SenasaImage from '@/assets/img/senasa.png';
import AgriculturaImage from '@/assets/img/agricultira.png';
import DosPinosImage from '@/assets/img/dos_pinos.png';
import UNAImage from '@/assets/img/una.png';
import HexagonoSVGComponent from "./constribuir/hexagono_svg";

// Corona morada

import CoronaImage from '@/assets/img/logo_corona_durada.png';
import GizImage from '@/assets/img/giz_logo.png';
import ISImage from '@/assets/img/logo_iscorp.jpg';

function ConstribuirComponent(){

    return (
        <>
            <section className="constribuir_section">
                <section className="header">
                    <section className="content-header">
                        <section className="image">
                            <Image src={MariposasColorsImage.src} alt="Mariposas a colors" width={100} height={100}/>
                        </section>
                        <section className="title">
                            <h2>¡Todas las personas podemos contribuir!</h2>
                        </section>
                    </section>
                </section>
                <section className="content">
                    <section className="content_sections">
                        <p>El Movimiento Polinizando Costa Rica es el resultado de alianzas públicas y privadas, nacionales e internacionales: IS Corporación, Corona Dorada y la GIZ (Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH.</p>
                        <div className="escritorio">
                            <p>Las acciones de este Movimiento <strong> traen beneficios directos al sector apícola y consumidores de miel, pero también impactan los Objetivos de Desarrollo Sostenible de Naciones Unidas,</strong> en áreas como crecimiento económico sostenible e inclusivo y prosperidad de la biodiversidad.</p>
                            <p>Por ello, toda la población en general es beneficiada con este proyecto, y todos podemos contribuir.</p>
                            <p>Las siguientes agencias de gobierno y entidades participaron como colaboradores en el proyecto:</p>
                        </div>
                    </section>
                    <section className="exagono">
                        <div>
                            <section className="content_hexagono">
                                <HexagonoSVGComponent/>
                                <section className="white">
                                    <HexagonoSVGComponent/>
                                </section>
                                <section className="text">
                                    <p>Sociedad General</p>
                                </section>
                            </section>
                        </div>
                        <div>
                            <section className="content_hexagono">
                                <HexagonoSVGComponent/>
                                <section className="white">
                                    <HexagonoSVGComponent/>
                                </section>
                                <section className="text">
                                    <p>Corona Dorada</p>
                                    <div className="img">
                                        <Image src={CoronaImage.src} alt="Corona img" width={200} height={200} />
                                    </div>
                                </section>
                            </section>
                        </div>
                        <div>
                            <section className="content_hexagono">
                                <HexagonoSVGComponent/>
                                <section className="white">
                                    <HexagonoSVGComponent/>
                                </section>
                                <section className="text">
                                    <p>Polinizadores y Medio Ambiente</p>
                                </section>
                            </section>
                        </div>
                        <div>
                            <section className="content_hexagono">
                               <HexagonoSVGComponent/>
                               <section className="white">
                                    <HexagonoSVGComponent/>
                                </section>
                                <section className="text">
                                    <p>GIZ</p>  
                                    <div className="img">
                                        <Image src={GizImage.src} alt="Giz img" width={200} height={200} />
                                    </div>
                                </section>
                            </section>
                        </div>
                        <div>
                            <section className="content_hexagono">
                                <HexagonoSVGComponent/>
                                <section className="white">
                                    <HexagonoSVGComponent/>
                                </section>
                                <section className="text">
                                    <p>Personas Apicultoras</p>
                                </section>
                            </section>
                        </div>
                        <div>
                            <section className="content_hexagono">
                                <HexagonoSVGComponent/>
                                <section className="white">
                                    <HexagonoSVGComponent/>
                                </section>
                                <section className="text">
                                    <p>IS</p>
                                    <div className="img">
                                        <Image src={ISImage.src} alt="IS img" width={200} height={200} />
                                    </div>
                                </section>
                            </section>
                        </div>
                        <div>
                            <section className="content_hexagono">
                                <HexagonoSVGComponent/>
                                <section className="white">
                                    <HexagonoSVGComponent/>
                                </section>
                                <section className="text">
                                    <p>Abejas</p>
                                </section>
                            </section>
                        </div>
                    </section>
                    <div className="mobile">
                        <p>Las acciones de este Movimiento <strong> traen beneficios directos al sector apícola y consumidores de miel, pero también impactan los Objetivos de Desarrollo Sostenible de Naciones Unidas,</strong> en áreas como crecimiento económico sostenible e inclusivo y prosperidad de la biodiversidad.</p>
                        <p>Por ello, toda la población en general es beneficiada con este proyecto, y todos podemos contribuir.</p>
                        <p>Las siguientes agencias de gobierno y entidades participaron como colaboradores en el proyecto:</p>
                    </div>
                </section>
                {/* <section className="images">
                    <Image src={SenasaImage.src} alt="Imagen de Senasa" width={200} height={200}/>
                    <Image src={AgriculturaImage.src} alt="Imagen de agricultura" width={200} height={200}/>
                    <Image src={DosPinosImage.src} alt="Imagen de dos pinos" width={200} height={200}/>
                    <Image src={UNAImage.src} alt="Imagen de la UNA" width={200} height={200}/>
                </section> */}
            </section>
        </>
    )

}

export default ConstribuirComponent;