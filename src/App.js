import React from "react";
import "./css/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Education from "./components/EducationContainer";
import Experience from "./components/ExperienceContainer";
import Privat from "./components/Privat";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import backgroundTransition from "./js/backgroundTransition";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toggleContent: true
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
                <Route exact path="/" component={Home} />
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
