import * as React from "react";
import { Menu } from "antd";
import { connect } from "react-redux";
import '../css/ProductStyleMenu.css';

export const ProductsStyleMenu = (props) => {
    
    const handleClick = e => {
        // Action dispatch pass e.key to reducer to update selectedStyle
        props.updateSelectedStyle(e.key);
    }

    return (
        <div className="style mt-3 text-center" style={{width: "fit-content"}}>
            <Menu onClick={handleClick} selectedKeys={[props.selectedStyle]} mode="horizontal">
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
        </div>
    )
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