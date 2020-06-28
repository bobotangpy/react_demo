import * as React from "react";
import { Menu } from "antd";
import { connect } from "react-redux";

const { SubMenu } = Menu;

export class ProductsTypeMenu extends React.Component {
    constructor(props) {
        super(props);

    }

    handleClick = e => {
        console.log(e.key)
        this.props.updateSelectedType(e.key)
    }

    render() {
        return (
            <div className="col-4 mt-3">
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256, textAlign: "center" }}
                    defaultSelectedKeys={['0']}
                    // defaultOpenKeys={['wTops']}
                    mode="inline"
                >
                    <Menu.Item key="0">
                        Horoscope Special
                    </Menu.Item>

                    <SubMenu key="women" title="Women">
                        <Menu.ItemGroup key="g1">
                            <Menu.Item key="wTops">Tops</Menu.Item>
                            <Menu.Item key="wBottoms">Bottoms</Menu.Item>
                            <Menu.Item key="wDresses">Dresses/ Suits</Menu.Item>
                            <Menu.Item key="wShoes">Shoes</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>

                    <SubMenu key="men" title="Men">
                        <Menu.ItemGroup key="g2">
                            <Menu.Item key="mTops">Tops</Menu.Item>
                            <Menu.Item key="mBottoms">Bottoms</Menu.Item>
                            <Menu.Item key="mSuits">Suits</Menu.Item>
                            <Menu.Item key="mShoes">Shoes</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedType: state.productsType.selectedType
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSelectedType: (key) => { dispatch({type: "UPDATE_TYPE", key: key}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsTypeMenu);