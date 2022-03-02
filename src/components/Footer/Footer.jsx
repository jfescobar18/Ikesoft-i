import React from "react";
import "./styles.scss";
import footerImage from "../../assets/img/footer.webp";
import MainButton from "../MainButton";
import phoneIcon from "../../assets/img/phone.svg";
import emailIcon from "../../assets/img/email.svg";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer-container">
        <div className="button-container">
          <MainButton
            type={"button"}
            onClick={() => {}}
            text={"Digitalizar mi negocio"}
          />
        </div>
        <img src={footerImage} alt="Ikersoft footer" />
        <div className="footer-icons">
          <div className="icon">
            <img src={phoneIcon} alt="phoneIcon" />
            <p>55 4070 6311</p>
          </div>
          <div className="icon">
            <img src={emailIcon} alt="emailIcon" />
            <p>ventas@ikesofti.com</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
