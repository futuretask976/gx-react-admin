import React, { useState } from 'react';

import { Button, Input } from 'antd';


const LoginPage = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: 600, width: '100%', border: '0px solid gray'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'gray', height: 30, color: 'white', width: '30%', border: '1px solid gray'}}>
                用户登录
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: 205, width: '30%', border: '1px solid gray'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', height: 40, width: '100%', border: '0px solid green'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row', width: '18%'}}>用户名：</div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', paddingRight: 5, width: '82%'}}><Input placeholder="用户名" /></div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', height: 40, width: '100%', border: '0px solid green'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row', width: '18%'}}>密码：</div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', paddingRight: 5, width: '82%'}}><Input placeholder="密码" /></div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', height: 40, width: '100%', border: '0px solid green'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row', width: '18%'}}>手机号：</div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', paddingRight: 5, width: '55%'}}><Input placeholder="手机号" /></div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', paddingRight: 5, width: '27%'}}><Button type="primary">获取验证码</Button></div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', height: 40, width: '100%', border: '0px solid green'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row', width: '18%'}}>验证码：</div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', paddingRight: 5, width: '82%'}}><Input placeholder="验证码" /></div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', height: 40, width: '100%', border: '0px solid green'}}>
                    <Button type="primary">登录</Button>
                </div>
            </div>
        </div>
    )
};

export default LoginPage;
