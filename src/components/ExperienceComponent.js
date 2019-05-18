import React from "react"
import styles from "../css/Experience.css"

function ExperienceComponent(props){

    // eventuell hier animation definieren und Y-Verschiebung über id * Faktor lösen
    
    
    let containerStyle
        if (props.item.stateCounter === 0){
            containerStyle = {
                animation: "exp-slide-in-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both",
                animationDelay: props.item.id/4 + "s",
              
            }
        }
        else if (props.item.stateCounter === 1) {
            containerStyle = {
                animation: "exp-move-right" + props.item.id + " 1s ease both",
            }   
        }

        else if (props.item.stateCounter === 2) {
            containerStyle = {
                animation: "exp-move-left" + props.item.id + " 1s ease",
                animationDirection: "reverse"
            }
        }
        
    return(
        <div className="expInnerCard"
        onClick ={() => props.handleChange(props.item.id)}
        style= {containerStyle}>
            <h2>{props.item.timeframe}</h2>
            <h1> {props.item.name} </h1>
            <h3> {props.item.location}</h3>
            {props.item.stateCounter % 2 === 1 && 
                    <p className="expDescription">{props.item.description}</p>
                }
        </div>
    )
}

export default ExperienceComponent