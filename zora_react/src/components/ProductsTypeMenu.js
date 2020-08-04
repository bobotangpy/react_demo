import * as React from "react";
import { Menu, Drawer } from "antd";
import { UnorderedListOutlined, ProfileOutlined, AppstoreOutlined } from "@ant-design/icons";
import { connect } from "react-redux";

const { SubMenu } = Menu;

export class ProductsTypeMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: this.props.selectedKey,
            type: this.props.selectedType,
            openKey: "",
            visible: false
        }
    }

   componentDidMount() {
       if(this.state.selectedKey === "women") this.setState({openKey: "wTops"})
       if(this.state.selectedKey === "men") this.setState({openKey: "mTops"})
    }

    addPath(path) {
        let loc = window.location.href;
        let loca = loc.split("/")[0];
        window.history.replaceState(null, null, `${loca}/${path}`);
    }

    handleClick = (e) => {
        console.log(e.key)
        if (e.key == "horoscope") {
            this.setState({selectedKey: "products", openKey: "", type: ""}, () => 
                this.props.updateSelectedType(this.state.type, this.state.selectedKey)
            );
        }

        /** Women Menu **/ 
        if (e.key == "wTops") {
            this.setState({selectedKey: "women", openKey: "wTops", type: "2"}, () => 
                this.props.updateSelectedType(this.state.type, this.state.selectedKey)
            );
        } else if (e.key == "wBottoms") {
            this.setState({selectedKey: "women", openKey: "wBottoms", type: "3"}, () => 
                this.props.updateTypeKey(this.state.type, this.state.selectedKey),
                this.props.updateSelectedType(this.state.type, this.state.selectedKey),
            );
        } else if (e.key == "wDresses") {
            this.setState({selectedKey: "women", openKey: "wDresses", type: "0"}, () => 
                this.props.updateSelectedType(this.state.type, this.state.selectedKey)
                );
        } else if (e.key == "wShoes") {
            this.setState({selectedKey: "women", openKey: "wShoes", type: "1"}, () => 
                this.props.updateSelectedType(this.state.type, this.state.selectedKey)
            );
        }

        /** Men Menu **/ 
        if (e.key == "mTops") {
            this.setState({selectedKey: "men", openKey: "mTops", type: "2"}, () => 
                this.props.updateSelectedType(this.state.type, this.state.selectedKey)
            );
        } else if (e.key == "mBottoms") {
            this.setState({selectedKey: "men", openKey: "mBottoms", type: "3"}, () => 
                this.props.updateSelectedType(this.state.type, this.state.selectedKey)
            );
        } else if (e.key == "mSuits") {
            this.setState({selectedKey: "men", openKey: "mSuits", type:"0"}, () => 
                this.props.updateSelectedType(this.state.type, this.state.selectedKey)
            );
        } else if (e.key == "mShoes") {
            this.setState({selectedKey: "men", openKey: "mShoes", type: "1"}, () => 
                this.props.updateSelectedType(this.state.type, this.state.selectedKey)
            );
        }

        setTimeout(() => {
            console.log(this.props.selectedType, this.props.selectedKey)
        }, 200);
    }

    showDrawer = () => {
        this.setState({ visible: true });
      };
    onClose = () => {
        this.setState({ visible: false });
    };    

    render() {
        return (
            <div className="col-4 mt-3">
                <Menu 
                    // className="desktopview"
                    onClick={this.handleClick}
                    style={{ width: 240, textAlign: "center" }}
                    defaultOpenKeys={[this.state.openKey]}
                    defaultSelectedKeys={[this.state.selectedKey]}
                    mode="inline"
                >
                    <Menu.Item key="horoscope">
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

{/*                 
                <UnorderedListOutlined className="mobileview"
                    onClick={this.showDrawer} 
                    style={{ background: "#ffffff", fontSize: "xx-large", borderRadius: "2px", display: "none" }} />
                <Drawer
                    // title="Basic Drawer"
                    placement="left"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <Menu
                    onClick={this.handleClick}
                    style={{ width: 232, textAlign: "center" }}
                    defaultOpenKeys={[this.state.openKey]}
                    defaultSelectedKeys={[this.state.selectedKey]}
                    mode="inline"
                    >
                        <Menu.Item key="horoscope">
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
                </Drawer>
             */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedType: state.productsType.selectedType,
        selectedKey: state.productsType.selectedKey
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSelectedType: (selectedType, selectedKey) => { 
            dispatch({ type: "UPDATE_TYPE", selectedType: selectedType, selectedKey: selectedKey }) 
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsTypeMenu);