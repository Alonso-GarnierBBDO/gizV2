'use client';

import { useEffect, useState } from "react"; 
import BannerImage from '@/assets/img/home_page.png';

function BannerComponent(){

    const [heightView, setHeightView] = useState(0);
    const styleBanner = {
        height: heightView,
        backgroundImage: `url(${BannerImage.src})`,
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
                <section>
                    <h1>Polinizar <br/> la tierra</h1>
                </section>
            </section>
        </>
    );

}

export default BannerComponent;