import React from "react";

const Card = (props) => {
  return (
    <div className='card'>
      <h1>{props.name}</h1>
      <img src={props.img} alt={props.name} />
      <h4> {props.years} </h4>
      <h5> {props.alias} </h5>
      <h6> {props.party} </h6>
    </div>
  );
};

export default Card;
