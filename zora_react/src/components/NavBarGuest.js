import * as React from 'react';
import { Divider, Menu } from 'antd';
import Logo from '../images/logo.png';
import LoginModal from '../components/Login';

export default class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            openModal: false
        };
    }

    showLoginModal = () => {
        this.setState({ openModal: true })
    }

    hideLoginModal = () => {
        this.setState({ openModal: false })
    }

    render() {
        return (
            <div className="navbar">
                <div className="col-8">
                    <div className="logo">
                        <a href="/"><img src={Logo} className="pt-0" style={{ width: "60px", padding: "10px" }} alt="Logo"></img></a>
                        <span style={{ fontSize: "24px" }}>Zora</span>
                    </div>
                </div>
                <div className="col-4">
                    <Menu mode="horizontal">
                        <Menu.Item>
                            {/* <LoginModal className="col-2" /> */}
                            <a className=" col-6 pr-4" onClick={this.showLoginModal}>Login</a>
                        </Menu.Item>
                        <Menu.Item>
                            <a href="/signup" className=" col-6 pr-4">Sign Up</a>
                        </Menu.Item>
                    </Menu>
                    <LoginModal isOpen={this.state.openModal} hideModal={this.hideLoginModal} />
                </div>
                <Divider className="mt-0 mb-0" />
            </div>
        )
    }
}