/**
 * Created by wyz on 2018/5/21.
 */
import React from "react"
import {connect} from "dva"
import {TabBarExample} from  "components"

@connect(({main})=>(main.toJS()))
export default class Layout extends React.Component{

  constructor(props){
    super(props);
    this.state = [
        {
          title: "首页",
          icon: "url(http://misc.gogbuy.com/images/v/bottombar_01.gif) center center /120% 120%",
          selectedIcon: "url(http://misc.gogbuy.com/images/v/d_bottombar_01.gif) center center /120% 120%",
          path: "/main/",
          key: "home",
          badge: 0
        },
        {
          title: "购物车",
          icon: "url(http://misc.gogbuy.com/images/v/bottombar_05.gif) center center /120% 120%",
          selectedIcon: "url(http://misc.gogbuy.com/images/v/d_bottombar_05.gif) center center /120% 120%",
          path: "/main/cart",
          key: "cart",
          badge: 2
        },
        {
            title: "我的",
            icon: "url(http://misc.gogbuy.com/images/v/bottombar_04.gif) center center /120% 120%",
            selectedIcon: "url(http://misc.gogbuy.com/images/v/d_bottombar_04.gif) center center /120% 120%",
            path: "/main/user",
            key: "user",
            badge: 0
        }]
  }

  render(){
    return (
        <TabBarExample tab={this.state} children={this.props.children}></TabBarExample>
    )
  }
}