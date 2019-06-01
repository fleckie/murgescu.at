import React from "react"
import skillsData from "../data/skillsData"

function Previewloader(props){
    let focusedElement
    let url
    focusedElement = skillsData.find(item =>{
          return item.id === props.id
      })

    url = focusedElement ? focusedElement.preview : ""
     if (focusedElement != null) {
        return ( <img className="preview" src= {url}/>)
        }   
     else {
         return <div></div>
     }
    }

  
export default Previewloader