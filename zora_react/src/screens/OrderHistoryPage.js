import * as React from "react";
import NavBar from "../components/NavBarGuest";
import { NavBarUser } from "../components/NavBarUser";
import ProductsTypeMenu from "../components/ProductsTypeMenu";
import ProductsStyleMenu from "../components/ProductsStyleMenu";
import ProductsList from "../components/ProductsList";
import ProductDetails from "../components/ProductDetails";
import { Footer } from "../components/Footer";
import Background from "../images/landing_bg.jpg"
import { Table, Descriptions, List } from 'antd';
import { connect } from "react-redux";
import { getHoroscopeItems, getGenderItems } from '../redux/productsList/actions';


export class OrderHistoryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            section: window.location.href.split('/').pop(),
            // horoscope: "Virgo",
            // selectedType: this.props.selectedType,
            // selectedStyle: this.props.selectedStyle,
            // switchToDetails: false,
            item_id: "",
            item_name: ""
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);

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
                    minHeight: '100vh'
                }
            } else {
                let sign = require(`../images/${localStorage.getItem('horoscope')}_bg.png`);
                return {
                    margin: '0px',
                    background: `url(${sign}) center left fixed no-repeat`,
                    position: 'relative',
                    minHeight: '100vh',
                    display: "flex",
                    flexDirection: "column"
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
                    <h3 className="mt-4 ml-3 mr-3 text-center" style={{ color: "white" }}>My Order History</h3>

                    <div className="orderTable">
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
        // items: state.productsList.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getHoroscopeItems: (horoscope, style) => {
            dispatch(getHoroscopeItems(horoscope, style));
        },
        getGenderItems: (gender, selectedStyle, selectedType) => {
            dispatch(getGenderItems(gender, selectedStyle, selectedType));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistoryPage)