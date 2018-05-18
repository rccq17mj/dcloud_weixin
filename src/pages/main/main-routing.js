import React from 'react';
import TabBarExamples from "../../library/components/tabBarExample/TabBarExample";
import Cart from "../../pages/main/cart/cart";
import Home from "../../pages/main/home/home";
import User from "../../pages/main/user/user";

var menu = [
    {
        title: "首页",
        icon: "url(http://misc.gogbuy.com/images/v/bottombar_01.gif) center center /120% 120%",
        selectedIcon: "url(http://misc.gogbuy.com/images/v/d_bottombar_01.gif) center center /120% 120%",
        path: "/",
        key: "home",
        component: Home,
        badge: 0
    },
    {
        title: "购物车",
        icon: "url(http://misc.gogbuy.com/images/v/bottombar_05.gif) center center /120% 120%",
        selectedIcon: "url(http://misc.gogbuy.com/images/v/d_bottombar_05.gif) center center /120% 120%",
        path: "/cart",
        key: "cart",
        component: Cart,
        badge: 2
    },
    {
        title: "我的",
        icon: "url(http://misc.gogbuy.com/images/v/bottombar_04.gif) center center /120% 120%",
        selectedIcon: "url(http://misc.gogbuy.com/images/v/d_bottombar_04.gif) center center /120% 120%",
        path: "/user",
        key: "user",
        component: User,
        badge: 0
    }
]

class MainRouting extends React.Component {
    render() {
        return (
                <TabBarExamples history={this.props.history} router={menu}></TabBarExamples>
        );
    }
}

export default MainRouting;