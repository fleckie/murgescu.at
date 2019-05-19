import React from "react"
import "../css/Header.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";

function Header(props){

    
    return(
        <div>
            <nav className="cl-effect-7">
                <div>
                    <Link to ="/" className="murgescu" >Murgescu.at</Link>
                </div>
                <div>
					<Link to ="/Skills" onClick={props.changebg("red")}> IT Skills </Link>
					<Link to ="/Education" onClick={props.changebg("blue")}>Ausbildung</Link>
					<Link to ="/Experience">Berufserfahrung</Link>
                    <Link to ="/Privat"> Privates </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header