import * as React from "react";
import NavBar from "../components/NavBarGuest";
import ProductsTypeMenu from "../components/ProductsTypeMenu";
import ProductsStyleMenu from "../components/ProductsStyleMenu";
import { Footer } from "../components/Footer";
import Background from "../images/landing_bg.jpg"
import { Card, Col, Row, Layout } from 'antd';

const { Header, Sider, Content } = Layout;

const background = {
    margin: '0px',
    background: `url(${Background}) fixed no-repeat center`,
    position: 'relative',
    backgroundSize: 'cover',
    color: 'rgb(211, 211, 211, 0.8)',
    height: '100vh',
    // zIndex: "-1",
    // opacity: "0.9",
}

const { Meta } = Card;

export default class ProductsPage extends React.Component {
    handleClick = e => {
        console.log('click', e)
    }

    render() {
        return (
            <div>
                <NavBar />

                <div className="bodyContainer row" style={background}>
                    <Layout style={background}>
                        <div className="col-3">
                            <Sider style={{minWidth: "fit-content"}}>
                                <ProductsTypeMenu />
                            </Sider>
                        </div>

                        {/* <Layout> */}
                            <div className="text-center col-8">
                            <Header>
                                <ProductsStyleMenu />
                            </Header>

                            <Content className="pt-5 pl-3">
                                <Row gutter={12}>
                                    <Col span={8}>
                                        <Card hoverable
                                            style={{ width: 190 }}
                                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                            >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                        </Card>
                                    </Col>
                                    <Col span={8}>
                                        <Card hoverable
                                            style={{ width: 190 }}
                                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                            >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                        </Card>
                                    </Col>
                                    <Col span={8}>
                                        <Card hoverable
                                            style={{ width: 190 }}
                                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                            >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                        </Card>
                                    </Col>
                                </Row>
                            </Content>
                            </div>
                        {/* </Layout> */}
                    </Layout>
                </div>

                <Footer />
            </div>
        )
    }
}