import * as React from "react";
import { Menu } from "antd";
import { connect } from "react-redux";

const { SubMenu } = Menu;

export class ProductsTypeMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = (e) => {
        let type;

        if (e.key == "wTops") {
            type = "2";
            if(this.props.section != "women") window.location.assign('/women');
          } else if (e.key == "wBottoms") {
            type = "3";
            if(this.props.section != "women") window.location.assign('/women');
          } else if (e.key == "wDresses") {
            type = "0";
            if(this.props.section != "women") window.location.assign('/women');
          } else if (e.key == "wShoes") {
            type = "1";
            if(this.props.section != "women") window.location.assign('/women');
        }

        if (e.key == "mTops") {
            type = "2";
            if(this.props.section != "men") window.location.assign('/men');
          } else if (e.key == "mBottoms") {
            type = "3";
            if(this.props.section != "men") window.location.assign('/men');
          } else if (e.key == "mSuits") {
            type = "0";
            if(this.props.section != "men") window.location.assign('/men');
          } else if (e.key == "mShoes") {
            type = "1";
            if(this.props.section != "men") window.location.assign('/men');
        }

        this.props.updateSelectedType(type);
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
                    <Menu.Item key="horoscope" onClick={()=> window.location.assign('/products')}>
                        Horoscope Special
                    </Menu.Item>

                    <SubMenu key="women" title="Women">
                        <Menu.Item key="wTops">Tops</Menu.Item>
                        <Menu.Item key="wBottoms">Bottoms</Menu.Item>
                        <Menu.Item key="wDresses">Dresses/ Suits</Menu.Item>
                        <Menu.Item key="wShoes">Shoes</Menu.Item>
                    </SubMenu>

                    <SubMenu key="men" title="Men">
                        <Menu.Item key="mTops">Tops</Menu.Item>
                        <Menu.Item key="mBottoms">Bottoms</Menu.Item>
                        <Menu.Item key="mSuits">Suits</Menu.Item>
                        <Menu.Item key="mShoes">Shoes</Menu.Item>
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