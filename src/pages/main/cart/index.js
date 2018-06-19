import React, { Component } from 'react';
import {Flex} from "antd-mobile"
import {connect} from "dva"

@connect(({main})=>(main.toJS()))
class Cart extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = this.props.cartList || []
        return (
           <div>
               <Flex  justify="between" style={{marginTop: '50%'}}>
                   <Flex.Item><p style={{textAlign:'center',width:'100%'}}>cart</p></Flex.Item>
               </Flex>
               {/*<ul>*/}
                   {/*{data.map((v,k)=>{*/}
                       {/*return (*/}
                         {/*<li key={k}>{v.text}</li>*/}
                       {/*)*/}
                   {/*})}*/}
               {/*</ul>*/}
           </div>

        )
    }
}

export default Cart;