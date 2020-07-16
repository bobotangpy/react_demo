import * as React from "react";
import NavBar from "../components/NavBarGuest";
import ProductsTypeMenu from "../components/ProductsTypeMenu";
import ProductsStyleMenu from "../components/ProductsStyleMenu";
import Suggestions from "../components/Suggestions";
import { Footer } from "../components/Footer";
import Background from "../images/landing_bg.jpg"
import { Layout, Select, InputNumber } from 'antd';
import { connect } from "react-redux";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { NavBarUser } from "../components/NavBarUser";
import { getProductInfo } from "../redux/productInfo/actions";
import { getSuggestions } from "../redux/suggestions/actions";

const { Header, Sider, Content } = Layout;
const { Option } = Select;

export class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            img: "",
            price: "",
        }
    }

    componentDidMount() {
        this.props.getProductInfo(this.props.location.data[0], this.props.location.data[1]);
    }
    
    componentDidUpdate(prevProps) {
        // Render product details after redirected from ProductListPage
        if(prevProps.productInfo !== this.props.productInfo) {
            if((this.state.name == "") && (this.props.productInfo !== null || undefined)) {
                this.setState({
                    name: this.props.productInfo[0].name,
                    img: this.props.productInfo[0].img,
                    price: this.props.productInfo[0].price,
                })
            // Update the content after suggested items are clicked
            } else if((this.state.name != "") && (this.props.productInfo != null || undefined)) {
                this.setState({
                    name: this.props.productInfo[0].name,
                    img: this.props.productInfo[0].img,
                    price: this.props.productInfo[0].price,
                })
            }
        }
        
        // Get items for Suggestions only if the user is Logged in
        if((this.props.isAuthenticated === true) && (this.props.suggestions == null || undefined)) {
            let horo = localStorage.getItem("horoscope");
            let gender = this.props.productInfo[0].gender;
            let type = this.props.productInfo[0].type;
            this.props.getSuggestions(horo, gender, type);
        }
    }

    onSizeChange = (value) => {
        console.log("Size chosen: ", value.value)
    }

    onQtyChange = (value) => {
        console.log("Qty: ", value)
    }

    onSuggestedItemsClick = (id, name) => {
        this.props.getProductInfo(id, name);
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

        const showSuggestions = () => {
            if(this.props.isAuthenticated === true) {
                return <Suggestions updateInfo={this.onSuggestedItemsClick} />
            }
        }

        return(
            <div>
                {renderNavbar()}

                <div className="bodyContainer row" style={background()}>
                    <Layout style={background()}>
                        <div className="col-3">
                            <Sider style={{minWidth: "fit-content"}}>
                                <ProductsTypeMenu />
                            </Sider>
                        </div>

                        <div className="text-center col-9">
                        <Header>
                            <ProductsStyleMenu />
                        </Header>

                        <Content className="pt-5 pl-3" style={{marginBottom: "50px"}}>
                            <div className="row" style={{paddingBottom: "50px"}}>
                                {/* <div className="back-button">
                                    <a style={{textAlign: "left", color: "#fff"}} onClick={()=>window.history.back()}>Back</a>
                                </div> */}
                                <div className="col-6 col-s-12">
                                    <img src={this.state.img} 
                                        alt={this.state.name}
                                        style={{width: "90%", height: "auto"}}
                                    />
                                </div>

                                <div className="col-6 col-s-12" style={{textAlign: "left", color: "#fff"}}>
                                    <h3 style={{color: "#fff"}}>{this.state.name}</h3>
                                    <p style={{fontSize: "large"}}>{this.state.price}</p>
                                    <Select
                                        labelInValue
                                        defaultValue={{ value: '- Select Size -' }}
                                        style={{ minWidth: 120, width: "max-content", textAlign: "center" }}
                                        onChange={this.onSizeChange}
                                    >
                                        <Option value="XS" style={{textAlign: "center"}}>XS</Option>
                                        <Option value="S" style={{textAlign: "center"}}>S</Option>
                                        <Option value="M" style={{textAlign: "center"}}>M</Option>
                                        <Option value="L" style={{textAlign: "center"}}>L</Option>
                                        <Option value="XL" style={{textAlign: "center"}}>XL</Option>
                                    </Select>
                                    <div className="site-input-number-wrapper pt-4">
                                        <span style={{fontSize: "large"}}>Quantity: </span>
                                        <InputNumber min={1} max={1000} defaultValue={1} onChange={this.onQtyChange} />
                                    </div> <br/>
                                    <button style={{fontSize: "large"}}>Add to Cart</button>
                                </div>
                            </div>

                            {showSuggestions()}
                        </Content>
                        </div>
                    </Layout>
                </div>

                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        productInfo: state.productInfo.info,
        suggestions: state.suggestions.suggestions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProductInfo: (id, name) => {
            dispatch(getProductInfo(id, name));
        },
        getSuggestions: (horoscope, gender, type) => {
            dispatch(getSuggestions(horoscope, gender, type))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);