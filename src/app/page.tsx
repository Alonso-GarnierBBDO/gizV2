import AboutComponent from "@/components/pages/home/about";
import ApiculturaComponent from "@/components/pages/home/apicultura";
import BannerComponent from "@/components/pages/home/banner";
import ConstribuirComponent from "@/components/pages/home/constribuir";
import MapaComponent from "@/components/pages/home/mapa";
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
      </section>
    </>
  );

}

export default Home;