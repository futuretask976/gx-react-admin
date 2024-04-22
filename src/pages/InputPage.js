import React from 'react';

import { Layout, Flex, Col, Row } from 'antd';

import HeaderBar from '../components/HeaderBar'
import SiderMenu from '../components/SiderMenu'
import InputBreadcrumbBlock from "../components/InputBreadcrumbBlock"
import FooterBar from '../components/FooterBar'

import ColumnChart from '../components/ColumnChart'
import IndexTableBlock from '../components/IndexTableBlock'
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

const InputPage = () => {
    return (
        <Flex gap="middle" justify="center" wrap="wrap">
            <Layout style={layoutStyle}>
                <HeaderBar />
                <Layout style={{ borderRadius: 15, border: '1px solid blue' }}>
                    <SiderMenu />
                    <Layout>
                        <Content style={{ margin: '5px 5px', borderRadius: 15, border: '1px solid red' }}>
                            <InputBreadcrumbBlock />
                            <LineChart />
                            &nbsp;
                            <ColumnChart />
                            &nbsp;
                            <Row gutter={[16, 24]}>
                                <Col className="gutter-row" span={8}>
                                    <IndexListBlock />
                                </Col>
                                <Col className="gutter-row" span={8}>
                                    <IndexListBlock />
                                </Col>
                                <Col className="gutter-row" span={8}>
                                    <IndexListBlock />
                                </Col>
                                <Col className="gutter-row" span={8}>
                                    <IndexListBlock />
                                </Col>
                                <Col className="gutter-row" span={8}>
                                    <IndexListBlock />
                                </Col>
                                <Col className="gutter-row" span={8}>
                                    <IndexListBlock />
                                </Col>
                            </Row>
                            <div>&nbsp;</div>
                            <IndexTableBlock />
                        </Content>
                    </Layout>
                </Layout>
                <FooterBar />
            </Layout>
        </Flex>
    )
};

export default InputPage;
