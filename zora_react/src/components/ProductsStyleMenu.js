import * as React from "react";
import { Menu } from "antd";

export default class ProductsStyleMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current: "trending"
        }
    }
    handleClick = e => {
        this.setState({
            current: ""
        })
    }

    render() {
        return (
            <div className="mt-3 text-center" style={{width: "fit-content"}}>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="trending">
                        Trending
                    </Menu.Item>
                    <Menu.Item key="formal">
                        Formal
                    </Menu.Item>
                    <Menu.Item key="casual">
                        Casual
                    </Menu.Item>
                    <Menu.Item key="goingOut">
                        Going-out-out
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}