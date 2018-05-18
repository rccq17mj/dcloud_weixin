import React from 'react';
import { TabBar } from 'antd-mobile';
import PropTypes from  'prop-types';
import { Switch , Route } from 'react-router-dom';


class TabBarExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab:  this.props.router[0].key,
            hidden: false,
            iconStyle: { width: '22px', height: '22px'}
        };
    }

    getComponent(item) {
        console.log(item.component);
        if(this.props.path == null){
            return item.component
        }else
            return null;
    }

    getTabBar() {
        return  this.props.router.map((item) =>
            <TabBar.Item
                title={item.title}
                key={item.key}
                icon= { typeof(item.icon) === 'string'?  <div style={ Object.assign({}, this.state.iconStyle,{
                    background: item.icon })}
                /> : item.icon }
                selectedIcon={typeof(item.selectedIcon) === 'string'? <div style={ Object.assign({},this.state.iconStyle,{
                    background: item.selectedIcon })}
                />: item.selectedIcon }
                selected={this.state.selectedTab === item.key}
                badge={item.badge}
                onPress={() => {
                    this.setState({selectedTab:item.key})
                    if(this.props.history != null)
                        this.props.history.push(item.path)
                }}
                data-seed="logId"
            >
            </TabBar.Item>
        )
    }

    getRoute() {
        return (<Switch>
            {this.props.router.map((item,index) => (
                <Route path={item.path} exact={this.state.selectedTab === item.key ? true :false} component={item.component}></Route>)
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
        // 图标
        icon: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
        ]),
        // 图标选中时e
        selectedIcon: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
        ]),
        // 路由地址
        path: PropTypes.string,
        // 渲染页面
        component: PropTypes.element,
        // 唯一码
        key: PropTypes.string.isRequired,
        // 消息提醒（数字）
        badge: PropTypes.number.isRequired,
    }],
    //默认选中
    selectedTab: PropTypes.string
}
export default TabBarExample;