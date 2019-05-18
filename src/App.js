import React from "react";
import "./css/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Home from "./components/Home"
import Skills from "./components/Skills";
import Education from "./components/EducationContainer";
import Experience from "./components/ExperienceContainer"
import Privat from "./components/Privat"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home}/>
        <Route exact path="/Skills" component={Skills} />
        <Route path="/Education" component={Education} />
        <Route path="/Experience" component={Experience}/>
        <Route path="/Privat" component={Privat} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
