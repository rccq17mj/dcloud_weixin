import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import '../../App.css';
import MainRouting from "../../pages/main/main-routing"

class Default extends Component {
    render() {
        return (

                    <Route path="/" component={MainRouting}>
                    </Route>

        );
    }
}

export default Default;
