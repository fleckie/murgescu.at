import React from "react"
import skillsData from "../data/skillsData"
import GifPlayer from "react-gif-player"
import "../css/gifplayer.css"

function PreviewPlayer(props){
    let focusedElement = skillsData.find(item =>{
          return item.id === props.id
      })
    let gifPreview = focusedElement ? focusedElement.preview : null
    let gif = focusedElement ? focusedElement.gif : null
    let example = focusedElement ? focusedElement.example : null
    

     if (focusedElement != null) {
        return ( 
        <div className="preview">
            <h2>{example.name}</h2>
            <a href={example.link}>Git-Repo</a>
            <p>{example.description}</p>
        <GifPlayer
        gif={gif}
        still={gifPreview} />
        </div>
        )} 
     else {
         return <div></div>
     }
    }

  
export default PreviewPlayer