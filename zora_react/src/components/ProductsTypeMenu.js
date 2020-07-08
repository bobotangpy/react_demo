import * as React from "react";
import { Menu } from "antd";
import { connect } from "react-redux";

const { SubMenu } = Menu;

export class ProductsTypeMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "",
            openKey: ""
        }
    }

    handleClick = (e) => {
        // let type;

        if (e.key == "wTops") {
            if (this.props.section != "women") window.location.assign('/women');
            // type = "2";
            this.setState({type: "2"})
        } else if (e.key == "wBottoms") {
            if (this.props.section != "women") {
                window.location.assign('/women');
                e.preventDefault();
            }
            // type = "3";
            this.setState({type: "3"})
        } else if (e.key == "wDresses") {
            if (this.props.section != "women") window.location.assign('/women');
            // type = "0";
            this.setState({type: "0"})
        } else if (e.key == "wShoes") {
            if (this.props.section != "women") window.location.assign('/women');
            // type = "1";
            this.setState({type: "1"})
        }

        if (e.key == "mTops") {
            if (this.props.section != "men") window.location.assign('/men');
            // type = "2";
            this.setState({type: "2"})
        } else if (e.key == "mBottoms") {
            if (this.props.section != "men") window.location.assign('/men');
            // type = "3";
            this.setState({type: "3"})
        } else if (e.key == "mSuits") {
            if (this.props.section != "men") window.location.assign('/men');
            // type = "0";
            this.setState({type: "0"})
        } else if (e.key == "mShoes") {
            if (this.props.section != "men") window.location.assign('/men');
            // type = "1";
            this.setState({type: "1"})
        }
        console.log(this.state)
        // this.props.updateSelectedType(type);
        this.props.updateSelectedType(this.state.type);
    }

    convertTypeW = (type) => {
        type = "0" ? this.state.openKey = "wTops" : 
        type = "1" ? this.state.openKey = "wShoes" : 
        type = "2" ? this.state.openKey = "wBottoms" : 
        type = "3" ? this.state.openKey = "wDresses" : "";
    }

    convertTypeM = (type) => {
        type = "0" ? this.state.openKey = "mTops" : 
        type = "1" ? this.state.openKey = "mShoes" : 
        type = "2" ? this.state.openKey = "mBottoms" : 
        type = "3" ? this.state.openKey = "mSuits" : "";
    }

    render() {
        let selectedKey, openKey;
        if (this.props.section === "products") {
            openKey = "horoscope";
            selectedKey = "";
        } else if (this.props.section === "women") {
            selectedKey = "women";
            openKey = "wTops";
            // this.state.type = null ? openKey = "wTops" : this.convertTypeW(this.state.type);
            // openKey = this.state.openKey
        } else if (this.props.section === "men") {
            selectedKey = "men";
            openKey = "mTops";
            // this.state.type = null ? openKey = "mTops" : this.convertTypeW(this.state.type);
            // openKey = this.state.openKey;
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
                    <Menu.Item key="horoscope" onClick={() => window.location.assign('/products')}>
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
        updateSelectedType: (key) => { dispatch({ type: "UPDATE_TYPE", key: key }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsTypeMenu);