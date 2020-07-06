import * as React from "react";
import { Menu } from "antd";
import { connect } from "react-redux";

const { SubMenu } = Menu;

export class ProductsTypeMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "2"
        }
    }

    handleClick = (e) => {
        console.log(e.key)

        // let type;
        if(e.key == "wTops" || "mTops") {
            this.setState({type: "2"});
        } else if(e.key == "wBottoms" || "mBottoms") {
            this.setState({type: "3"});
        // type = "3";
        } else if(e.key == "wDresses" || "mSuits") {
            this.setState({type: "0"});
            // type = "0";
        } else if(e.key == "wShoes" || "mShoes") {
            this.setState({type: "1"});
            // type = "1";
        }
        console.log(this.state.type)
        // this.props.updateSelectedType(e.key);
    }

    render() {
        let selectedKey, openKey;
        if(this.props.section === "products") {
            openKey = "horoscope";
            selectedKey = "";
        } else if(this.props.section === "women") {
            selectedKey = "women";
            openKey = "wTops";
        } else if(this.props.section === "men") {
            selectedKey = "men";
            openKey = "mTops";
        }

        return (
            <div className="col-4 mt-3">
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256, textAlign: "center" }}
                    defaultOpenKeys={[selectedKey]}
                    defaultSelectedKeys={[openKey]}
                    mode="inline"
                >
                    <Menu.Item key="horoscope">
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