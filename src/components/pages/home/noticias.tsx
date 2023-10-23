'use client';

import Image from "next/image";
import AbejaImage from '@/assets/img/abeja_noticias.svg';
import ImagenNoticiaDestacada from '@/assets/img/imagen_destacada.png';
import EyeImage from '@/assets/img/eye.svg';
import CommentsImage from '@/assets/img/comments.svg';
import AbejaPostImage from '@/assets/img/abeja_post.png';
import AbejaPostDosImage from '@/assets/img/abeja_post_dos.png';
import AbejaPostTresImage from '@/assets/img/abeja_post_tres.png';
import SpinnerImage from '@/assets/img/spinner.svg';
import { useState } from "react";

function NoticiasComponent(){

    const [loading, setLoading] = useState(false);

    const noticiaDestacada = {
        image: ImagenNoticiaDestacada.src,
        title: 'Cuidados Esenciales para proteger a las abejas',
        introduction: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry"s standard',
        type: 'Noticias',
        comments: '104',
        views: '42700'
    }

    const allNoticias = [
        {
            image: AbejaPostImage.src,
            title: 'La biodiversidad de Costa Rica',
            type: 'Noticia',
            comments: '94',
            views: '32700'
        },
        {
            image: AbejaPostDosImage.src,
            title: 'Las abejas en Costa Rica',
            type: 'Noticia',
            comments: '52',
            views: '65640'
        },
        {
            image: AbejaPostTresImage.src,
            title: 'Apicultura en CR',
            type: 'Noticia',
            comments: '3200',
            views: '384000'
        }
    ]

    const newFormatNumber = (number : number ) => {
        if (number >= 1000000) {
            const millionValue = (number / 1000000).toFixed(1);
            return millionValue.endsWith('.0') ? millionValue.slice(0, -2) + 'M' : millionValue + 'M';
        } else if (number >= 1000) {
            const thousandValue = (number / 1000).toFixed(1);
            return thousandValue.endsWith('.0') ? thousandValue.slice(0, -2) + 'K' : thousandValue + 'K';
        }else{
            return number.toString();
        }
    }

    const moreBlogs = () => {
        setLoading(true);

        setTimeout(()=>{
            setLoading(false);
        }, 10000)

    }

    return(
        <>
            <section className="noticias_seccion">
                <section className="image_abeja">
                    <Image src={AbejaImage.src} alt="Imagen de abejas" width={100} height={100} />
                </section>
                <h2>Noticias</h2>
                <section className="noticia_destacada">
                    <section className="image">
                        <Image src={noticiaDestacada.image} alt="Imagen de noticia destacada" width={300} height={300} />
                    </section>
                    <section className="content">
                        <h3>{ noticiaDestacada.title }</h3>
                        <p>{noticiaDestacada.introduction}</p>
                    </section>
                    <a href="">Ver articulo / <span>{noticiaDestacada.type} </span></a>
                    <section className="visualizacion">
                        <section className="vistas">
                            <Image src={EyeImage} alt="Imagen de ojo" width={100} height={100}/>
                            <span> { newFormatNumber(Number(noticiaDestacada.views)) } </span>
                        </section>
                        <section className="comments">
                            <Image src={CommentsImage} alt="Imagen de ojo" width={100} height={100}/>
                            <span> { newFormatNumber(Number(noticiaDestacada.comments)) } Comments</span>
                        </section>
                    </section>
                </section>
                <section className="all_noticias">
                    {
                        allNoticias.map( ( item, key ) => {
                            return (
                                <section className="blog" key={key}>
                                    <section className="content">

                                        <h3>{item.title}</h3>
                                        <a href="">Ver articulo / <span>{item.type} </span></a>
                                        <section className="visualizacion">
                                            <section className="vistas">
                                                <Image src={EyeImage} alt="Imagen de ojo" width={100} height={100}/>
                                                <span> { newFormatNumber(Number(item.views)) } </span>
                                            </section>
                                            <section className="comments">
                                                <Image src={CommentsImage} alt="Imagen de ojo" width={100} height={100}/>
                                                <span> { newFormatNumber(Number(item.comments)) } Comments</span>
                                            </section>
                                        </section>

                                    </section>
                                    <section className="image">
                                        <Image src={item.image} alt="Imagen del blog" width={300} height={300}/>
                                    </section>
                                </section>
                            )
                        })
                    }
                </section>
                <section className="more_blogs">
                    <button onClick={moreBlogs} disabled={loading}>
                        Ver más
                        {
                            loading ? 
                                <span>
                                    <Image src={SpinnerImage.src} alt="Cargando" width={100} height={100} />
                                </span>
                                : ''
                        }
                    </button>
                </section>
            </section>
        </>
    )

}


export default NoticiasComponent;