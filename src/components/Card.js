import React from "react";

const Card = (props) => {
  return (
    <div className='card'>
      <h2>{props.job}</h2>
      <img src={props.img} alt={props.name} />
      <h4>{props.name}</h4>
      <h1>{props.age}</h1>
      <h4>PDP</h4>
      <h5>Atiku Abubakar</h5>
    </div>
  );
};

export default Card;
