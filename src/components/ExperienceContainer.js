import React from "react"
import ExperienceComponent from "./ExperienceComponent"
import "../css/Experience.css"
import data from "../data/experience"

class Experience extends React.Component{
    constructor(){
        super();
        this.state = {
            itemList: data
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        setTimeout(() =>{
            this.setState(prevState =>{
                const updatedData = prevState.itemList.map(item =>{
                    if(item.id === id){
                       
                        if (item.stateCounter === 0){
                     
                            item.stateCounter = 1
                            
                        }
                        else if (item.stateCounter %2 === 0){
                            item.stateCounter = 1
                            console.log(item.stateCounter)
                        }
                        else if (item.stateCounter %2 === 1){
                            item.stateCounter = 2
                
                        }
                    }
                    else {
                        if(item.stateCounter === 0){
                            item.stateCounter = 0
                        }
                        else {
                            item.stateCounter = 2
                        }
                      
                    }
                    return item
                })
                return{
                    itemList: updatedData
                }
            })

        } ,0,id)
    }

    render(){
        const items = this.state.itemList.map(item => <ExperienceComponent key={item.id} item={item} handleChange ={this.handleChange} />)
        return(
            <div className="expContainer">
            {items}
            </div>
        )
    }
   
}

export default Experience