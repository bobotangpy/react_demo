import * as React from 'react';
import { connect } from 'react-redux';
import { logout } from '../redux/auth/actions';
import { Divider, Menu } from 'antd';
import Logo from '../images/logo.png';

export class NavBarUser extends React.Component {
    constructor(props) {
        super(props);
    }

    logout() {
        // vvvv NOT working
        // this.props.logout();
        localStorage.clear();
    }

    render() {
        const userHoroscope = localStorage.getItem('horoscope');
        const sign = require(`../images/${userHoroscope}.png`);

    return (
        <div className="navbar">
            <div className="col-7">
                <div className="logo">
                    <a href="/"><img src={Logo} className="pt-0" style={{ width: "60px", padding: "10px" }} alt="Logo"></img></a>
                    <span style={{ fontSize: "24px" }}>Zora</span>
                </div>
            </div>
            <div className="col-5" style={{display: "flex"}}>
                <p style={{fontSize: "initial", minWidth: "fit-content", marginTop: "12px"}}>
                    Hello, the beautiful {userHoroscope} <img src={sign} alt="horoscope_sign" style={{width: "26px"}} />
                </p>
                <Menu mode="horizontal">
                    <Menu.Item>
                        {/* <Cart /> */}
                    </Menu.Item>
                    <Menu.Item onClick={this.logout}>
                        <a href="/signup" className="col-6 pr-4">Log Out</a>
                    </Menu.Item>
                </Menu>
            </div>
            <Divider className="mt-0 mb-0" />
        </div>
    )
    }
}

const mapStateToProps = (state) => {
    // return {
    //     userHoroscope: state.auth.horoscope
    // }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logout());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarUser);