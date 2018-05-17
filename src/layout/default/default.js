import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import '../../App.css';
import Home from "../../pages/main/home/home"
import Cart from "../../pages/main/cart/cart"
import MainRouting from "../../pages/main/main-routing"

class Default extends Component {
    render() {
        return (
            <div className="Default" style={{ backgroundColor: 'white', height: '100%', width: '100%', textAlign: 'center', position: 'fixed'  }}>

                    <Route path="/" component={MainRouting}>
                    </Route>

            </div>
        );
    }
}

export default Default;
