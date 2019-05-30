import React from "react"
import App from "./App"
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";

function UeberApp() {
    return(
        <div>
        <Router>
        <App/>
        </Router>
        </div>
    )
}

export default UeberApp