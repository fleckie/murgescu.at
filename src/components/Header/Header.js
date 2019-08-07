import React from "react"
import "./Header.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends React.Component{
    constructor(){
        super()
        this.state = {
            menuVisible : true
        }
        this.menuClick = this.menuClick.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    menuClick(){
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        this.setState(prevState => {
            if (w < 1100){
                return {
                    menuVisible: !prevState.menuVisible
                }
            }
        })
        console.log(this.state.menuVisible);
    }

    componentDidMount() {
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        this.setState( () => {
                return {
                    menuVisible: true
                }
            
        })
    }
    
    handleClick(){
        this.menuClick();
        this.props.toggleContent();
    }

    render(){
        let linkStyle
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (w < 1100){
            if (this.state.menuVisible){
                linkStyle = {
                    display: "initial",
                    animation: "menu-slide-in-bottom 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
                }
            }
            else {
                console.log("menu sollte verschwinden")
                linkStyle = {
                    display: "none"
                }
            }
        }
   

        return (
            <nav className="cl-effect-7">
                    <Link to="/Skills" className="murgescu"
                     onClick={this.handleClick} >
                     Murgescu.at</Link>
                    <FontAwesomeIcon 
                    icon="bars" 
                    className="burgerMenu"
                    onClick={this.handleClick} />
                <Link to="/Skills"
                    className="menuItems"
                    style={linkStyle}
                    onClick={this.handleClick}>
                    Projekte </Link>
                   
                <Link to="/Education"
                    className="menuItems"
                    style={linkStyle}
                    onClick={this.handleClick}
                >Ausbildung</Link>
                <Link to="/Experience" 
                    className="menuItems"
                    style={linkStyle}
                    onClick={this.handleClick}
                >Berufserfahrung</Link>
                {/*<Link to="/Privat" 
                    className="menuItems"
                    style={linkStyle}
                     onClick={this.handleClick}>
                 Privates </Link>*/}
            </nav>
        )

    }
    
}

export default Header