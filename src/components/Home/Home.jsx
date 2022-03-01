import React from "react";
import "./styles.scss";
import Navbar from "../Navbar";
import Carrousel from "../Carrousel";
import Spacer from "../Spacer";
import ExecutiveContent from "../ExecutiveContent";
import firstBanner from "../../assets/img/ikesoft1.jpg";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Carrousel />
      <Spacer />
      <ExecutiveContent />
      
      <Spacer />
    </React.Fragment>
  );
};

export default Home;
