import React from 'react';
import { TabBar } from 'antd-mobile';
import PropTypes from  'prop-types';
import { Switch , Route } from 'react-router-dom';
import './TabBarExample.less';
import router from 'umi/router';


class TabBarExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            iconStyle: { width: '22px', height: '22px'}
        };
    }

    getComponent(item) {
        if(!item.path){
            return React.createElement(item.component) ;
        }
        else{
            window.console.log(item.path);
            return null;
        }
    }

    getTabBar() {
        return  this.props.router.map((item) => {
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
                        onPress={() => {
                            this.setState({selectedTab: item.key});
                            if (this.props.history)
                                this.props.history.push(item.path)
                        }}
                        data-seed="logId"
                    >
                        {this.getComponent(item)}
                    </TabBar.Item>
                )
            }
        )
    }

    getRoute() {
        return (<Switch>
            {this.props.router.map((item,index) => {
                if(item.path != null){
                    if(item.path == this.props.history.location.pathname) {
                        this.state.selectedTab = item.key;
                    }
                    return <Route path={item.path} exact component={item.component}></Route>
                }
            }
            )}
        </Switch>);
    }

    render() {
        return (
            <div  style={{position: 'fixed', height: '100%', width: '100%'}}>
                <div style={{position: 'fixed', height: 'calc(100% - 50px)', width: '100%', zIndex: 999}}>
                    {this.getRoute()}
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
        );
    }
}

TabBarExample.propTypes = {
    // 传入一组tab
    router: [{
        // 菜单名
        title: PropTypes.string.isRequired,
        /**
         * 图标
         * //css-svg icon：url(https:***.svg) center center /  21px 21px no-repeat
         * //css-img icon："url(http://misc.gogbuy.com/images/v/d_bottombar_01.gif) 0 0 /120% 120%"
         * //obj icon：{"uri": "https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg"}
         */
        icon: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
        ]),
        /**
         * 图标选中时
         * //css-svg icon：url(https:***.svg) center center /  21px 21px no-repeat
         * //css-img icon："url(http://misc.gogbuy.com/images/v/d_bottombar_01.gif) 0 0 /120% 120%"
         * //obj icon：{"uri": "https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg"}
         */
        selectedIcon: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
        ]),
        // 路由地址，如果不使用路由方式则不需要此项参数
        path: PropTypes.string,
        // 渲染页面
        component: PropTypes.element,
        // 唯一码
        key: PropTypes.string.isRequired,
        // 消息提醒（数字）
        badge: PropTypes.number,
    }]
}
export default TabBarExample;