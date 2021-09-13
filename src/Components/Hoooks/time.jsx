import React, { useState } from "react";

const Time = () => {
  let dateTime = new Date().toLocaleTimeString();
  const [state, setstate] = useState(dateTime);

  const updateTime = (params) => {
    dateTime = new Date().toLocaleTimeString();

    setstate(dateTime);
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={updateTime}>Click me</button>
    </div>
  );
};

export default Time;
