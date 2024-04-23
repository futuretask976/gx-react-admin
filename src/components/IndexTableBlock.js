import React, { useEffect, useState } from 'react';
import { theme, Button, DatePicker, Grid, Image, Input, Modal, Space, Table, Tag, Tooltip, Col, Row } from 'antd';

import portrait from '../images/portrait.jpg'

const { TextArea } = Input;

const IndexTableBlock = () => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const onTitleClick = (e) => {
        console.log('onTitleClick', e);
        showTitleModal();
    };

    const onDeleteClick = (e) => {
        alert(e);
        console.log('onDeleteClick', e);
    };

    const showTitleModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setOpen(false);
        }, 3000);
    };
    
    const handleCancel = () => {
        setOpen(false);
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
        <>
            <div style={{ padding: 24, minHeight: 500, background: colorBgContainer, borderRadius: borderRadiusLG }}>
                <Table columns={columns} dataSource={data} />
            </div>

            <Modal
                open={open}
                title="用户详细情况"
                onOk={handleOk}
                onCancel={handleCancel}
                style={{display: 'flex', alignItems: 'center', flexDirection: 'row', border: '0px solid red'}}
                height={525}
                width={625}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Return
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                        Submit
                    </Button>,
                    <Button
                        key="link"
                        href="https://google.com"
                        type="primary"
                        loading={loading}
                        onClick={handleOk}
                    >
                        Search on Google
                    </Button>,
                ]}
            >
                <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row', height: 500, width: 600, border: '0px solid yellow'}}>
                    <Row style={{height: 500, width: 600, border: '0px solid black'}}>
                        <Col span={14}>
                            <div>
                                <Row>
                                    <Col span={5} style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: 5}}>姓名：</Col>
                                    <Col span={19} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 5}}><Input placeholder="姓名，例如文一西路西溪泊岸3幢731室" /></Col>
                                </Row>
                                <Row>
                                    <Col span={5} style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: 5}}>性别：</Col>
                                    <Col span={19} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 5}}><Input placeholder="性别，例如男或者女" /></Col>
                                </Row>
                                <Row>
                                    <Col span={5} style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: 5}}>身高：</Col>
                                    <Col span={19} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 5}}><Input placeholder="身高，例如183cm" /></Col>
                                </Row>
                                <Row>
                                    <Col span={24} style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: 5}}>详细介绍：</Col>
                                </Row>
                                <Row>
                                    <Col span={24} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 5}}>
                                        <TextArea rows={15} placeholder="maxLength is 1200" maxLength={1200} />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col span={10} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 5}}>
                            <Image height={500} width={250} src={portrait} />
                        </Col>
                    </Row>
                </div>
            </Modal>
        </>
    )
};

export default IndexTableBlock;

