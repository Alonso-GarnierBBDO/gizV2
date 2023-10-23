import AboutComponent from "@/components/pages/home/about";
import ApiculturaComponent from "@/components/pages/home/apicultura";
import BannerComponent from "@/components/pages/home/banner";
import ConstribuirComponent from "@/components/pages/home/constribuir";
import MapaComponent from "@/components/pages/home/mapa";
import NoticiasComponent from "@/components/pages/home/noticias";
import PreguntasFrecuentesComponent from "@/components/pages/home/preguntas_frecuentes";
import QueBuscamosComponent from "@/components/pages/home/que_buscamos";


function Home(){

  return(
    <>
      <section>
        <BannerComponent/>
        <AboutComponent/>
        <QueBuscamosComponent/>
        <ConstribuirComponent/>
        <ApiculturaComponent/>
        <MapaComponent/>
        <NoticiasComponent/>
        <PreguntasFrecuentesComponent/>
      </section>
    </>
  );

}

export default Home;