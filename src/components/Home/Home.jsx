import React from "react";
import "./styles.scss";
import Navbar from "../Navbar";
import Carrousel from "../Carrousel";
import Spacer from "../Spacer";
import ExecutiveContent from "../ExecutiveContent";
import Banner from "../Banner";
import firstBanner from "../../assets/img/ikesoft1.webp";
import BusinessContent from "../BusinessContent";
import secondBanner from "../../assets/img/ikesoft2.webp";
import Clients from "../Clients";
import Contact from "../Contact";
import Footer from "../Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Carrousel />
      <Spacer />
      <span className="slideTo" id="plans"></span>
      <ExecutiveContent />
      <Banner img={firstBanner} alt="Ikesoft 1" />
      <Spacer />
      <BusinessContent />
      <Banner img={secondBanner} alt="Ikesoft 2" />
      <Spacer />
      <span className="slideTo" id="clients"></span>
      <Clients />
      <Spacer />
      <span className="slideTo" id="contact"></span>
      <Contact />
      <Spacer />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
