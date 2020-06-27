import * as React from "react";
import { Menu } from "antd";

const { SubMenu } = Menu;

export default class ProductsTypeMenu extends React.Component {
    handleClick = e => {
        console.log('click', e)
    }

    render() {
        return (
            <div className="col-4 mt-3">
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256, textAlign: "center" }}
                    defaultSelectedKeys={['op1']}
                    defaultOpenKeys={['1']}
                    mode="inline"
                >
                    <Menu.Item key="op1">
                        Horoscope Special
                        </Menu.Item>

                    <SubMenu key="op2" title="Women">
                        <Menu.ItemGroup key="g1">
                            <Menu.Item key="1">Tops</Menu.Item>
                            <Menu.Item key="2">Bottoms</Menu.Item>
                            <Menu.Item key="3">Dresses/ Suits</Menu.Item>
                            <Menu.Item key="4">Shoes</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>

                    <SubMenu key="op3" title="Men">
                        <Menu.ItemGroup key="g2">
                            <Menu.Item key="5">Tops</Menu.Item>
                            <Menu.Item key="6">Bottoms</Menu.Item>
                            <Menu.Item key="7">Suits</Menu.Item>
                            <Menu.Item key="8">Shoes</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}