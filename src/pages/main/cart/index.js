import React, { Component } from 'react';
import {connect} from "dva"

@connect(({main})=>(main.toJS()))
class Cart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.cartList || []
        return (
           <div>
               cart
               <ul>
                   {data.map((v,k)=>{
                       return (
                         <li key={k}>{v.text}</li>
                       )
                   })}
               </ul>
           </div>

        )
    }
}

export default Cart;