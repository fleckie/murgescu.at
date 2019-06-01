import React from "react"
import skillsData from "../data/skillsData"
import GifPlayer from "react-gif-player"
import "../css/gifplayer.css"

function PreviewPlayer(props){
    let focusedElement
    let url
    let gif
    focusedElement = skillsData.find(item =>{
          return item.id === props.id
      })

    url = focusedElement ? focusedElement.preview : ""
    gif = focusedElement ? focusedElement.gif : ""

     if (focusedElement != null) {
        return ( 
        <div className="preview">
        <GifPlayer
        gif={gif}
        still={url} 
        className="preview"/>
        }   
        </div>
        )}
     else {
         return <div></div>
     }
    }

  
export default PreviewPlayer