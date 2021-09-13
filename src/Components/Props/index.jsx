import React, { Component } from "react";
import Card from "./card";
import pic1 from "./pic1.jpg";

const Propss = () => {
  return (
    <div>
      <>
        <Card
          imgsrc={pic1}
          link="https://www.imdb.com/title/tt5753856/"
          tittle="A netflix orignal series"
          sname="Dark"
        />
        <Card
          imgsrc={pic1}
          link="https://www.imdb.com/title/tt5753856/"
          tittle="A netflix orignal series"
          sname="Dark"
        />
        <Card
          imgsrc={pic1}
          link="https://www.imdb.com/title/tt5753856/"
          tittle="A netflix orignal series"
          sname="Dark"
        />
      </>
    </div>
  );
};

export default Propss;
