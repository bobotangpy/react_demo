import * as React from 'react';
import { connect } from 'react-redux';
import { getHoroscopeItems, getGenderItems, getTrendItems } from '../redux/productsList/actions';
import { getProductInfo } from '../redux/productInfo/actions';
import { Card, Col, Row, Tooltip } from 'antd';
import { Link } from 'react-router-dom';

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
        // check and update Style selected for Horoscope Highlights
        if(this.props.section === "products" && prevProps.selectedStyle !== this.props.selectedStyle){
            this.props.getHoroscopeItems(this.props.horoscope, this.props.selectedStyle);
        }
        // check and update Style selected for items that are *not* Horoscope Highlights
        if(prevProps.selectedStyle !== this.props.selectedStyle && this.props.section !== "products") {
            if(this.props.section === "women") {
                this.props.getTrendItems(1, this.props.selectedStyle, this.props.selectedType);
            }
            if(this.props.section === "men") {
                this.props.getTrendItems(0, this.props.selectedStyle, this.props.selectedType);
            }
        }
        // check and update Type(Horoscope, Women, Men) selected
        if(prevProps.selectedType !== this.props.selectedType && this.props.section !== "products"){
            if(this.props.section === "women") {
                this.props.getGenderItems(1, this.props.selectedStyle, this.props.selectedType);
            }
            if(this.props.section === "men") {
                this.props.getGenderItems(0, this.props.selectedStyle, this.props.selectedType);
            }
        }
    }

    render() {
        const items = this.props.items;
        let uniques = [...new Map(items.map(item => [item['name'], item])).values()];

        const productList = uniques.map((item) => (
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
        },
        getTrendItems: (gender, style, type) => {
            dispatch(getTrendItems(gender, style, type));
        },
        // getProductInfo: (id, name) => {
        //     dispatch(getProductInfo(id, name));
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)