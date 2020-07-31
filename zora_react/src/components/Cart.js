import * as React from "react";
import { connect } from "react-redux";
import { getCartItems, removeCartItem, updateItemQty } from "../redux/cart/actions";
import { addOrderItems } from "../redux/orderHistory/actions";
import { Modal, Button, List, InputNumber, message } from "antd"

export class CartModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: localStorage.getItem('user_id'),
            modalVisible: false,
            cartItems: [],
            checkoutMsg: false
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
            // console.log(this.props.cartItems)
            this.setState({ cartItems: this.props.cartItems })
        }

        if (prevProps.orderMsg !== this.props.orderMsg && this.props.orderMsg === "Order success") {
            this.setState({ checkoutMsg: true })
            // Reset
            setTimeout(() => {
                this.setState({ checkoutMsg: false })
            }, 100);

            this.state.cartItems.forEach(item => {
                this.props.removeCartItem(item.id, this.state.userId)
            })
            this.closeModal();
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
        if(this.props.cartItems.length !== 0 ) {
            this.props.placeOrder(this.state.userId);
        }
    }

    removeItem = (id) => {
        this.props.removeCartItem(id, this.state.userId)
    }

    upadteQty = (id, e, size) => {
        // console.log(e)
        this.props.updateItemQty(id, e, size, this.state.userId)
    }

    render() {
        const orderSuccessMsg = () => {
            if (this.state.checkoutMsg === true && this.state.cartItems.length === 0) {
                return message.success("Order placed successfully.")
            }
        }
        return (
            <div>
                {orderSuccessMsg()}

                <Modal className="cartModal"
                    title="My Shopping Cart"
                    visible={this.state.modalVisible}
                    onOk={this.handleCheckout}
                    onCancel={this.closeModal}
                    style={{top: "50px"}}
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
                                <div><Button style={{marginTop: "4px", padding: "1px 8px"}}
                                            onClick={()=>this.removeItem(item.id)}>
                                                <p style={{fontSize: "small", marginBottom:"0"}}>Remove</p>
                                    </Button></div>
                                </div>
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
        isAuthenticated: state.auth.isAuthenticated,
        addToCartStatus: state.cartItems.message,
        cartItems: state.cartItems.cartItems,
        orderMsg: state.orderHistory.message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCartItems: (userId) => {
            dispatch(getCartItems(userId))
        },
        removeCartItem: (id, userId) => {
            dispatch(removeCartItem(id, userId))
        },
        updateItemQty: (id, qty, size, userId) => {
            dispatch(updateItemQty(id, qty, size, userId))
        },
        placeOrder: (userId) => {
            dispatch(addOrderItems(userId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartModal)