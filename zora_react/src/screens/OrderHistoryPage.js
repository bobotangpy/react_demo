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
import Background from "../images/landing_bg.jpg"
import { List } from 'antd';
import "../css/OrderHistoryPage.css"


export class OrderHistoryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            section: window.location.href.split('/').pop(),
            userId: localStorage.getItem('user_id'),
            orderItems: []
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        if(this.props.isAuthenticated === true) {
            this.props.getOrderItems(this.state.userId)
            this.setState({ orderItems: this.props.orderItems})
            console.log(this.props.orderItems)
        } else {
            window.location.href = '/no_match';
        }
    }

    render() {
        const columns = [
            {
                // title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                dataIndex: 'size',
                key: 'size'
            },
            {
                dataIndex: 'quantity',
                key: 'quantity'
            },
            {
                dataIndex: 'price',
                key: 'price'
            }
        ]

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
                    alignItems: "center"
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

        const orderHistory = () => {
            
        }

        return (
            <div>
                {renderNavbar()}

                <div className="bodyContainer" style={background()}>
                    <h3 className="pt-4 pl-3 pr-3 text-center" style={{ color: "white" }}>My Order History</h3>

                    <div className="orderTable" style={{width: "800px", padding: "20px"}}>
                        <List
                            header={<div>Order Date: </div>}
                            dataSource={this.state.orderItems}
                            renderItem={item => (
                                <List.Item key={item.id}>
                                    <List.Item.Meta
                                        avatar={ <img width={80} alt={item.name} src={item.img} /> }
                                        title={item.name}
                                        description={<span>Size: {item.size}</span>}
                                    />
                                    <div className="text-center" style={{display: "flex", flexDirection: "column"}}>
                                    <div>HKD {item.price}</div>
                                    <div>{item.quantity}</div>
                                    </div>
                                </List.Item>
                            )}
                        >
                        </List>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // selectedKey: state.productsType.selectedKey,
        // selectedType: state.productsType.selectedType,
        // selectedStyle: state.productsStyle.selectedStyle,
        isAuthenticated: state.auth.isAuthenticated,
        orderItems: state.orderHistory.orderItems
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