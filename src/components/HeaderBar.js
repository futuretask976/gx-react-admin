import React from 'react';

import { Layout, Image } from 'antd';

import logo from '../images/logo512.png'

const HeaderBar = () => {
    let { Header } = Layout;

    let headerStyle = {
        backgroundColor: '#fff',
        border: '0px solid green',
        color: '#575757',
        height: 150,
        paddingInline: 0
    };

    return (
        <Header style={headerStyle}>
            {/* <Image height={170} src={logo} style={{}} /> */}
            <div style={{alignItems: 'center', display: 'flex', height: 150, width: '100%', border: '0px solid yellow'}}>
                <Image height={120} src={logo} style={{}} />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span style={{fontSize: 50}}>发布检查报表</span>
            </div>
        </Header>
    )
};

export default HeaderBar;

