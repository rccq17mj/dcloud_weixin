import React from 'react';
import Router from "umi/router"


export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div> 1{this.props.children}</div>
    }
}