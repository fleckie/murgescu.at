import React from "react"
import EducationComponent from "./EducationComponent"
import "../css/Education.css"
import data from "../data/education"

class Education extends React.Component{
    constructor(){
        super();
        this.state = {
            itemList: data
        }
        this.handleChange = this.handleChange.bind(this)
        this.updateFocusAnimation = this.updateFocusAnimation.bind(this)
    }

    // Initialisierung der Translate-Variablen für die Animationen
    updateFocusAnimation(id){
        var root = document.querySelector(":root");
        var container = document.getElementsByClassName("eduContainer")[0];
        var containerProps = container.getBoundingClientRect();
        var card = document.getElementsByClassName("eduInnerCard")[id-1];
        var cardProps = card.getBoundingClientRect();
        var parentY = containerProps.y;
        var childY = cardProps.y;
        var targetY = parentY-childY;
        var targetX = containerProps.width/1.8;
        root.style.setProperty("--targetY", targetY + "px");
        root.style.setProperty("--targetX", targetX + "px");
        this.setState(prevState =>{
            const updatedData = prevState.itemList.map( item =>{
                if (item.status === "start"){
                    root.style.setProperty("--originXEduId" + item.id, targetX + "px");
                    root.style.setProperty("--originYEduId" + item.id, targetY + "px");
                }
                return item
            })
            return {
                itemList: updatedData
            }
        })
    }

    handleChange(id){
        this.updateFocusAnimation(id);
        this.setState(prevState =>{
            const updatedData = prevState.itemList.map(item =>{
                if (item.id === id) {
                    if (item.status === "start") {
                        item.status = "focused";
                    } else if (item.status === "focused") {
                        item.status = "rewind";
                    } else if (item.status === "rewind") {
                        item.status = "focused";
                    }
                }
                else{
                    if (item.status === "focused"){
                        item.status = "rewind"
                    }
                }
                    return item;
                });
                return {
                    itemList: updatedData
            }
        })
    }

    componentDidMount() {
        this.setState(prevState =>{
            const updatedState = prevState.itemList.map(item =>{
                item.status = "start"
                return item
            })
            return {
                itemList: updatedState
            }
        })


        //this.props.changeBackground("lightgreen", "edu");
    }

    render(){
        
        const items = this.state.itemList.map(item => <EducationComponent key={item.id} item={item} handleChange ={this.handleChange} />)
        return(
            <div className="eduContainer">
            {items}
            </div>
        )
    }
   
}

export default Education