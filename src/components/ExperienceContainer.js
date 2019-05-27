import React from "react"
import ExperienceComponent from "./ExperienceComponent"
import "../css/Experience.css"
import data from "../data/experience"

class Experience extends React.Component{
    constructor(){
        super();
        this.state = {
            itemList: data,
            focused: false
        }
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(id){
        setTimeout(() =>{
            this.setState(prevState =>{
                const updatedData = prevState.itemList.map(item =>{
                    if(item.id === id){
                       
                        if (item.visibility === "start"){
                     
                            item.visibility = "focused"
                            
                        }
                        else if (item.visibility === "focused"){
                            item.visibility = "rewind"
                        }
                        else if (item.visibility === "rewind"){
                            item.visibility = "focused"
                
                        }
                    }
                    else {
                        if(item.visibility === "start"){
                            item.visibility = "hidden"
                        }
                        else if (item.visibility === "focused") {
                            item.visibility = "rewind"
                        }
                        else if (item.visibility === "hidden"){
                            item.visibility = "start"
                        }
                        else if (item.visibility === "rewind"){
                            item.visibility = "hidden"

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
   

    componentDidMount() {
        this.setState(prevState =>{
            const updatedState = prevState.itemList.map(item =>{
                item.visibility = "start"
                return item
            })
            return {
                itemList: updatedState,
                focused: true
            }
        })
       
        //this.props.changeBackground("yellowgreen", "exp");
    }

  
    render(){
      
        const style = {
         
        }
        const items = this.state.itemList.map(item => <ExperienceComponent key={item.id} item={item} handleChange ={this.handleChange} />)
        return(
            <div className="expContainer" style={style}>
            {items}
            </div>
        )
    }
   
}

export default Experience