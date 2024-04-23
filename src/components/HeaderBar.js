import React from 'react';

import { Layout, Image } from 'antd';

import loginHeader from '../images/login.png'
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
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row', height: 150, width: '100%', border: '1px solid yellow'}}>
                <div style={{border: '1px solid red'}}>
                    <Image height={120} src={logo} />
                </div>
                <div style={{border: '1px solid blue'}}>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div style={{border: '1px solid black'}}>
                    <span style={{fontSize: 50}}>发布检查报表</span>
                </div>
                <div style={{border: '1px solid pink', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: 100}}>
                    <div style={{border: '1px solid pink', height: 80}}>
                        <Image height={80}  src={loginHeader} />
                    </div>
                    <div style={{border: '1px solid black', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: 20}}>登出</div>
                </div>
                <div style={{border: '1px solid green', display: 'flex', flexDirection: 'column', height: 60}}>
                    <div style={{border: '1px solid black', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '50%'}}>登录用户：广夏</div>
                    <div style={{border: '1px solid red', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '50%'}}>用户角色：管理员</div>
                </div>
            </div>
        </Header>
    )
};

export default HeaderBar;

