import React from "react";
import "./styles.scss";
import Navbar from "../Navbar";
import Carrousel from "../Carrousel";
import Spacer from "../Spacer";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Carrousel />
      <Spacer />
    </React.Fragment>
  );
};

export default Home;
