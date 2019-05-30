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
    }

    handleChange(id){ 
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
        
        var edu = document.getElementsByClassName("eduContainer")[0];
        var edub = edu.getBoundingClientRect();
        console.log("parent=" ,edub);

        var card = document.getElementsByClassName("eduInnerCard")[1];
        var cardp = card.getBoundingClientRect();
        console.log("child=", cardp);
    }

    render(){
        
        const items = this.state.itemList.map(item => <EducationComponent key={item.id} item={item} handleChange ={this.handleChange} />)
        return(
            <div className="eduContainer" id="edu">
            {items}
            </div>
        )
    }
   
}

export default Education