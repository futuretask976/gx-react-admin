import React from 'react';

import { Layout, Image } from 'antd';

import loginHeader from '../images/login.png'
import logo from '../images/logo512.png'

const HeaderBar = () => {
    let { Header } = Layout;

    let headerStyle = {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        color: '#575757',
        height: 150,
        paddingInline: 0,
        border: '0px solid green',
    };

    return (
        <Header style={headerStyle}>
            <div id='logoHeader' style={{width: '10%', border: '0px solid yellow'}}>
                <Image height={120} src={logo} />
            </div>
            <div id='titleHeader' style={{width: '65%', border: '0px solid yellow'}}>
                <span style={{fontSize: 50}}>发布检查报表</span>
            </div>
            <div id='loginHeader' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20%', border: '0px solid yellow'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: 100, border: '0px solid pink'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', border: '0px solid pink', height: '100%'}}>
                        <Image height={70}  src={loginHeader} />
                    </div>
                </div>
                <div>&nbsp;</div>
                <div style={{display: 'flex', flexDirection: 'column', height: 80, border: '0px solid green'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '33%', padding: 2}}>登录用户：广夏</div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '33%', padding: 2}}>用户角色：管理员</div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '33%', padding: 2, border: '0px solid black'}}>登出</div>
                </div>
            </div>
        </Header>
    )
};

export default HeaderBar;

