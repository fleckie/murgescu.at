import React from "react"
import {ListItem, ExpandedListItem} from "./SkillList"
import listData from "../data/listData"
import {Flipper, Flipped} from "react-flip-toolkit"

class Privat extends React.Component{
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
                    {listData.map(id => {
                        return (
                        <li key={id}>
                            {id === this.state.focused ? (
                            <ExpandedListItem
                                id={this.state.focused}
                                onClick={this.onClick}
                            />
                            ) : (
                            <ListItem id={id} key={id} onClick={this.onClick} />
                            )}
                        </li>
                        );
                    })}
                    </ul>
                </Flipper>
                 </div>
        );
      }
}

export default Privat