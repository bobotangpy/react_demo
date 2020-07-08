import * as React from "react";
import NavBar from "../components/NavBarGuest";
import ProductsTypeMenu from "../components/ProductsTypeMenu";
import ProductsStyleMenu from "../components/ProductsStyleMenu";
import ProductsDetailsCompo from "../components/ProductDetailsCompo";
import { Footer } from "../components/Footer";
import Background from "../images/landing_bg.jpg"
import { Card, Col, Row, Layout } from 'antd';
import { connect } from "react-redux";
import { NavBarUser } from "../components/NavBarUser";

const background = {
    margin: '0px',
    background: `url(${Background}) fixed no-repeat center`,
    position: 'relative',
    backgroundSize: 'cover',
    color: 'rgb(211, 211, 211, 0.8)',
    minHeight: '100%',
    // zIndex: "-1",
    // opacity: "0.9",
}

export class ProductDetails extends React.Component {
    render() {
        return(
            <div>
                <NavBar />

                <div className="bodyContainer row" style={background}>
                    <Layout style={background}>
                        <div className="col-3">
                            <Sider style={{minWidth: "fit-content"}}>
                                <ProductsTypeMenu {...this.state} />
                            </Sider>
                        </div>

                        <div className="text-center col-8">
                        <Header>
                            <ProductsStyleMenu />
                        </Header>

                        <Content className="pt-5 pl-3" style={{marginBottom: "50px"}}>
                            <ProductsDetailsCompo />
                        </Content>
                        </div>
                    </Layout>
                </div>

                <Footer />
            </div>
        )
    }
}