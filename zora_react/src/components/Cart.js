import * as React from "react";
import { connect } from "react-redux";
import { loginUser } from "../redux/auth/actions";
import { getCartItems, removeCartItem, updateItemQty } from "../redux/cart/actions";
import { Modal, Button, List, InputNumber } from "antd"
import "../css/Login.css";

const layout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    }
};

export class CartModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: localStorage.getItem('user_id'),
            modalVisible: false,
            cartItems: []
        }
    }

    componentDidMount() {
        if (this.props.isAuthenticated === true) {
            if(this.state.cartItems.length === 0 || this.props.cartItems.length !== 0) {
                this.props.getCartItems(this.state.userId)
                this.setState({ cartItems: this.props.cartItems })
            }
        }
    }

    componentDidUpdate(prevProps) {
        if ((this.props.isOpen == true) && (prevProps.isOpen !== this.props.isOpen)) {
            this.setState({ modalVisible: true })
        }

        if (prevProps.addToCartStatus !== this.props.addToCartStatus && this.props.addToCartStatus === "success") {
            this.props.getCartItems(localStorage.getItem('user_id'))
        }

        if (prevProps.cartItems !== this.props.cartItems) {
            console.log(this.props.cartItems)
            this.setState({ cartItems: this.props.cartItems })
        }
    }

    setModalVisible(modalVisible) {
        this.setState({ modalVisible });
    }

    closeModal = () => {
        this.setModalVisible(false);
        this.props.hideModal();
    }

    handleCheckout = () => {
        console.log("Checkout")
    }

    removeItem = (id) => {
        this.props.removeCartItem(id, this.state.userId)
    }

    upadteQty = (id, e, size) => {
        // console.log(e)
        this.props.updateItemQty(id, e, size, this.state.userId)
    }

    render() {
        return (
            <div>
                <Modal className="cartModal"
                    title="Your Shopping Cart"
                    visible={this.state.modalVisible}
                    onOk={this.handleCheckout}
                    onCancel={this.closeModal}
                    footer={[
                        <div style={{textAlign: "right"}}>
                            <p style={{fontSize: "large", fontWeight: "500"}}>
                                Total: HKD {this.state.cartItems.length > 0 ? this.state.cartItems[0].totalPrice : 0 }
                            </p>
                        </div>,
                        <Button key="submit" type="primary" onClick={this.handleCheckout}>
                            Checkout
                        </Button>
                    ]}
                >
                    <List
                        dataSource={this.state.cartItems}
                        renderItem={item => (
                            <List.Item key={item.id}>
                                <List.Item.Meta
                                    avatar={ <img width={80} alt={item.name} src={item.img} /> }
                                    title={item.name}
                                    description={<span>Size: {item.size}</span>}
                                />
                                <div className="text-center" style={{display: "flex", flexDirection: "column"}}>
                                <div>HKD {item.price}</div>
                                <div>
                                    <InputNumber min={1} max={200} 
                                    defaultValue={item.quantity} 
                                    onChange={(e) => this.upadteQty(item.id, e, item.size)} />
                                </div>
                                </div>
                                <div><Button onClick={()=>this.removeItem(item.id)}>Remove</Button></div>
                            </List.Item>
                        )}
                    >
                    </List>
                </Modal>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        email: state.email,
        password: state.password,
        isAuthenticated: state.auth.isAuthenticated,
        loginErrorMessage: state.auth.loginErrorMessage,
        addToCartStatus: state.cartItems.message,
        cartItems: state.cartItems.cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => {
            dispatch(loginUser(email, password))
        },
        getCartItems: (userId) => {
            dispatch(getCartItems(userId))
        },
        removeCartItem: (id, userId) => {
            dispatch(removeCartItem(id, userId))
        },
        updateItemQty: (id, qty, size, userId) => {
            dispatch(updateItemQty(id, qty, size, userId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartModal)