function expStyleHandler(props) {
  var w = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  let containerStyle;
  if (w < 1100) {
    if (props.item.status === "start") {
      containerStyle = {
        animation: ""
      };
    } else if (props.item.status === "focused") {
      containerStyle = {
        animation: "move-mid 1s ease-in both"
      };
    } else if (props.item.status === "rewind") {
      containerStyle = {
        animation: ""
      };
    } else if (props.item.status === "hidden") {
      containerStyle = {
        animation: "fade-out 0.5s ease both",
        zIndex: "-2",
        display: "none"
      };
    }
  } else {
    if (props.item.status === "start") {
      containerStyle = {
        animation:
          "exp-slide-in-bottom 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        animationDelay: props.item.id / 8 + "s"
      };
    } else if (props.item.status === "focused") {
      containerStyle = {
        animation:
          "exp-focus" +
          props.item.id +
          " 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
      };
    } else if (props.item.status === "rewind") {
      containerStyle = {
        animation: "exp-unfocus" + props.item.id + " 1s ease",
        animationDirection: "reverse"
      };
    } else if (props.item.status === "hidden") {
      containerStyle = {
        animation: "fade-out 0.5s ease both",
        zIndex: "-2",
        pointerEvents: "none"
      };
    }
  }
  return containerStyle;
}

export default expStyleHandler;

//eventuell hier mit translate und classenNamen arbeiten - besser?