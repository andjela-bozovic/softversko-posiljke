import { Component } from "react";
import {AppBar, Toolbar} from '@material-ui/core';
import '../views/navigationbar.css'
import {
    Link,
  } from "react-router-dom";
import logo from "../assets/logo-sm.png";

class NavigationBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="root">
                <AppBar position="static">
                    <Toolbar>
                        <div className="nav-item">
                            <Link to="home"> <img src={logo} className="image-size" /> </Link>
                        </div>
                        <div className="nav-item">
                            <Link to="posiljke">Pošiljke</Link>
                        </div>
                    </Toolbar>
                </AppBar>
                <div>
                </div>
            </div>
            
        );
    }
}

export default NavigationBar