import React, { useState } from "react";
const carClick = (params) => {
  let car =
    "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png";
};
const bikeClick = (params) => {};
const aeroplaneClick = (params) => {};

const Details = (props) => {
  return (
    <div>
      <h1> {props.tittle}</h1>
      <button></button>
      <button onClick={props.button}>CAr</button>

      <img src={props.imgSrc} alt="" />
    </div>
  );
};

export default Details;
