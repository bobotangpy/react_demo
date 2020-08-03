import * as React from 'react';
import Cart from '../components/Cart';
import { connect } from 'react-redux';
import { logout } from '../redux/auth/actions';
import { Divider, Menu, Dropdown } from 'antd';
import { ShoppingCartOutlined, SettingOutlined, ProfileOutlined } from '@ant-design/icons';
import Logo from '../images/logo.png';

export class NavBarUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
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

        const setting = (
            <Menu style={{ marginTop: "15px" }}>
                <Menu.Item>
                    <a className="col-6 pr-4" onClick={this.showCartModal} >
                        <ShoppingCartOutlined style={{fontSize: "18px"}} /> Cart
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a className="col-6 pr-4" href="/myorder" >
                        <ProfileOutlined style={{fontSize: "18px"}}/> My Order
                    </a>
                </Menu.Item>
            </Menu>
        )

    return (
        <div className="navbar pr-0">
            <div className="col-6">
                <div className="logo">
                    <a href="/" style={{ color: "rgba(0, 0, 0, 0.65)" }}>
                        <img src={Logo} className="pt-0" style={{ width: "60px", padding: "10px" }} alt="Logo"></img>
                        <span style={{ fontSize: "24px" }}>Zora</span>
                    </a>
                </div>
            </div>
            <div className="col-6" style={{display: "flex", justifyContent: "flex-end"}}>
                <p className="greeting" style={{fontSize: "initial", minWidth: "fit-content", marginTop: "12px", paddingRight: "15px"}}>
                    Hello {userName}, the beautiful {userHoroscope} <img src={sign} alt="horoscope_sign" style={{width: "26px"}} />
                </p>
                <p className="mobileGreeting" style={{fontSize: "initial", minWidth: "fit-content", marginTop: "12px", paddingRight: "15px", display: "none"}}>
                    Hello {userName}, the beautiful <img src={sign} alt="horoscope_sign" style={{width: "26px"}} />
                </p>
                <Menu mode="horizontal">
                    <Menu.Item>
                        <Dropdown overlay={setting} placement="bottomCenter" arrow> 
                            <SettingOutlined /> 
                        </Dropdown>
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