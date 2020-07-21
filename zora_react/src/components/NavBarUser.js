import * as React from 'react';
import Cart from '../components/Cart';
import { connect } from 'react-redux';
import { logout } from '../redux/auth/actions';
import { Divider, Menu } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Logo from '../images/logo.png';

export class NavBarUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false
        }
    }

    logout() {
        localStorage.clear();
    }

    showCartModal = () => {
        this.setState({ openModal: true })
    }

    hideCartModal = () => {
        this.setState({ openModal: false })
    }

    render() {
        const userName = localStorage.getItem('user_name');
        const userHoroscope = localStorage.getItem('horoscope');
        const sign = require(`../images/${userHoroscope}.png`);

    return (
        <div className="navbar">
            <div className="col-6">
                <div className="logo">
                    <a href="/"><img src={Logo} className="pt-0" style={{ width: "60px", padding: "10px" }} alt="Logo"></img></a>
                    <span style={{ fontSize: "24px" }}>Zora</span>
                </div>
            </div>
            <div className="col-6" style={{display: "flex", justifyContent: "flex-end"}}>
                <p style={{fontSize: "initial", minWidth: "fit-content", marginTop: "12px", paddingRight: "15px"}}>
                    Hello {userName}, the beautiful {userHoroscope} <img src={sign} alt="horoscope_sign" style={{width: "26px"}} />
                </p>
                <Menu mode="horizontal">
                    <Menu.Item>
                        <a className="col-6 pr-4" onClick={this.showCartModal}><ShoppingCartOutlined style={{fontSize: "20px"}}/>Cart</a>
                    </Menu.Item>
                    <Menu.Item onClick={this.logout}>
                        <a href="/" className="col-6 pr-4">Log Out</a>
                    </Menu.Item>
                </Menu>
                <Cart isOpen={this.state.openModal} hideModal={this.hideCartModal} />
            </div>
            <Divider className="mt-0 mb-0" />
        </div>
    )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logout());
        }
    };
};

export default connect(mapDispatchToProps)(NavBarUser);