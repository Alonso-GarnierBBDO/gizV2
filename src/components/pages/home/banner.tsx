'use client';

import { useEffect, useState } from "react"; 
import BannerImage from '@/assets/img/home_page.png';
import BannerImageMobile from '@/assets/img/home_page_mobile.png';

function BannerComponent(){

    const [heightView, setHeightView] = useState(0);
    const [bannerImage, setBannerImage] = useState(`linear-gradient(0deg, rgb(255, 255, 255) 0%, rgba(255,254,253,0) 60%), url(${BannerImage.src})`);

    const styleBanner = {
        height: heightView,
        backgroundImage: bannerImage,
    }

    

    useEffect(()=>{

        const headerElement : HTMLElement | null = document.querySelector('header nav');
        
        if(headerElement){
            setHeightView(window.innerHeight - headerElement.offsetHeight);
        }

        if(window.innerWidth < 900){
            setBannerImage(`linear-gradient(0deg, rgb(255, 255, 255) 0%, rgba(255,254,253,0) 60%), url(${BannerImageMobile.src})`);
        }


    }, []);

    return (
        <>
            <section className="bannerHome" style={styleBanner}>
                <section className="circle">
                    <h1>Polinizar <br/> la tierra</h1>
                </section>
                <section className="content_absolute" id='quienes'>
                    <p>Significa que las abejas y su vuelo garantizan la seguridad alimentaria de la población mundial.</p>
                    {/* <section className="group">
                        <a href="">Únete</a>
                        <a href="">Soy apicultor</a>
                    </section> */}
                </section>
            </section>
        </>
    );

}

export default BannerComponent;