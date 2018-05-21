/**
 * Created by wyz on 2018/5/21.
 */
import React from "react"
import Router from "umi/router"
import {TabBar} from "antd-mobile"
export default class Layout extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      iconStyle: { width: '22px', height: '22px'},
      bars:[
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
        }
      ]

    }
  }

  getTabBar() {
    return  this.state.bars.map((item) => {
        return (
          <TabBar.Item
            title={item.title}
            key={item.key}
            icon={ typeof(item.icon) === 'string' ? <div style={ Object.assign({}, this.state.iconStyle, {
                            background: item.icon
                        })}
                        /> : item.icon }
            selectedIcon={typeof(item.selectedIcon) === 'string' ?
                            <div style={ Object.assign({}, this.state.iconStyle, {
                                background: item.selectedIcon
                            })}
                            /> : item.selectedIcon }
            selected={this.state.selectedTab === item.key}
            badge={!item.badge? 0 : item.badge}
            onPress={() => {Router.push(item.path)} }
            data-seed="logId"
          >
          </TabBar.Item>
        )
      }
    )
  }

  render(){

    return (
      <div  style={{position: 'fixed', height: '100%', width: '100%'}}>
        <div style={{position: 'fixed', height: 'calc(100% - 50px)', width: '100%', zIndex: 999}}>
          {this.props.children}
        </div>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
          style={{position: 'fixed', bottom: 0, width: '100%'}}
        >
          {this.getTabBar()}
        </TabBar>
      </div>
    )
  }
}