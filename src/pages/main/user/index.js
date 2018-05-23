import React, { Component } from 'react';
import {List} from "antd-mobile"
import Link from 'umi/link'

const {Item} = List

class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <List>
                    <Item> <Link to="/main/user/addr">地址管理</Link> </Item>
                    <Item> <Link to="/main/user/collect">我的收藏</Link> </Item>
                </List>
            </div>
        )
    }
}

export default User;