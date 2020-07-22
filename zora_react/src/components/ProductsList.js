import * as React from 'react';
import { connect } from 'react-redux';
import { getHoroscopeItems, getGenderItems, getTrendItems } from '../redux/productsList/actions';
import { Card, Col, Row, Tooltip } from 'antd';
// import { Link } from 'react-router-dom';

const { Meta } = Card;

export class ProductsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: this.props.selectedKey,
            selectedType: this.props.selectedType,
            selectedStyle: this.props.selectedStyle,
            gender: ""
        }
    }

    componentDidMount() {
        // get default items based on Type Menu (left menu)
        if (this.props.selectedKey === "products") {
            this.props.getHoroscopeItems(this.props.horoscope, this.props.selectedStyle);
        } else if (this.props.selectedKey !== "products") {
            if (this.props.selectedKey === "women") this.setState({ gender: 1 }, () =>
                this.props.getGenderItems(this.state.gender, this.state.selectedStyle, this.state.selectedType)
            )
            if (this.props.selectedKey === "men") this.setState({ gender: 0 }, () =>
                this.props.getGenderItems(this.state.gender, this.state.selectedStyle, this.state.selectedType)
            )
        }
    }

    componentDidUpdate(prevProps) {
        // check and update Style selected for Horoscope Highlights
        // if (this.props.section === "products" && prevProps.selectedStyle !== this.props.selectedStyle) {
        //     this.props.getHoroscopeItems(this.props.horoscope, this.props.selectedStyle);
        // }
        if (prevProps.selectedKey !== this.props.selectedKey && 
            prevProps.selectedType !== this.props.selectedType ||
            prevProps.selectedStyle !== this.props.selectedStyle && 
            this.props.selectedKey === "products")  {
                console.log('called products in ProductsList')
                this.props.getHoroscopeItems(this.props.horoscope, this.props.selectedStyle);
        }
        // check and update Style selected for items that are *not* Horoscope Highlights
        // if (prevProps.selectedStyle !== this.props.selectedStyle && this.props.section !== "products") {
        //     if (this.props.section === "women") {
        //         this.props.getTrendItems(1, this.props.selectedStyle, this.props.selectedType);
        //     }
        //     if (this.props.section === "men") {
        //         this.props.getTrendItems(0, this.props.selectedStyle, this.props.selectedType);
        //     }
        // }
        if (prevProps.selectedKey !== this.props.selectedKey || 
            prevProps.selectedType !== this.props.selectedType || 
            prevProps.selectedStyle !== this.props.selectedStyle && 
            this.props.selectedKey !== "products") {
                if (this.props.selectedKey === "women") {
                    console.log('called women in ProductsList')
                    this.setState({ gender: 1 }, () =>
                        this.props.getGenderItems(this.state.gender, this.props.selectedStyle, this.props.selectedType)
                    )
                }
                if (this.props.selectedKey === "men") {
                    console.log('called men in ProductsList')
                    this.setState({ gender: 0 }, () =>
                        this.props.getGenderItems(this.state.gender, this.props.selectedStyle, this.props.selectedType)
                    )
                }
        }
        // check and update Type(Horoscope, Women, Men) selected
        // if (prevProps.selectedType !== this.props.selectedType && this.props.section !== "products") {
        //     if (this.props.section === "women") {
        //         this.props.getGenderItems(1, this.props.selectedStyle, this.props.selectedType);
        //     }
        //     if (this.props.section === "men") {
        //         this.props.getGenderItems(0, this.props.selectedStyle, this.props.selectedType);
        //     }
        // }
    }

    render() {
        let items; 
        if(this.props.items !== undefined) {
            items = this.props.items;
        } else items = [];

        let uniques = [...new Map(items.map(item => [item['name'], item])).values()];

        const productList = uniques.map((item) => (
            <Col span={8} key={item.clothes_id}>
                <Tooltip title={item.name}>
                    {/* <Link to={{ pathname: `/details/${item.clothes_id}`, data: [item.clothes_id, item.name] }}> */}
                        <Card hoverable
                            bodyStyle={{ paddingRight: "10px", paddingLeft: "10px", whiteSpace: 'pre-line' }}
                            style={{ width: 190, margin: "20px" }}
                            cover={<img alt={item.name} src={item.img} />}
                            onClick={()=>this.props.goDetails(item.clothes_id, item.name)}
                        >
                            <Meta title={item.name} description={item.price} />
                        </Card>
                    {/* </Link> */}
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
        selectedKey: state.productsType.selectedKey,
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
        getGenderItems: (gender, selectedStyle, selectedType) => {
            dispatch(getGenderItems(gender, selectedStyle, selectedType));
        },
        // getTrendItems: (gender, style, type) => {
        //     dispatch(getTrendItems(gender, style, type));
        // },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)