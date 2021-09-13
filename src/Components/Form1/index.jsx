import React, { useState } from "react";

const Form1 = () => {
  const [name, setName] = useState("");
  const [fullname, setFullname] = useState("");
  const event = (obj) => {
    setName(obj.target.value);
  };
  const handleClick = (params) => {
    setFullname(name);
  };

  return (
    <div>
      <h1> Hello, {fullname} Arshad</h1>
      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={event}
        value={name}
      />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Form1;
