'use client';

import { useEffect, useState } from "react"; 
import BannerImage from '@/assets/img/home_page.png';

function BannerComponent(){

    const [heightView, setHeightView] = useState(0);
    const styleBanner = {
        height: heightView,
        backgroundImage: `linear-gradient(0deg, rgb(255, 255, 255) 0%, rgba(255,254,253,0) 45%), url(${BannerImage.src})`,
    }

    

    useEffect(()=>{

        const headerElement : HTMLElement | null = document.querySelector('header nav');
        
        if(headerElement){
            setHeightView(window.innerHeight - headerElement.offsetHeight);
        }

    }, []);

    return (
        <>
            <section className="bannerHome" style={styleBanner}>
                <section className="circle">
                    <h1>Polinizar <br/> la tierra</h1>
                </section>
                <section className="content_absolute">
                    <p>Significa que las abejas y su vuelo garantizan la seguridad alimentaria de la población mundial.</p>
                    <section className="group">
                        <a href="">Únete</a>
                        <a href="">Soy apicultor</a>
                    </section>
                </section>
            </section>
        </>
    );

}

export default BannerComponent;