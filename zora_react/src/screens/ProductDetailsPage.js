import * as React from "react";
import NavBar from "../components/NavBarGuest";
import ProductsTypeMenu from "../components/ProductsTypeMenu";
import ProductsStyleMenu from "../components/ProductsStyleMenu";
import { Footer } from "../components/Footer";
import Background from "../images/landing_bg.jpg"
import { Layout, Select, InputNumber } from 'antd';
import { connect } from "react-redux";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { NavBarUser } from "../components/NavBarUser";
import { getProductInfo } from "../redux/productInfo/actions";

const { Header, Sider, Content } = Layout;
const { Option } = Select;

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
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            img: "",
            price: ""
        }
    }

    componentDidMount() {
        // console.log(this.props.location)
        this.props.getProductInfo(this.props.location.data[0], this.props.location.data[1]);
    }
    
    componentDidUpdate() {
        // console.log(this.props.productInfo[0])
        if((this.state.name == "") && (this.props.productInfo !== null || undefined)) {
            this.setState({
                name: this.props.productInfo[0].name,
                img: this.props.productInfo[0].img,
                price: this.props.productInfo[0].price
            })
        }
    }

    onSizeChange = (value) => {
        console.log("Size chosen: ", value.value)
    }

    onQtyChange = (value) => {
        console.log("Qty: ", value)
    }

    render() {          
        return(
            <div>
                <NavBar />

                <div className="bodyContainer row" style={background}>
                    <Layout style={background}>
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
        productInfo: state.productInfo.info
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProductInfo: (id, name) => {
            dispatch(getProductInfo(id, name));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);