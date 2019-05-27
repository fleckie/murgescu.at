import React from "react";
import "./css/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Home from "./components/Home"
import Skills from "./components/Skills";
import Education from "./components/EducationContainer";
import Experience from "./components/ExperienceContainer"
import Privat from "./components/Privat"
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group'


class App extends React.Component {
    constructor(){
      super()
      this.state = {
        color: "whitesmoke",
        active: "home"
  
      }
      this.changeBackground = this.changeBackground.bind(this)
    }

    changeBackground(newBackground, activePage){
      var background = document.querySelector("*");
      background.style.background = this.state.color;
      this.setState(prevState =>{
        return {
          color: newBackground,
          active: activePage
        }
      })
      background.style.animation = this.state.active + " 0.5s linear both";
    }



    render(){
      return (
        <div>
          <Header changeBackground = {this.changeBackground} />
          <TransitionGroup>
          <CSSTransition
          in = {true}
          appear = {true}
          key = {this.props.location.key}
          classNames = "page-fade"
          timeout = {600}>
            <Switch location={this.props.location}>

                <Route exact path="/" component={Home}/>

                <Route exact path="/Skills" component={Skills}/>

                <Route exact path="/Education"  render={(routeProps) => (
                  <Education changeBackground = {this.changeBackground} /> )}  />

                <Route path="/Experience" render={(routeProps) => (
                  <Experience changeBackground = {this.changeBackground} /> )}  />

                <Route path="/Privat" component={Privat} />
              </Switch>
          </CSSTransition>
          </TransitionGroup>
          <Footer />
        </div>
  
  )}
}


export default withRouter(App);
