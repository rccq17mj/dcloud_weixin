/**
 * Created by wyz on 2018/5/21.
 */
import React from "react"
import {connect} from "dva"
import {TabBarExample} from  "components"
import {Icon} from 'antd-mobile'

@connect(({main})=>(main.toJS()))
export default class Layout extends React.Component{

  constructor(props){
    super(props);
    this.state = [
        {
          title: "首页",
          icon:  <i style={{fontSize: '1.5rem'}} class="iconfont am-icon">&#xe60c;</i>,
          selectedIcon: <i style={{fontSize: '1.5rem'}} class="iconfont am-icon">&#xe60c;</i>,
          path: "/main/",
          key: "home",
          badge: 0
        },
        {
          title: "购物车",
          icon:  <i style={{fontSize: '1.5rem'}} class="iconfont am-icon">&#xe628;</i>,
          selectedIcon: <i style={{fontSize: '1.5rem'}} class="iconfont am-icon">&#xe628;</i>,
          path: "/main/cart",
          key: "cart",
          badge: 2
        },
        {
            title: "我的",
            icon:  <i style={{fontSize: '1.5rem'}} class="iconfont am-icon">&#xe60e;</i>,
            selectedIcon: <i style={{fontSize: '1.5rem'}} class="iconfont am-icon">&#xe60e;</i>,
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