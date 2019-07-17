import React from "react"
import {ListItem, ExpandedListItem} from "../Projects/ProjectList"
import listData from "../Projects/listData"
import {Flipper, Flipped} from "react-flip-toolkit"

class Privat extends React.Component{
    constructor(){
        super()
        this.state = {
            focused: null
        }
    }
        
    render() {
        return (
            <div>
                in Progress
            </div>
        );
      }
}

export default Privat