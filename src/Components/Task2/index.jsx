import React, { useState } from "react";
import Details from "./detail";

const Taskprpps = () => {
  const [car, setCar] = useState("");
  const [bike, setBike] = useState("");
  const [aeroplane, setAeroplane] = useState("");

  const carClick = (params) => {
    console.log("object");
    setCar(
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
    );
  };
  const bikeClick = (params) => {};
  const aeroplaneClick = (params) => {};

  return (
    <div>
      <>
        <Details
          tittle="carr"
          imgSrc={car}
          buttonText="Car"
          button={carClick}
        />
        <Details
          tittle="Bike"
          imgSrc="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
          buttonText="bike"
          button={(onclick = { bikeClick })}
        />
        <Details
          tittle="aeroplane"
          imgSrc="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
          buttonText="Aeroplane"
          button={(onclick = { aeroplaneClick })}
        />
      </>
    </div>
  );
};

export default Taskprpps;
