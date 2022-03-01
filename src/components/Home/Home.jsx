import React from "react";
import "./styles.scss";
import Navbar from "../Navbar";
import Carrousel from "../Carrousel";
import Spacer from "../Spacer";
import ExecutiveContent from "../ExecutiveContent";
import Banner from "../Banner";
import firstBanner from "../../assets/img/ikesoft1.jpg";
import BusinessContent from "../BusinessContent";
import secondBanner from "../../assets/img/ikesoft2.jpg";
import Clients from "../Clients";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Carrousel />
      <Spacer />
      <ExecutiveContent />
      <Banner img={firstBanner} alt="Ikesoft 1" />
      <Spacer />
      <BusinessContent />
      <Banner img={secondBanner} alt="Ikesoft 2" />
      <Spacer />
      <Clients />
    </React.Fragment>
  );
};

export default Home;
