import * as React from 'react';
import { connect } from 'react-redux';
import { getHoroscopeItems, getGenderItems } from '../redux/productsList/actions';
import { Card, Col, Row, Tooltip } from 'antd';

const { Meta } = Card;

export class ProductsList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // get default items based on Type Menu (left menu)
        if(this.props.section === "products") {
            this.props.getHoroscopeItems(this.props.horoscope, this.props.selectedStyle);
        } else if(this.props.section === "women") {
            this.props.getGenderItems(1, this.props.selectedStyle, this.props.selectedType);
        } else if(this.props.section === "men") {
            this.props.getGenderItems(0, this.props.selectedStyle, this.props.selectedType);
        }
    }

    componentDidUpdate(prevProps) {
        // check and update Style selected
        if(prevProps.selectedStyle !== this.props.selectedStyle){
            // console.log(this.props.horoscope, this.props.selectedStyle)
            this.props.getHoroscopeItems(this.props.horoscope, this.props.selectedStyle);
        }
        // check and update Type(Horoscope, Women, Men) selected
        if(prevProps.selectedType !== this.props.selectedType){
            this.props.getHoroscopeItems(this.props.horoscope, this.props.selectedType);
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
        },
        getGenderItems: (gender, style, type) => {
            dispatch(getGenderItems(gender, style, type));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)