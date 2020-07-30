import * as React from "react";
import NavBar from "../components/NavBarGuest";
import { NavBarUser } from "../components/NavBarUser";
import { Footer } from "../components/Footer";
import ProductsTypeMenu from "../components/ProductsTypeMenu";
import ProductsStyleMenu from "../components/ProductsStyleMenu";
import ProductsList from "../components/ProductsList";
import ProductDetails from "../components/ProductDetails";
import { connect } from "react-redux";
import { getOrderItems } from '../redux/orderHistory/actions';
import Background from "../images/landing_bg.jpg";
import { List, Table } from 'antd';
import "../css/OrderHistoryPage.css";


export class OrderHistoryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            section: window.location.href.split('/').pop(),
            userId: localStorage.getItem('user_id'),
            orderItems: [],
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        if(this.props.isAuthenticated === true) {
            this.props.getOrderItems(this.state.userId)
        } else {
            window.location.href = '/no_match';
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.orderItems !== this.props.orderItems) {
            this.setState({ orderItems: this.props.orderItems})
        }
    }

    render() {
        const background = () => {
            if (this.props.isAuthenticated !== true) {
                return {
                    margin: '0px',
                    background: `linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.1)), url(${Background}) fixed no-repeat center`,
                    position: 'relative',
                    minHeight: '100vh',
                    display: "flex", 
                    flexFlow:"column",
                    alignItems: "center"
                }
            } else {
                let sign = require(`../images/${localStorage.getItem('horoscope')}_bg.png`);
                return {
                    margin: '0px',
                    background: `url(${sign}) center left fixed no-repeat`,
                    position: 'relative',
                    minHeight: '100vh',
                    display: "flex",
                    flexDirection: "column",
                    flexFlow:"column",
                    alignItems: "center",
                    paddingBottom: "50px"
                }
            }
        }

        const renderNavbar = () => {
            if (this.props.isAuthenticated === true) {
                return <NavBarUser />
            } else {
                return <NavBar />
            }
        }

        return (
            <div>
                {renderNavbar()}

                <div className="bodyContainer" style={background()}>
                    <h3 className="pt-4 pl-3 pr-3 text-center" style={{ color: "white" }}>My Order History</h3>
                        
                        {this.props.orderItems ? this.props.orderItems.map(({orderItems}) => {
                            let date = new Date(orderItems[0].order_date).toLocaleString();
                            return <div className="orderTable" style={{maxWidth: "700px", minWidth: "300px", padding: " 10px 20px"}}>
                                <List
                                    header={<div style={{fontSize: "large"}}>Order Date: {date}</div>}
                                    footer={<div style={{fontSize: "initial", textAlign: "right"}}> Total: HKD {orderItems[0].totalPrice}</div>}
                                    dataSource={orderItems}
                                    renderItem={item => (
                                        <List.Item key={item.id}>
                                            <List.Item.Meta
                                                avatar={ <img width={80} alt={item.name} src={item.img} /> }
                                                title={item.name}
                                                description={<span>Size: {item.size}</span>}
                                            />
                                            <div className="text-center" style={{display: "flex", flexDirection: "column"}}>
                                            <div>HKD {item.price}</div>
                                            <div>Quantity: {item.quantity}</div>
                                            </div>
                                        </List.Item>
                                    )}
                                >
                                </List>
                            </div>
                        }) : ""}
                </div>

                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        orderItems: state.orderHistory.orderItems,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getOrderItems: (userId) => {
            dispatch(getOrderItems(userId));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistoryPage)