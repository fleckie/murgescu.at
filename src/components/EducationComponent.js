import React from "react"

function EducationComponent(props){

    // eventuell hier animation definieren und Y-Verschiebung über id * Faktor lösen
    
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    let containerStyle

    if (w < 1100){
        switch (props.item.stateCounter) {
            case 0:
                containerStyle = {
                    animation: "edu-slide-in-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both",
                    animationDelay: props.item.id/4 + "s",
                }
                break;
            case 1:
                containerStyle = {
                    animation: "move-mid 1s ease both"
                }
                break;
            case 2: {
                containerStyle = {
                    animation: "move-back 1s ease both"
                }
            }
        }
    }
    else {
        if (props.item.stateCounter === 0){
            containerStyle = {
                animation: "edu-slide-in-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both",
                animationDelay: props.item.id/4 + "s",
            }
        }
        else if (props.item.stateCounter === 1) {
            containerStyle = {
                animation: "edu-move-right" + props.item.id + " 1s ease both",
            }   
        }

        else if (props.item.stateCounter === 2) {
            containerStyle = {
                animation: "edu-move-left" + props.item.id + " 1s ease",
                animationDirection: "reverse"
            }
        }   
    }
        
        
    return(
        <div className="eduInnerCard" 
        onClick ={() => props.handleChange(props.item.id)}
        style= {containerStyle}>
            <h2>{props.item.timeframe}</h2>
            <h1> {props.item.name} </h1>
            <h3> {props.item.location}</h3>
            {props.item.stateCounter % 2 === 1 && 
                    <p className="eduDescription">{props.item.description}</p>
                }
    
        </div>
    )
}

export default EducationComponent