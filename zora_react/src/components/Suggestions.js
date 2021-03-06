import React from "react";
import { connect } from "react-redux";
import { getProductInfo } from "../redux/productInfo/actions";
import { Card, Col, Row, Tooltip } from 'antd';

const { Meta } = Card;
const gutterLayout = {
    gutter: {
        xs: { gutter: 8 },
        sm: { gutter: 8 },
        md: { gutter: 12 },
        lg: { gutter: 12 }
    },
};

const Suggestions = (props) => {

    if (props.suggestions !== undefined) {
        // Shuffle the suggestedItems
        let items = props.suggestions;
        for (let i = items.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [items[i], items[j]] = [items[j], items[i]];
        }
        let selected = props.suggestions.slice(0,3);
        
        const suggestedItems = selected.map((item) => (
            <Col span={8} key={item.clothes_id}>
                <Tooltip title={item.name}>
                    <Card hoverable
                        bodyStyle={{paddingRight: "10px", paddingLeft: "10px", whiteSpace: 'pre-line'}}
                        style={{ width: 190, margin: "20px" }}
                        cover={<img alt={item.name} src={item.img} />}
                        onClick={()=>props.updateInfo(item.clothes_id, item.name)}
                    >
                        <Meta title={item.name} description={item.price} />
                    </Card>
                </Tooltip>
            </Col>
        ));
        return (
            <div className="suggestions">
                <p className="pl-2" style={{textAlign: "left", color: "#fff", fontSize: "large"}}>Other {localStorage.getItem("horoscope")} also viewed: </p>
                <Row {...gutterLayout}>
                    {suggestedItems}
                </Row>
            </div>
        )
    } else {
        return (
            <div className="suggestions">
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        productInfo: state.productInfo.info,
        suggestions: state.suggestions.suggestions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProductInfo: (id, name) => {
            dispatch(getProductInfo(id, name));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Suggestions);