import React from "react";
import ExperienceComponent from "./ExperienceComponent";
import "./Experience.css";
import data from "./experienceData";

class Experience extends React.Component {
  constructor() {
    super();
    this.state = {
      itemList: data,
      focused: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(id) {
    this.setState(prevState => {
      const updatedData = prevState.itemList.map(item => {
        if (item.id === id) {
          if (item.status === "start") {
            item.status = "focused";
          } else if (item.status === "focused") {
            item.status = "rewind";
          } else if (item.status === "rewind") {
            item.status = "focused";
          }
        } else {
          if (item.status === "start") {
            item.status = "hidden";
          } else if (item.status === "focused") {
            item.status = "rewind";
          } else if (item.status === "hidden") {
            item.status = "start";
          } else if (item.status === "rewind") {
            item.status = "hidden";
          }
        }
        return item;
      });
      return {
        itemList: updatedData
      };
    });
  }

  componentDidMount() {
    this.setState(prevState => {
      const updatedState = prevState.itemList.map(item => {
        item.status = "start";
        return item;
      });
      return {
        itemList: updatedState,
        focused: true
      };
    });

  }

  render() {
    
    const items = this.state.itemList.map(item => (
      <ExperienceComponent
        key={item.id}
        item={item}
        onClick={this.onClick}
      />
    ));
    return <div className="expContainer">{items}</div>;
  }
}

export default Experience;
