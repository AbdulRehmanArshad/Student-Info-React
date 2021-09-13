import React, { useState } from "react";
import apiData from "./appData";

const Accordine = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <p
        style={{ cursor: "cell" }}
        className="text-black-50 text-center s-xl-1"
        onClick={() => setShow(!show)}
      >
        🚚
      </p>
      <h1 className="text-black-50 text-center s-xl-1">{question}</h1>

      {show && <p className="text-black-50 text-center s-xl-1">{answer}</p>}
    </div>
  );
};

export default Accordine;
