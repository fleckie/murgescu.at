import React from "react";
import "./Projects.css";
import listData from "./listData";
import { Flipped } from "react-flip-toolkit";

const shouldFlip = id => (prevDecisionData, currentDecisionData) =>
  id === prevDecisionData || id === currentDecisionData;

function ListItem(props) {
  return (
    <Flipped
      flipId={`listItem-${props.id}`}
      stagger="card"
      shouldInvert={shouldFlip(props.id)}
    >
      <div className="listItem" onClick={() => props.onClick(props.id)}>
        <Flipped inverseFlipId={`listItem-${props.id}`}>
          <div className="listItemContent">
            <Flipped
              flipId={`avatar-${props.id}`}
              stagger="card-content"
              shouldFlip={shouldFlip(props.id)}
            >
              <img className="avatar" src={props.item.img} />
            </Flipped>
            <div className="description">
              {props.item.info.map(i => (
                <Flipped
                  flipId={`description-${props.id}-${i}`}
                  stagger="card-content"
                  shouldFlip={shouldFlip(props.id)}
                  key={i}
                >
                  <div>{i}</div>
                </Flipped>
              ))}
            </div>
          </div>
        </Flipped>
      </div>
    </Flipped>
  );
}

function ExpandedListItem(props) {
  return (
    <Flipped
      flipId={`listItem-${props.id}`}
      stagger="card"
      onStart={el => {
        setTimeout(() => {
          el.classList.add("animated-in");
        }, 600);
      }}
    >
      <div className="expandedListItem" onClick={() => props.onClick(props.id)}>
        <Flipped inverseFlipId={`listItem-${props.id}`}>
          <div className="expandedListItemContent">
            <Flipped flipId={`avatar-${props.id}`} stagger="card-content">
              <img className="avatar avatarExpanded" src={props.item.img} />
            </Flipped>
            <div className="description">
              {props.item.info.map(i => (
                <Flipped
                  flipId={`description-${props.id}-${i}`}
                  stagger="card-content"
                  key={i}
                >
                  <div>{i}</div>
                </Flipped>
              ))}
            </div>
            <div className="additional-content">
              {listData.map(i => (
                <div key={i} />
              ))}
            </div>
          </div>
        </Flipped>
      </div>
    </Flipped>
  );
}

export { ListItem, ExpandedListItem };
