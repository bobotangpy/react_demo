import * as React from "react";
import { Menu } from "antd";
import { connect } from "react-redux";
import '../css/ProductStyleMenu.css';

export class ProductsStyleMenu extends React.Component {
    constructor(props){
        super(props);
    }
    
    handleClick = e => {
        // action dispatch pass e.key to reducer to update selectedStyle
        this.props.updateSelectedStyle(e.key);
    }

    render() {
        return (
            <div className="style mt-3 text-center" style={{width: "fit-content"}}>
                <Menu onClick={this.handleClick} selectedKeys={[this.props.selectedStyle]} mode="horizontal">
                    <Menu.Item key="0">
                        Trending
                    </Menu.Item>
                    <Menu.Item key="1">
                        Casual
                    </Menu.Item>
                    <Menu.Item key="2">
                        Formal
                    </Menu.Item>
                    <Menu.Item key="3">
                        Going-out-out
                    </Menu.Item>
                </Menu>
                {/* onClick not working */}
                {/* <button className="style" key="0" onClick={this.handleClick} selectedKeys={[this.props.selectedStyle]} >Trending</button>
                <button className="style" key="1" onClick={this.handleClick} selectedKeys={[this.props.selectedStyle]} >Casual</button>
                <button className="style" key="2" onClick={this.handleClick} selectedKeys={[this.props.selectedStyle]} >Formal</button>
                <button className="style" key="3" onClick={this.handleClick} selectedKeys={[this.props.selectedStyle]} >Going-out-out</button> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedStyle: state.productsStyle.selectedStyle
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSelectedStyle: (key) => { dispatch({type: 'UPDATE_STYLE', key: key}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsStyleMenu);