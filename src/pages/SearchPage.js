import React from 'react';

import { Button, Input, Layout, Flex, Col, Row, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import HeaderBar from '../components/HeaderBar'
import SiderMenu from '../components/SiderMenu'
import BreadcrumbBlock from "../components/BreadcrumbBlock"
import FooterBar from '../components/FooterBar'

import ColumnChart from '../components/ColumnChart'
import SearchTableBlock from '../components/SearchTableBlock'
import IndexListBlock from '../components/IndexListBlock'
import LineChart from '../components/LineChart'


const { Content } = Layout;

const layoutStyle = {
    borderRadius: 5,
    overflow: 'hidden',
    width: 'calc(90% - 5px)',
    maxWidth: 'calc(90% - 5px)',
    justifyContent: 'center',
};

const SearchPage = () => {
    return (
        <Flex gap="middle" justify="center" wrap="wrap">
            <Layout style={layoutStyle}>
                <HeaderBar />
                <Layout style={{ borderRadius: 15, border: '1px solid blue' }}>
                    <SiderMenu />
                    <Layout>
                        <Content style={{ margin: '5px 5px', borderRadius: 15, border: '1px solid red' }}>
                            <BreadcrumbBlock />
                            <Row gutter={[16, 24]} style={{backgroundColor: '#fff', borderRadius: 10, margin: '0px 0px'}}>
                                <Col className="gutter-row" span={3}>
                                    <div style={{alignItems: 'center', backgroundColor: '#fff', display: 'flex', height: '100%', justifyContent: 'flex-end'}}><span>地址：</span></div>
                                </Col>
                                <Col className="gutter-row" span={5}>
                                    <div style={{alignItems: 'center', backgroundColor: '#fff', display: 'flex', height: '100%'}}><Input placeholder="地址" /></div>
                                </Col>
                                <Col className="gutter-row" span={3}>
                                    <div style={{alignItems: 'center', backgroundColor: '#fff', display: 'flex', height: '100%', justifyContent: 'flex-end'}}><span>名称：</span></div>
                                </Col>
                                <Col className="gutter-row" span={5}>
                                    <div style={{alignItems: 'center', backgroundColor: '#fff', display: 'flex', height: '100%'}}><Input placeholder="名称" /></div>
                                </Col>
                                <Col className="gutter-row" span={3}>
                                    <div style={{alignItems: 'center', backgroundColor: '#fff', display: 'flex', height: '100%', justifyContent: 'flex-end'}}><span>关键字：</span></div>
                                </Col>
                                <Col className="gutter-row" span={5}>
                                    <div style={{alignItems: 'center', backgroundColor: '#fff', display: 'flex', height: '100%'}}><Input placeholder="关键字" /></div>
                                </Col>
                                <Col className="gutter-row" span={3}>
                                    <div style={{alignItems: 'center', backgroundColor: '#fff', display: 'flex', height: '100%', justifyContent: 'flex-end'}}><span>是否选中：</span></div>
                                </Col>
                                <Col className="gutter-row" span={5}>
                                    <div style={{alignItems: 'center', backgroundColor: '#fff', display: 'flex', height: '100%'}}><Input placeholder="是否选中" /></div>
                                </Col>
                                <Col className="gutter-row" span={3}>
                                    <div style={{alignItems: 'center', backgroundColor: '#fff', display: 'flex', height: '100%', justifyContent: 'flex-end'}}><span>性别：</span></div>
                                </Col>
                                <Col className="gutter-row" span={5}>
                                    <div style={{alignItems: 'center', backgroundColor: '#fff', display: 'flex', height: '100%'}}><Input placeholder="性别" /></div>
                                </Col>
                                <Col className="gutter-row" span={3}>
                                    <div style={{alignItems: 'center', backgroundColor: '#fff', display: 'flex', height: '100%', justifyContent: 'flex-end'}}><span>标题：</span></div>
                                </Col>
                                <Col className="gutter-row" span={5}>
                                    <div style={{alignItems: 'center', backgroundColor: '#fff', display: 'flex', height: '100%'}}><Input placeholder="标题" /></div>
                                </Col>
                                <Col className="gutter-row" span={24}>
                                    <div style={{alignItems: 'center', backgroundColor: '#fff', display: 'flex', height: '100%', justifyContent: 'flex-end'}}><Button type="primary" icon={<SearchOutlined />}>Search</Button></div>
                                </Col>
                            </Row>
                            <div>&nbsp;</div>
                            <SearchTableBlock />
                        </Content>
                    </Layout>
                </Layout>
                <FooterBar />
            </Layout>
        </Flex>
    )
};

export default SearchPage;
