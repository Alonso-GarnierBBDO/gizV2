import AboutComponent from "@/components/pages/home/about";
import BannerComponent from "@/components/pages/home/banner";
import QueBuscamosComponent from "@/components/pages/home/que_buscamos";


function Home(){

  return(
    <>
      <section>
        <BannerComponent/>
        <AboutComponent/>
        <QueBuscamosComponent/>
      </section>
    </>
  );

}

export default Home;