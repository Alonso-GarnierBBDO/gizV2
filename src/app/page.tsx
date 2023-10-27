import AboutComponent from "@/components/pages/home/about";
import ApiculturaComponent from "@/components/pages/home/apicultura";
import BannerComponent from "@/components/pages/home/banner";
import ConstribuirComponent from "@/components/pages/home/constribuir";
import ContactoFormComponent from "@/components/pages/home/contacto";
import EntrevistasComponent from "@/components/pages/home/entrevistas";
import MapaComponent from "@/components/pages/home/mapa";
import NoticiasComponent from "@/components/pages/home/noticias";
import PreguntasFrecuentesComponent from "@/components/pages/home/preguntas_frecuentes";
import QueBuscamosComponent from "@/components/pages/home/que_buscamos";
import SoyApilcultorComponent from "@/components/pages/home/soy_apicultor";


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
        <SoyApilcultorComponent/>
        <NoticiasComponent/>
        <PreguntasFrecuentesComponent/>
        <EntrevistasComponent/>
        <ContactoFormComponent/>
      </section>
    </>
  );

}

export default Home;