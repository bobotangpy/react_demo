import React from "react";
import { getSuggestions } from "../redux/suggestions/actions";
import { connect } from "react-redux";
import { Card, Col, Row, Tooltip } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const Suggestions = (props) => {
    if(props.suggestions !== undefined) {
        // const items = this.props.suggestions;
        let uniques = [...new Map(props.suggestions.map(item => [item['name'], item])).values()];
        
        const suggestedItems = uniques.map((item) => (
            <Col span={8} key={item.clothes_id}>
                <Tooltip title={item.name}>
                    <Link to={{pathname: "/details", data: [item.clothes_id, item.name]}}>
                        <Card hoverable
                            bodyStyle={{paddingRight: "10px", paddingLeft: "10px", whiteSpace: 'pre-line'}}
                            style={{ width: 190, margin: "20px" }}
                            cover={<img alt={item.name} src={item.img} />}
                        >
                            <Meta title={item.name} description={item.price} />
                        </Card>
                    </Link>
                </Tooltip>
            </Col>
        ));
        return (
            <div className="suggestions">
                <p className="pl-2" style={{textAlign: "left", color: "#fff", fontSize: "large"}}>Other {localStorage.getItem("horoscope")} also viewed: </p>
                <Row gutter={12}>
                    {suggestedItems}
                </Row>
            </div>
        )
    } else {
        return (
            <div className="suggestions">
                <p className="pl-2" style={{textAlign: "left", color: "#fff", fontSize: "large"}}>Other {localStorage.getItem("horoscope")} also viewed: </p>
                <Row gutter={12}>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        suggestions: state.suggestions.suggestions
    }
}

export default connect(mapStateToProps)(Suggestions);