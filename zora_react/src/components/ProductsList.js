import * as React from 'react';
import { connect } from 'react-redux';
import { getHoroscopeItems } from '../redux/productsList/actions';
import { Card, Col, Row, Tooltip } from 'antd';

const { Meta } = Card;

export class ProductsList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // console.log(this.props.horoscope, this.props.selectedStyle)
        this.props.getHoroscopeItems(this.props.horoscope, this.props.selectedStyle);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.selectedStyle !== this.props.selectedStyle){
            // console.log(this.props.horoscope, this.props.selectedStyle)
            this.props.getHoroscopeItems(this.props.horoscope, this.props.selectedStyle);
        }
    }

    render() {
        const productList = this.props.items.map((item) => (
            <Col span={8} key={item.clothes_id}>
                <Tooltip title={item.name}>
                <Card hoverable
                    bodyStyle={{paddingRight: "10px", paddingLeft: "10px", whiteSpace: 'pre-line'}}
                    style={{ width: 190, margin: "20px" }}
                    cover={<img alt={item.name} src={item.img} />}
                >
                    <Meta title={item.name} description={item.price} />
                </Card>
                </Tooltip>
            </Col>
        ));

        return (
            <Row gutter={12}>
                {productList}
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedType: state.productsType.selectedType,
        selectedStyle: state.productsStyle.selectedStyle,
        items: state.productsList.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getHoroscopeItems: (horoscope, style) => {
            dispatch(getHoroscopeItems(horoscope, style));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)