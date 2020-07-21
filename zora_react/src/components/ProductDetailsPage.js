import * as React from "react";
import Suggestions from "./Suggestions";
import { Select, InputNumber } from 'antd';
import { connect } from "react-redux";
import { getProductInfo } from "../redux/productInfo/actions";
import { getSuggestions } from "../redux/suggestions/actions";
import { addToCart } from "../redux/cart/actions";
import { getCartItems } from "../redux/cart/actions";

import "../css/ProductDetailsPage.css";

const { Option } = Select;

export class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            img: "",
            price: "",
            size: "- Select Size -",
            qty: 1,
            errorMessage: "",
        }
    }

    componentDidMount() {
        this.props.getProductInfo(this.props.item_id, this.props.item_name);
    }
    
    componentDidUpdate(prevProps) {
        // Render product details after redirected from ProductListPage
        if(prevProps.productInfo !== this.props.productInfo) {
            if((this.state.name == "") && (this.props.productInfo !== null || undefined)) {
                this.setState({
                    id: this.props.productInfo[0].id,
                    name: this.props.productInfo[0].name,
                    img: this.props.productInfo[0].img,
                    price: this.props.productInfo[0].price,
                })
            // Update the content after suggested items are clicked
            } else if((this.state.name != "") && (this.props.productInfo != null || undefined)) {
            // } else if((prevProps.productInfo == undefined) && (prevProps.productInfo !== this.props.productInfo)) {
                this.setState({
                    id: this.props.productInfo[0].id,
                    name: this.props.productInfo[0].name,
                    img: this.props.productInfo[0].img,
                    price: this.props.productInfo[0].price,
                })
            }
        }
        
        // Get items for Suggestions only if the user is Logged in
        if((this.props.isAuthenticated === true) && (this.props.suggestions == null || undefined) && (this.props.productInfo !== undefined)) {
            let horo = localStorage.getItem("horoscope");
            let gender = this.props.productInfo[0].gender;
            let type = this.props.productInfo[0].type;
            this.props.getSuggestions(horo, gender, type);
        }
    }

    onSizeChange = (value) => {
        console.log("Size chosen: ", value.value)
        this.setState({size: value.value, errorMessage: ""})
    }

    onQtyChange = (value) => {
        console.log("Qty: ", value)
        this.setState({qty: value})
    }

    addToCart = () => {
        let userId = localStorage.getItem('user_id');
        console.log(this.state.id, this.state.qty, this.state.size, userId)

        if(this.state.size === "- Select Size -") {
            this.setState({errorMessage: "Please select a size."});
        } else {
            this.props.addToCart(this.state.id, this.state.qty, this.state.size, userId)
        }
    }

    onSuggestedItemsClick = (id, name) => {
        this.props.getProductInfo(id, name);
    }

    render() {
        const error = {
            marginTop: "5px",
            fontSize: "initial",
            color: "red",
            display: this.state.errorMessage.length !== 0 ? "block" : "none"
        }

        const showSuggestions = () => {
            if(this.props.isAuthenticated === true) {
                return <Suggestions updateInfo={this.onSuggestedItemsClick} />
            }
        }

        return(
            <div>
                {/* {renderNavbar()} */}

                {/* <div className="bodyContainer row" style={background()}>
                    <Layout style={background()}>
                        <div className="col-3">
                            <Sider style={{minWidth: "fit-content"}}>
                                <ProductsTypeMenu onChange={()=>console.log('CHANGE.....')}/>
                            </Sider>
                        </div>

                        <div className="text-center col-9">
                        <Header>
                            <ProductsStyleMenu />
                        </Header>

                        <Content className="pt-5 pl-3" style={{marginBottom: "50px"}}> */}
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
                                    <span style={{fontSize: "large"}}>Size: </span>
                                    <Select
                                        labelInValue
                                        defaultValue={{ value: this.state.size }}
                                        style={{ minWidth: 120, width: "max-content", textAlign: "center" }}
                                        onChange={this.onSizeChange}
                                    >
                                        <Option value="XS" style={{textAlign: "center"}}>XS</Option>
                                        <Option value="S" style={{textAlign: "center"}}>S</Option>
                                        <Option value="M" style={{textAlign: "center"}}>M</Option>
                                        <Option value="L" style={{textAlign: "center"}}>L</Option>
                                        <Option value="XL" style={{textAlign: "center"}}>XL</Option>
                                    </Select>
                                    <span className="errMsg" style={error}>
                                        {this.state.errorMessage}
                                    </span>
                                    <div className="site-input-number-wrapper pt-4">
                                        <span style={{fontSize: "large"}}>Quantity: </span>
                                        <InputNumber min={1} max={1000} defaultValue={this.state.qty} onChange={this.onQtyChange} />
                                    </div> <br/>
                                    <button className="cartButton" onClick={this.addToCart}>Add to Cart</button>
                                </div>
                            </div>

                            {showSuggestions()}
                        {/* </Content>
                        </div>
                    </Layout>
                </div>

                <Footer /> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        productInfo: state.productInfo.info,
        suggestions: state.suggestions.suggestions,
        items: state.productsList.items,
        addToCartStatus: state.cartItems.message,
        cartItems: state.cartItems.cartItems,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProductInfo: (id, name) => {
            dispatch(getProductInfo(id, name));
        },
        getSuggestions: (horoscope, gender, type) => {
            dispatch(getSuggestions(horoscope, gender, type))
        },
        addToCart: (id, qty, size, userId) => {
            dispatch(addToCart(id, qty, size, userId))
        },
        getCartItems: (userId) => {
            dispatch(getCartItems(userId))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);