import React from 'react';
import TabBarExamples from "../../base/components/tabBarExample/TabBarExample"
import Cart from "../../pages/main/cart/cart"
import Home from "../../pages/main/home/home"

var menu = [
    {
        title: "首页",
        icon: "url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat",
        selectedIcon: "url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat",
        path: "/",
        key: "home",
        component: Home,
        badge: 0
    },
    {
        title: "购物车",
        icon:  {"uri": "https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg"},
        selectedIcon: {"uri": "https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg"},
        path: "/cart",
        key: "cart",
        component: Cart,
        badge: 2
    }
]

class MainRouting extends React.Component {
    render() {
        console.log(" mian props",this.props)
        return (
            <div className="MainRouting" style={{ backgroundColor: 'white', height: '100%', width: '100%', textAlign: 'center', position: 'fixed'  }}>
                <TabBarExamples history={this.props.history} router={menu}></TabBarExamples>
            </div>
        );
    }
}

export default MainRouting;