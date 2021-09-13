import React from "react";
const Details = (props) => {
  return (
    <div>
      <h1> {props.title}</h1>
      <button onClick={props.handleClick}>{props.buttonText}</button>
      <img src={props.imgSrc} alt="" />
    </div>
  );
};

export default Details;
