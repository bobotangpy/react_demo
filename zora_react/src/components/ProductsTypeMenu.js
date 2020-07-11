import * as React from "react";
import { Menu } from "antd";
import { connect } from "react-redux";

const { SubMenu } = Menu;

export class ProductsTypeMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: "horoscope",
            type: "",
            openKey: ""
        }
    }

   componentDidMount() {
        if (this.props.section === "products") {
            // if(this.state.selectedKey != "horoscope") {
            if(this.state.selectedKey !== "horoscope" && this.state.openKey !== "") {
                this.setState({openKey: "", selectedKey: "horoscope"}, ()=>this.props.updateSelectedType(this.state.type));
            }
        } else if (this.props.section === "women") {
            // if(this.state.selectedKey !== "women" ) {
            if(this.state.selectedKey !== "women" && this.state.openKey === "" ) {
                this.setState({type: "2", openKey: "wTops", selectedKey: "women"}, ()=>this.props.updateSelectedType(this.state.type));
            } else {
                this.setState({selectedKey: "women"});
            }
        } else if (this.props.section === "men") {
            // if(this.state.selectedKey !== "men") {
            if(this.state.selectedKey !== "men" && this.state.openKey === "" ) {
                this.setState({type: "2", openKey: "mTops", selectedKey: "men"}, ()=>this.props.updateSelectedType(this.state.type));
            } else {
                this.setState({selectedKey: "men"});
            }
        }
    }


    addPath(path) {
        let loc = window.location.href;
        let loca = loc.split("/")[0];
        window.history.replaceState(null, null, `${loca}/${path}`);
    }

    handleClick = (e) => {
        if (e.key == "wTops") {
            this.setState({selectedKey: "women", openKey: "wTops", type: "2"}, 
            () => this.props.updateSelectedType(this.state.type))
            if (this.props.section != "women") window.location.assign('/women');
            // this.setState({type: "2", selectedKey: "women"})
        } else if (e.key == "wBottoms") {
            this.setState({selectedKey: "women", openKey: "wShoes", type: "3"})
            if (this.props.section != "women") window.location.assign('/women');
            // this.setState({type: "3", selectedKey: "women"});
        } else if (e.key == "wDresses") {
            this.setState({selectedKey: "women", openKey: "wBottoms", type: "0"})
            if (this.props.section != "women") window.location.assign('/women');
            // this.setState({type: "0", selectedKey: "women"});
        } else if (e.key == "wShoes") {
            this.setState({selectedKey: "women", openKey: "wDresses", type: "1"})
            if (this.props.section != "women") window.location.assign('/women');
            // this.setState({type: "1", selectedKey: "women"})
        }

        if (e.key == "mTops") {
            this.setState({selectedKey: "men", openKey: "mTops", type: "2"}) 
            if (this.props.section != "men") window.location.assign('/men');
            // this.setState({type: "2"})
        } else if (e.key == "mBottoms") {
            this.setState({selectedKey: "men", openKey: "mBottoms", type: "3"})
            if (this.props.section != "men") window.location.assign('/men');
            // this.setState({type: "3"})
        } else if (e.key == "mSuits") {
            this.setState({selectedKey: "men", openKey: "mSuits", type:"0"})
            if (this.props.section != "men") window.location.assign('/men');
            // this.setState({type: "0"})
        } else if (e.key == "mShoes") {
            this.setState({selectedKey: "men", openKey: "mShoes", type: "1"})
            if (this.props.section != "men") window.location.assign('/men');
            // this.setState({type: "1"})
        }
        console.log(this.state)
        this.props.updateSelectedType(this.state.type);
    }

    render() {
        return (
            <div className="col-4 mt-3">
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256, textAlign: "center" }}
                    defaultOpenKeys={[this.state.openKey]}
                    defaultSelectedKeys={[this.state.selectedKey]}
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
        updateSelectedType: (selectedType) => { dispatch({ type: "UPDATE_TYPE", key: selectedType }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsTypeMenu);