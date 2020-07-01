import * as React from "react";
import NavBar from "../components/NavBarGuest";
import ProductsTypeMenu from "../components/ProductsTypeMenu";
import ProductsStyleMenu from "../components/ProductsStyleMenu";
import ProductsList from "../components/ProductsList";
import { Footer } from "../components/Footer";
import Background from "../images/landing_bg.jpg"
import { Card, Col, Row, Layout } from 'antd';
import { connect } from "react-redux";
import { NavBarUser } from "../components/NavBarUser";

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

export class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedType: this.props.selectedType,
            selectedStyle: this.props.selectedStyle
        }
    }

    componentDidMount() {
        console.log(this.state)
    //     console.log(this.props.selectedType, this.props.selectedStyle)
    //     this.setState({
    //         selectedType: this.props.selectedType,
    //         selectedStyle: this.props.selectedStyle
    //     })
    }

    handleClick = e => {
        console.log('click', e)
    }

    render() {
        let user;
        const renderNavbar = () => {
            if(user === 'guest') {
                return <NavBar />
            } else {
                return <NavBarUser />
            }
        }
        
        return (
            <div>
                {renderNavbar()}

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
                                <ProductsList />
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
        selectedType: state.productsType.selectedType,
        selectedStyle: state.productsStyle.selectedStyle,
    }
}

export default connect(mapStateToProps)(ProductsPage)