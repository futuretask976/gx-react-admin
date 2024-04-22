import React, { useEffect, useState } from 'react';

import { theme, Button, Space, Table, Tag } from 'antd';



const IndexTableBlock = () => {
    const onTitleClick = (e) => {
        console.log('onTitleClick', e);
    };

    const onDeleteClick = (e) => {
        alert(e);
        console.log('onDeleteClick', e);
    };

    let {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    let columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (_, record) => (
                <Button type='link' onClick={() => onTitleClick(record.name)}>{record.name}</Button>
            ),
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                    color = 'volcano';
                    }
                    return (
                    <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                    </Tag>
                    );
                })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a onClick={() => onDeleteClick(record.name)}>Delete</a>
                </Space>
            ),
        },
    ];
    
    let data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        {
            key: '4',
            name: 'Peter',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        {
            key: '5',
            name: 'John',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        {
            key: '6',
            name: 'Jack',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];

    return (
        <div style={{ padding: 24, minHeight: 500, background: colorBgContainer, borderRadius: borderRadiusLG }}>
            <Table columns={columns} dataSource={data} />
        </div>
    )
};

export default IndexTableBlock;

