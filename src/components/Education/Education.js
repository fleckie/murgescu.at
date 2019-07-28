import React from "react";
import EducationComponent from "./EducationComponent";
import "./Education.css";
import data from "./educationData";

class Education extends React.Component {
  constructor() {
    super();
    this.state = {
      itemList: data
    };
    this.onClick = this.onClick.bind(this);
    this.updateFocusAnimation = this.updateFocusAnimation.bind(this);
  }

  // Initialisierung der Translate-Variablen für die Animationen
  updateFocusAnimation(id) {
    var root = document.querySelector(":root");
    var container = document.getElementsByClassName("eduContainer")[0];
    var containerProps = container.getBoundingClientRect();
    var card = document.getElementsByClassName("eduComponent")[id - 1];
    var cardProps = card.getBoundingClientRect();
    var parentY = containerProps.y;
    var childY = cardProps.y;
    var targetY = parentY - childY;
    var targetX = containerProps.width / 1.8;
    root.style.setProperty("--targetY", targetY + "px");
    root.style.setProperty("--targetX", targetX + "px");
    this.setState(prevState => {
      const updatedData = prevState.itemList.map(item => {
        if (item.status === "start") {
          root.style.setProperty("--originXEduId" + item.id, targetX + "px");
          root.style.setProperty("--originYEduId" + item.id, targetY + "px");
        }
        return item;
      });
      return {
        itemList: updatedData
      };
    });
  }

  onClick(id) {
    var w = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    console.log(w);
    if (w < 1100) {
      console.log("little screen")
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
    } else {
      this.updateFocusAnimation(id);
      console.log("big screen")
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
            if (item.status === "focused") {
              item.status = "rewind";
            }
          }
          return item;
        });
        return {
          itemList: updatedData
        };
      });
    }
  }

  componentDidMount() {
    this.setState(prevState => {
      const updatedState = prevState.itemList.map(item => {
        item.status = "start";
        return item;
      });
      return {
        itemList: updatedState
      };
    });
  }

  render() {
    const items = this.state.itemList.map(item => (
      <EducationComponent key={item.id} item={item} onClick={this.onClick} />
    ));
    return <div className="eduContainer">{items}</div>;
  }
}

export default Education;
