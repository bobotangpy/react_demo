import * as React from 'react';
import { connect } from 'react-redux';
import { logout } from '../redux/auth/actions';
import { Divider, Menu } from 'antd';
import Logo from '../images/logo.png';

export const NavBarUser = (props) => {
    const logout = () => {
        console.log(props)
    }
    return (
        <div className="navbar">
            <div className="col-8">
                <div className="logo">
                    <a href="/"><img src={Logo} className="pt-0" style={{ width: "60px", padding: "10px" }} alt="Logo"></img></a>
                    <span style={{ fontSize: "24px" }}>Zora</span>
                </div>
            </div>
            <div className="col-3">
                <Menu mode="horizontal">
                    <Menu.Item>
                        {/* <Cart /> */}
                    </Menu.Item>
                    <Menu.Item onClick={logout}>
                        <a href="/signup" className="col-6 pr-4">Log Out</a>
                    </Menu.Item>
                </Menu>
            </div>
            <Divider className="mt-0 mb-0" />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            dispatch(logout());
        }
    };
};

export default connect(mapDispatchToProps)(NavBarUser);