import React from "react";
import "./styles.scss";

const Banner = (props) => {
  return (
    <React.Fragment>
      <div className="banner-content">
        <img src={props.img} alt={props.alt} />
      </div>
    </React.Fragment>
  );
};

export default Banner;
