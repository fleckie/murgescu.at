import React from "react"

function ExperienceComponent(props){

    // eventuell hier animation definieren und Y-Verschiebung über id * Faktor lösen
    
    let containerStyle
    if (props.item.visibility === "start"){
        containerStyle = {
            animation: "exp-slide-in-bottom 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.3s both",
            animationDelay: props.item.id/8 + "s",
        }
    }
    else if (props.item.visibility === "focused") {
        containerStyle = {
            animation: "exp-focus" + props.item.id + " 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
        }   
    }

    else if (props.item.visibility === "rewind") {
        containerStyle = {
            animation: "exp-unfocus" + props.item.id + " 1s ease",
            animationDirection: "reverse"
        }
    }
    else if (props.item.visibility ==="hidden"){
        containerStyle = {
            /*animation: "fade-out 0.5s ease both",
            zIndex: "-2",*/
            visibility: "hidden"
        
        }
    }
    
        
    return(
        <div className="expInnerCard"
        onClick ={() => props.handleChange(props.item.id)}
        style= {containerStyle}>
            <h2>{props.item.timeframe}</h2>
            <h1> {props.item.name} </h1>
            <h3> {props.item.location}</h3>
            {props.item.visibility === "focused" && 
                    <p className="expDescription">{props.item.description}</p>
                }
        </div>
    )
}

export default ExperienceComponent