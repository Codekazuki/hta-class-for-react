import React from "react";
import obf from "../asset/images/obj.jfif";

const Card = () => {
  return (
    <div>
      <h2>Olusegun Obasanjo</h2>
      <img src={obf} alt='' />
      <h4>1999-2003</h4>
      <h4>PDP</h4>
      <h5>Atiku Abubakar</h5>
    </div>
  );
};

export default Card;
