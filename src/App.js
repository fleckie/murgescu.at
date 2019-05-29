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
        active: "home",
        toggleContent: true
  
      }
      this.changeBackground = this.changeBackground.bind(this)
      this.toggleContent = this.toggleContent.bind(this)
    }
    
    changeBackground(newBackground, activePage){
     var root = document.querySelector(":root");
     //root.style.background = this.state.color;
      this.setState(prevState =>{
        return {
          color: newBackground,
          active: activePage
        }
      })
      root.style.setProperty('--newBGC', this.state.color);
      console.log(this.state.color);
      var rootStyles = getComputedStyle(root);
      var bgc = rootStyles.getPropertyValue('--newBGC');
      console.log(bgc);
      root.style.animation = "changeBackgroundColor 0.5s linear both";
    }

    toggleContent(){
      var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      this.setState(prevState => {
        if (w<1100){
          return {
            toggleContent: !prevState.toggleContent
          }
        }
        
      })
    }

    render(){


    let contentVisibility
    if (this.state.toggleContent){
        contentVisibility = {
          display: "initial"
        }
    }
    else {
        contentVisibility = {
          display: "none"
        }
    }

      return (
        <div>
          <Header 
          changeBackground = {this.changeBackground}
          toggleContent = {this.toggleContent}
           />
          <div style={contentVisibility}>
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
          </div>
          <Footer />
        </div>
  
  )}
}


export default withRouter(App);
