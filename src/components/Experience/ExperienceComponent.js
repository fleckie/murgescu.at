import React from "react";
import expStyleHandler from "./expStyleHandler"


function ExperienceComponent(props) {
  return (
    <div 
      className="expInnerCard"
      onClick={() => props.onClick(props.item.id)}
      style={expStyleHandler(props)}
    >
      <h2>{props.item.timeframe}</h2>
      <h1> {props.item.name} </h1>
      <h3> {props.item.location}</h3>
      {props.item.status === "focused" && (
        <p className="expDescription">{props.item.description}</p>
      )}
    </div>
  );
}

export default ExperienceComponent;

