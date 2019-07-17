import React from "react"
import eduStyleHandler from "./eduStyleHandler"

function EducationComponent(props){
    return(
        <div className="eduInnerCard" 
        onClick ={() => props.handleChange(props.item.id)}
        style= {eduStyleHandler(props)}>
            <h2>{props.item.timeframe}</h2>
            <h1> {props.item.name} </h1>
            <h3> {props.item.location}</h3>
            {props.item.status === "focused" && 
                <p className="eduDescription">{props.item.description}</p>
            }
        </div>
    )
}
export default EducationComponent