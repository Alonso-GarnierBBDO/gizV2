import AboutComponent from "@/components/pages/home/about";
import BannerComponent from "@/components/pages/home/banner";


function Home(){

  return(
    <>
      <section>
        <BannerComponent/>
        <AboutComponent/>
      </section>
    </>
  );

}

export default Home;