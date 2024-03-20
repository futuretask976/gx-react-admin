import React from 'react';

import { Layout, Image } from 'antd';

import logo from '../images/logo512.png'

const HeaderBar = () => {
    let { Header } = Layout;

    let headerStyle = {
        alignItems: 'center',
        backgroundColor: '#fff',
        border: '1px solid green',
        color: 'red',
        fontSize: '80px',
        height: 120,
        justifyContent: 'center',
        paddingInline: 15,
        textAlign: 'left',
    };

    return (
        <Header style={headerStyle}>
            {/* <Image height={120} src={logo} style={{justifyContent: 'center'}} /> */}
            <div style={{height: '100%', width: '100%', border: '1px solid yellow', justifyContent: 'center'}}><span>发布检查报表</span></div>
        </Header>
    )
};

export default HeaderBar;

