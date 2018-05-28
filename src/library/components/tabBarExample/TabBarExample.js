import React from 'react';
import { TabBar } from 'antd-mobile';
import PropTypes from  'prop-types';
import Router from 'umi/router';
import './TabBarExample.less';


class TabBarExample extends React.Component {

    constructor(props) {
        super(props);

        let selectedTab = this.props.tab[0].key;
        this.props.tab.map((item) => {
            if(item.path === this.props.children.props.location.pathname) {
                selectedTab = item.key;
                return false;
            }
            return true;
        });

        this.state = {
            iconStyle: this.props.iconStyle? this.props.iconStyl : { width: '22px', height: '22px'},
            selectedTab: this.props.selectedTab? this.props.selectedTab : selectedTab
        };
    }

    //非路由页面获取页面组件
    getComponent(item) {
        if(!item.path)
            return item.component
        else
            return null;
    }

    handleTabClick(item){
        this.setState({selectedTab: item.key});
        if(this.props.children)
            Router.push(item.path);
    }

    getTabBar() {
        return  this.props.tab.map((item) => {
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
                        onPress={this.handleTabClick.bind(this,item)}
                        data-seed="logId">
                        {this.getComponent(item)}
                    </TabBar.Item>
                )
            }
        )
    }

    render() {
        const view = this.props.children? this.props.children : null;
        return (
            <div  style={{position: 'fixed', height: '100%', width: '100%'}}>
                <div style={{position: 'fixed', height: 'calc(100% - 50px)', width: '100%', zIndex: 999}}>
                    {view}
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
    tab:[{
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
        // 渲染页面,必须使用component: <element></element> 格式
        component: PropTypes.element,
        // 唯一码
        key: PropTypes.string.isRequired,
        // 消息提醒（数字）
        badge: PropTypes.number,
    }],
    //路由页面index
    children:  PropTypes.object,
    // / iconStyle: { width: '22px', height: '22px'}
    iconStyle:  PropTypes.string,
    //选中项key,默认第一个
    selectedTab:  PropTypes.string
}
export default TabBarExample;