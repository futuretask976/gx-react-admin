import React from 'react';

import { Breadcrumb } from 'antd';

const BreadcrumbBlock = () => {
    return (
        <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>配置</Breadcrumb.Item>
                <Breadcrumb.Item>详细配置</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
};

export default BreadcrumbBlock;

