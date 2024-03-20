import React from 'react';

import { Layout } from 'antd';

const FooterBar = () => {
    let { Footer } = Layout;

    let footerStyle = {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: 'gray',
        height: 120,
    };

    return (
        <Footer style={footerStyle}>Footer</Footer>
    )
};

export default FooterBar;

