import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../images/img3.jpg";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
      />
    </>
  );
}

export default Service;
