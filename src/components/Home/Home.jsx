import React from "react";
import "./styles.scss";
import Navbar from "../Navbar";
import Carrousel from "../Carrousel";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Carrousel />
    </React.Fragment>
  );
};

export default Home;
