import React from "react";
import "./styles.scss";
import deeco from "../../assets/img/deeco.png";
import bt from "../../assets/img/bt.png";
import gala from "../../assets/img/gala.png";
import premiumGoods from "../../assets/img/premiumGoods.png";
import etr from "../../assets/img/etr.png";
import kua from "../../assets/img/kua.png";
import zuu from "../../assets/img/zuu.png";
import medix from "../../assets/img/medix.png";

const Clients = () => {
  return (
    <React.Fragment>
      <div className="clients-container">
        <h1>Algnos Clientes</h1>
        <div className="row">
          <div className="client-image">
            <img className="rectangular" src={deeco} alt="deeco" />
          </div>
          <div className="client-image">
            <img className="rectangular" src={bt} alt="bt" />
          </div>
        </div>
        <div className="row">
          <div className="client-image">
            <img className="rectangular" src={gala} alt="gala" />
          </div>
          <div className="client-image">
            <img className="rectangular" src={premiumGoods} alt="premiumGoods" />
          </div>
        </div>
        <div className="row">
          <div className="client-image">
            <img className="square" src={etr} alt="etr" />
          </div>
          <div className="client-image">
            <img className="square" src={kua} alt="kua" />
          </div>
        </div>
        <div className="row">
          <div className="client-image">
            <img className="square" src={zuu} alt="zuu" />
          </div>
          <div className="client-image">
            <img className="square" src={medix} alt="medix" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Clients;
