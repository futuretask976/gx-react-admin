import React from 'react';

import { Layout, Flex, Col, Row } from 'antd';

import BreadcrumbBlock from "../components/BreadcrumbBlock"
import ColumnChart from '../components/ColumnChart'
import FooterBar from '../components/FooterBar'
import HeaderBar from '../components/HeaderBar'
import IndexTableBlock from '../components/IndexTableBlock'
import IndexListBlock from '../components/IndexListBlock'
import LineChart from '../components/LineChart'
import SiderMenu from '../components/SiderMenu'

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
                            <BreadcrumbBlock />
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
