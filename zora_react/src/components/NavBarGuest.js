import * as React from 'react';
import { Divider } from 'antd';
import Logo from '../images/logo.png';

export default class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="col-8">
                    <div className="logo">
                        <img src={Logo} className="pt-0" style={{ width: "60px", padding: "10px" }} alt="Logo"></img>
                        <span style={{ fontSize: "24px" }}>Zora</span>
                    </div>
                </div>
                <div className="col-4" style={{ textAlign: "end" }}>
                    <a href="#" className="pr-4">Login</a>
                    <a href="#" className="pr-4">Sign Up</a>
                </div>
                <Divider className="mt-0 mb-0" />
            </div>
        )
    }
}