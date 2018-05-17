import React, { Component } from 'react';
import OptionCart from "./OptionCart";
import TabBarExamples from "../../../base/components/tabBarExample/TabBarExample";
import {Switch,Route,Link,Router} from "react-router-dom"

var menu = [
    {
        title: "商品详情",
        icon: "url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat",
        selectedIcon: "url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat",
        path: "/Cart/OptionCart",
        key: "OptionCart",
        component: OptionCart,
        badge: 0
    }
]

function Order (props){
    return (
        <div>order</div>
    )
}

class Cart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(" cart props",this.props)
        return (
            <div>
                <Switch>
                    <Route path={"/cart"} exact component={OptionCart}></Route>
                    <Route path={"cart/order"}  component={ Order }></Route>
                    <Route path={"cart/detail"}  render={ ()=><div>detial</div> }></Route>
                </Switch>
                <ul>
                    <li>
                        <Link to="/cart/detail">商品详情</Link>

                    </li>
                    <li>
                        <Link to="/cart/order">订单</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Cart;