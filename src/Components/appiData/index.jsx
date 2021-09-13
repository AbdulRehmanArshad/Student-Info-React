import React, { useState } from "react";
import Accordine from "./accordine";
import apiData from "./appData";

function Paper() {
  const [paper, setpaper] = useState(apiData);

  return (
    <div style={{ border: "50px solid black" }} className="main-div">
      {paper.map((ele) => {
        return (
          <>
            <Accordine {...ele} />
          </>
        );
      })}
    </div>
  );
}

export default Paper;
