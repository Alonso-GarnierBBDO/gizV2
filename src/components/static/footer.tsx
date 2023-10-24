/**
 * 
 * Footer of all pages
 * 
 */

import Image from "next/image";
import PolinizandoImage from '@/assets/img/polinizando_logo.svg';
import FacebookImage from '@/assets/img/facebook.svg';
import InstagramImage from '@/assets/img/instagram.svg';

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
                        <a href="">
                            <Image src={FacebookImage.src} width={100} height={100} alt="Facebook logo" />
                        </a>
                        <hr />
                        <a href="">
                            <Image src={InstagramImage.src} width={100} height={100} alt="Instagram logo" />
                        </a>
                    </section>
                </section>
                <hr />
                <section className="aditional">
                    <p>Promovido por: Corona Dorada - IS - GIZ</p>
                </section>
            </footer>

        </>
    )

}


export default FooterComponent;