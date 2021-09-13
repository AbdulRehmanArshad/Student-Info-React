import React, { useState } from "react";

const Hoooks = () => {
  const [state, setstate] = useState(0);
  const addme = () => {
    setstate(state + 1);
  };
  return (
    <>
      <h1>{state}</h1>
      <button onClick={addme}>Add me</button>
    </>
  );
};

export default Hoooks;
