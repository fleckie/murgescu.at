import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer";
import Home from "../Home/Home";
import Skills from "../Projects/Projects";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Privat from "../Privat/Privat";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import backgroundTransition from "../../js/backgroundTransition";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toggleContent: false
    };
    this.toggleContent = this.toggleContent.bind(this);
  }

  toggleContent() {
    var w = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    this.setState(prevState => {
      if (w < 1100) {
        return {
          toggleContent: !prevState.toggleContent
        };
      }
    });
  }

  componentDidMount(){
    var w = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    if (w > 1099){
      this.setState(() =>{
        return {
          toggleContent: true
        }
      })
    }
    var location = this.props.location.pathname;
    backgroundTransition(location);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      var location = this.props.location.pathname;
      backgroundTransition(location);
    }
  }

  render() {
    let contentVisibility;
    if (this.state.toggleContent) {
      contentVisibility = {
        display: "initial"
      };
    } else {
      contentVisibility = {
        display: "none"
      };
    }
    return (
      <div className="test">
        <Header toggleContent={this.toggleContent} />
        <div style={contentVisibility}>
          <TransitionGroup>
            <CSSTransition
              in={true}
              appear={true}
              key={this.props.location.key}
              classNames="page-fade"
              timeout={600}
            >
              <Switch location={this.props.location}>
                <Route exact path="/" component={Skills} />
                <Route exact path="/Skills" component={Skills} />
                <Route exact path="/Education" component={Education} />
                <Route path="/Experience" component={Experience} />
                <Route path="/Privat" component={Privat} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
