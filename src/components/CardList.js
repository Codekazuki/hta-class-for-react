import React from "react";
import Card from "./Card";
import obf from "../asset/images/obj.jfif";
import baaa from "../asset/images/boolu.jfif";

const CardList = () => {
  return (
    <div className='list'>
      <Card job='engineer' name='Buhari' img={obf} age={88} />
      <Card job='president' name='Jonathan' img={baaa} />
      <Card job='teacher' name='Tinubu' />
    </div>
  );
};

export default CardList;
