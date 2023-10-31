import Image from "next/image";
import AbejaImage from '@/assets/img/abeja_noticias.svg';
import DescargarIcon from '@/assets/img/descarga.svg';
import DescargarGoogleImage from '@/assets/img/descarga_google.svg';
import DescargarAppleImage from '@/assets/img/descargar_apple.svg';
import EmailContactImage from '@/assets/img/email_contact.svg';
import PhoneContactImage from '@/assets/img/phone_contact.svg';

function SoyApilcultorComponent(){


    return (
        <>
            <section className="soy_apicultor_component" id="soy-apicultor">
                <section className="image_abeja">
                    <Image src={AbejaImage.src} alt="Imagen de abejas" width={100} height={100} />
                </section>
                <section className="content">
                    <section>
                        <h2>Soy Apicultor</h2>
                        <p>Si sos apicultor, te invitamos a continuar con tu desarrollo y capacitación. Pronto te informaremos sobre los talleres y recursos que tenemos para apoyar tu labor.</p>
                        <a href="#" className="descarga">
                            <Image src={DescargarIcon.src} alt="Logo descargar" width={100} height={100} />
                            Cuaderno del Apicultor
                        </a>
                    </section>
                    <section>
                        <h3>Descarga la app del Apicultor</h3>
                        <section className="application">
                            <a href="#">
                                <Image src={DescargarGoogleImage.src} alt="Logo de descargar de imagen de google" width={200} height={200} />
                            </a>
                            <a href="#">
                                <Image src={DescargarAppleImage.src} alt="Logo de descargar de imagen de apple" width={200} height={200} />
                            </a>
                        </section>
                        <section className="contact_icons">
                            <a href="#">
                                <Image src={EmailContactImage.src} alt="Image de correo electronico" width={100} height={100} />
                            </a>
                            <a href="#">
                                <Image src={PhoneContactImage.src} alt="Image de telefono" width={100} height={100} />
                            </a>
                        </section>
                    </section>
                </section>
            </section>
        </>
    )

}


export default SoyApilcultorComponent;