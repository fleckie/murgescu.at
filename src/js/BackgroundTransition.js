function backgroundTransition(location) {
  let color;
  switch (location) {
    case "/":
      color = "whitesmoke";
      break;
    case "/Skills":
      color = "#C7E5F8";
      break;
    case "/Education":
      color = "#CDE3BF";
      break;
    case "/Experience":
      color = "#FFF5C9";
      break;
    case "/Privat":
      color = "#FDE3CA";
      break;
  }
  var root = document.querySelector(":root");
  root.style.background = color;
}

export default backgroundTransition;
