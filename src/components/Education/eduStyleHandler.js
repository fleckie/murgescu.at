function EduAnimationHandler(props) {
  var w = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  let containerStyle;
  if (w < 1100) {
    switch (props.item.status) {
      case "start":
        containerStyle = {
          animation:
            "edu-slide-in-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both",
          animationDelay: props.item.id / 4 + "s"
        };
        break;
      case "focused":
        containerStyle = {
          animation: "move-mid 1s ease both"
        };
        break;
      case "rewind": 
        containerStyle = {
          animation: "move-back 1s ease both"
        };
        break;
      case "hidden": 
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
          "edu-slide-in-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both",
        animationDelay: props.item.id / 4 + "s"
      };
    } else if (props.item.status === "focused") {
      containerStyle = {
        animation: "edu-focus-element 1s ease both"
      };
    } else if (props.item.status === "rewind") {
      containerStyle = {
        animation: "edu-rewind-id" + props.item.id + " 1s ease both"
      };
    }
  }
  return containerStyle;
}

export default EduAnimationHandler;
