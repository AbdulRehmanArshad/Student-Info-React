import React, { Component } from "react";
import Card from "./card";
import Sdata from "./Sdata";

const Arrays2 = () => {
  return (
    <>
      {Sdata.map((val, index) => {
        console.log(index, "index");
        console.log(val, "val");

        return (
          <Card
            imgsrc={val.imgsrc}
            link={val.link}
            tittle={val.tittle}
            sname={val.sname}
          />
        );
      })}
    </>
  );
};
export default Arrays2;
