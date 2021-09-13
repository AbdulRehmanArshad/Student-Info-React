import React, { useState } from "react";
import Details from "./details";
import pic2 from "./pic2.png";
import pic3 from "./pic3.jpg";
import pic4 from "./pic4.jpg";

const Task = () => {
  const [car, setCar] = useState("");
  const [bike, setBike] = useState("");
  const [aeroplane, setAeroplane] = useState("");
  const [flag, setFlag] = useState(true);

  const handleClick = (val) => {
    if (car === "") {
      let carr =
        "https://upload.wikimedia.org/wikipedia/commons/e/eb/2011_Toyota_Corolla_--_NHTSA.jpg";

      setCar(carr);
    } else {
      setCar("");
    }
  };
  const bikeHandleClick = (params) => {
    if (bike === "") {
      setBike(
        "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
      );
    } else {
      setBike("");
    }
  };
  const aeroPlanehandleClick = (params) => {
    if (aeroplane === "") {
      setAeroplane(
        "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
      );
    } else {
      setAeroplane("");
    }
  };

  return (
    <>
      <div>
        <h1>Car</h1>
        <img src={car} alt="" />
        <button onClick={handleClick}>Car</button>
        <h1>Bike</h1>
        <img src={bike} alt="" />
        <button onClick={bikeHandleClick}>press me</button>
        <h1>Aeroplan</h1>
        <img src={aeroplane} alt="" />
        <button onClick={aeroPlanehandleClick}>press me</button>
      </div>
    </>
  );
};

export default Task;
