import React from 'react';

import { Breadcrumb } from 'antd';


export default class BreadcrumbBlock extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    {
                        this.props.breadcrumbPath.map((item) => <Breadcrumb.Item>{item}</Breadcrumb.Item>)
                    }
                </Breadcrumb>
            </div>
        )  
    }
}

