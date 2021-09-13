import React from "react";

import "./style.css";

const Card = (props) => {
  console.log("props", props);
  return (
    <div className="cards">
      <div className="card">
        <img src={props.imgsrc} alt="myPic" className="card_img" />
        <div className="card_info">
          <span className="card_category">{props.tittle} </span>
          <h3 className="card_tittle">{props.sname}</h3>
          <a href={props.link} target="_blank">
            <button>watch Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
