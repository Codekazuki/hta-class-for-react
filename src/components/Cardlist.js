import React from "react";
import Card from "./Card";
import buhari from "../assets/images/buhari.webp";

const Cardlist = () => {
  return (
    <div className='list'>
      <Card
        name='Buhari'
        party='APC'
        alias='sai baba'
        years='2015 - 2023'
        img={buhari}
      />
      <Card name='Tinubu' />
    </div>
  );
};

export default Cardlist;
