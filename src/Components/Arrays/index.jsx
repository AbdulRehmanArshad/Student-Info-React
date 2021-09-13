import React, { Component } from "react";
import Card from "./card";
import Sdata from "./Sdata";

const Arrays = () => {
  return (
    <div>
      <>
        <Card
          imgsrc={Sdata[0].imgsrc}
          link={Sdata[0].link}
          tittle={Sdata[0].tittle}
          sname={Sdata[0].sname}
        />
        <Card
          imgsrc={Sdata[1].imgsrc}
          link={Sdata[1].link}
          tittle={Sdata[1].tittle}
          sname={Sdata[1].sname}
        />
        <Card
          imgsrc={Sdata[2].imgsrc}
          link={Sdata[2].link}
          tittle={Sdata[2].tittle}
          sname={Sdata[2].sname}
        />
      </>
    </div>
  );
};

export default Arrays;
