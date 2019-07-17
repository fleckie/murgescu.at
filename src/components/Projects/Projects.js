import React from "react"
import {ListItem, ExpandedListItem} from "./ProjectList"
import {Flipper, Flipped} from "react-flip-toolkit"
import projectsData from "./projectsData"
import PreviewPlayer from "./PreviewPlayer"

class Projects extends React.Component{
    constructor(){
        super()
        this.state = {
            focused: null
        }
        this.onClick = this.onClick.bind(this)
    }

    onClick(id){
        this.setState(prevState => {
            return {
                focused: prevState.focused === id ? null : id
            }
        })
    }
        
    render() {
        return (
            <div>
                <Flipper 
                flipKey={this.state.focused}
                className="staggered-list-content"
                spring="gentle"
                staggerConfig={{
                card: {
                    reverse: this.state.focused !== null,
                    speed: 0.5
                        }
                    }}
                decisionData={this.state.focused}>
                    <ul className="list">
                    {projectsData.map(item => {
                        return (
                        <li key={item.id}>
                            {item.id === this.state.focused ? (
                            <ExpandedListItem
                                id={this.state.focused}
                                onClick={this.onClick}
                                item = {item}
                            />
                            ) : (
                            <ListItem id={item.id} key={item.id} onClick={this.onClick} item={item} />
                            )}
                        </li>
                        );
                    })}
                    </ul>
               
                </Flipper>
                <PreviewPlayer id = {this.state.focused} />
                 </div>
        );
      }
}

export default Projects