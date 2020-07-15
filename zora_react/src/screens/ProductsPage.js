import * as React from "react";
import NavBar from "../components/NavBarGuest";
import { NavBarUser } from "../components/NavBarUser";
import ProductsTypeMenu from "../components/ProductsTypeMenu";
import ProductsStyleMenu from "../components/ProductsStyleMenu";
import ProductsList from "../components/ProductsList";
import { Footer } from "../components/Footer";
import Background from "../images/landing_bg.jpg"
import { Card, Col, Row, Layout } from 'antd';
import { connect } from "react-redux";

const { Header, Sider, Content } = Layout;

export class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            section: window.location.href.split('/').pop(),
            horoscope: "Virgo",
            // selectedType: this.props.selectedType,
            selectedStyle: this.props.selectedStyle
        }
    }

    componentDidMount() {
        console.log(this.props.isAuthenticated)
    }

    render() {
        const background = () => {
            if(this.props.isAuthenticated !== true) {
                return {
                    margin: '0px',
                    background: `linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.1)), url(${Background}) fixed no-repeat center`,
                    position: 'relative',
                    backgroundSize: 'cover',
                    minHeight: '100%'
                }
            } else {
                let sign = require(`../images/${localStorage.getItem('horoscope')}_bg.png`);
                return {
                    margin: '0px',
                    background: `url(${sign}) fixed no-repeat center`,
                    position: 'relative',
                    backgroundSize: 'cover',
                    minHeight: '100%'
                }
            }
        }

        const renderNavbar = () => {
            if(this.props.isAuthenticated === true) {
                return <NavBarUser />
            } else {
                return <NavBar />
            }
        }
        
        return (
            <div>
                {renderNavbar()}

                <div className="bodyContainer row" style={background()}>
                    <Layout style={background()}>
                        <div className="col-3">
                            <Sider style={{minWidth: "fit-content"}}>
                                <ProductsTypeMenu {...this.state} />
                            </Sider>
                        </div>

                        {/* <Layout> */}
                            <div className="text-center col-8">
                            <Header>
                                <ProductsStyleMenu />
                            </Header>

                            <Content className="pt-5 pl-3" style={{marginBottom: "50px"}}>
                                <ProductsList {...this.state} />
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

const mapStateToProps = (state) => {
    return {
        // selectedType: state.productsType.selectedType,
        selectedStyle: state.productsStyle.selectedStyle,
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(ProductsPage)