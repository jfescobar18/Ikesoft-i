import React, { useState, useEffect } from "react";
import "./styles.scss";
import footerImage from "../../assets/img/footer.webp";
import footerImageDesk from "../../assets/img/footer_desk.webp";
import MainButton from "../MainButton";
import phoneIcon from "../../assets/img/phone.svg";
import emailIcon from "../../assets/img/email.svg";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.screen.width <= 767 ? setIsMobile(true) : setIsMobile(false);
  }, [window.screen.width]);

  const detectWindowSize = () => {
    window.innerWidth <= 767 ? setIsMobile(true) : setIsMobile(false);
  };

  window.onresize = detectWindowSize;

  return (
    <React.Fragment>
      <div className="footer-container">
        <div className="button-container">
          <MainButton
            type={"button"}
            onClick={() => {
              window.location.href = "/#contact";
            }}
            text={"Digitalizar mi negocio"}
          />
        </div>
        <img
          src={isMobile ? footerImage : footerImageDesk}
          alt="Ikersoft footer"
        />
        <div className="footer-icons">
          <div
            className="icon"
            onClick={() => {
              window.open("tel:5540706311", "_parent");
            }}
          >
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
