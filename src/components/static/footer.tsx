/**
 * 
 * Footer of all pages
 * 
 */

import Image from "next/image";
import PolinizandoImage from '@/assets/img/polinizando_logo.svg';
import FacebookImage from '@/assets/img/facebook.svg';
import InstagramImage from '@/assets/img/instagram.svg';
import CoranaLogo from '@/assets/img/logo_corona_durada.png';
import IsCordLogo from '@/assets/img/logo_iscorp.png';
import GizLogo from '@/assets/img/GIZ_Log.svg';

function FooterComponent(){

    return (
        <>

            <footer>
                <section className="image">
                    <Image src={PolinizandoImage.src} alt="Polinizando imagen" width={300} height={300} />
                </section>
                <section className="red_social">
                    <p>Sé parte del movimiento</p>
                    <section>
                        <a href="https://www.facebook.com/people/Movimiento-Polinizando-Costa-Rica/100091540335375/" target="_black">
                            <Image src={FacebookImage.src} width={100} height={100} alt="Facebook logo" />
                        </a>
                        <hr />
                        <a href="https://www.instagram.com/movimiento_polinizando_cr/" target="_black">
                            <Image src={InstagramImage.src} width={100} height={100} alt="Instagram logo" />
                        </a>
                    </section>
                </section>
                <hr />
                <section className="aditional">
                    <p>Promovido por: 
                        <Image src={CoranaLogo.src} alt="Imagen de Corana Dorada" width={100} height={100}/>
                        <Image src={IsCordLogo.src} alt="Imagen de Is Cord" width={300} height={200}/>
                        <Image src={GizLogo.src} alt="Imagen de GIZ" width={100} height={100}/>
                    </p>
                </section>
            </footer>

        </>
    )

}


export default FooterComponent;