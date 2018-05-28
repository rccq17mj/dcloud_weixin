import React from 'react';
import {connect} from "dva"

@connect(
    (state)=>{
        return {
            loading:state.loading.models.main,
            main:state.main.toJS()
        }
    }
)
export default class passport extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>2</div>
    }
}