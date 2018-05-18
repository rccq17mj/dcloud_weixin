import React, { Component } from 'react';
import OptionCart from "./OptionCart";
import TabBarExamples from "../../../base/components/tabBarExample/TabBarExample";


class Cart extends Component {
    constructor(props) {
        super(props);
        this.menu = [
            {
                title: "商品详情",
                icon: "url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat",
                selectedIcon: "url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat",
                path: `${this.props.match.url}`,
                key: "OptionCart",
                component: OptionCart,
                badge: 0
            }
        ]
    }

    render() {
        console.log(" cart props",this.props.match.url)
        return (
            <TabBarExamples history={this.props.history} router={this.menu} ></TabBarExamples>
        )
    }
}

export default Cart;