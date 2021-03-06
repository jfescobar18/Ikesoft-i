import React from "react";
import "./styles.scss";

const MainButton = (props) => {
  return (
    <React.Fragment>
      <button type={props.type} onClick={props.onClick} className="mainButton">
        {props.text}
      </button>
    </React.Fragment>
  );
};

export default MainButton;
