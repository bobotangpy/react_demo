import * as React from 'react';
import { connect } from 'react-redux';
import { getHoroscopeItems, getGenderItems } from '../redux/productsList/actions';
import { Card, Col, Row, Tooltip } from 'antd';

const { Meta } = Card;
const layout = {
    span: {
        xs: { span: 12 },
        sm: { span: 12 },
        md: { span: 8 },
        lg: { span: 8 },
    },
};

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
        console.log('MOUNT in Products LIST')
        console.log('type & key: ', this.props.type, this.props.key)
        console.log('selected: ', this.props.selectedType, this.props.selectedKey)
        // Get default items based on Type Menu (left menu)
        if (this.props.section === "products") {
            this.props.getHoroscopeItems(this.props.horoscope, this.props.selectedStyle);
            // Update selectedKey
            if(this.state.selectedKey.length < 1) this.setState({ selectedKey: "products" }, () => {
                this.props.updateSelectedType(this.props.selectedType, this.state.selectedKey)
            });
        } else if (this.props.section !== "products") {
            if (this.props.section === "women") {
                this.setState({ gender: 1 }, () =>
                this.props.getGenderItems(this.state.gender, this.state.selectedStyle, this.state.selectedType))
                // Update selectedKey
                if(this.state.selectedKey.length < 1) this.setState({ selectedKey: "women" }, () => {
                    this.props.updateSelectedType(this.props.selectedType, this.state.selectedKey)
                });
            }

            if (this.props.section === "men") {
                console.log('set men frm section')
                this.setState({ gender: 0 }, () =>
                this.props.getGenderItems(this.state.gender, this.state.selectedStyle, this.state.selectedType))
                // Update selectedKey
                if(this.state.selectedKey.length < 1) this.setState({ selectedKey: "men" }, () => {
                    this.props.updateSelectedType(this.props.selectedType, this.state.selectedKey)
                });
            }
        }
    }

    componentDidUpdate(prevProps) {
        console.log('any UPdates from LIST???? ', 'type: ', this.props.selectedType, 'key: ', this.props.selectedKey)
        // check and update Style selected for Horoscope Highlights
        if (prevProps.selectedKey !== this.props.selectedKey && 
            prevProps.selectedType !== this.props.selectedType ||
            prevProps.selectedStyle !== this.props.selectedStyle && 
            this.props.selectedKey === "products")  {
                console.log('called products in ProductsList')
                this.props.getHoroscopeItems(this.props.horoscope, this.props.selectedStyle);
                // if(this.state.section !== 'products') window.history.pushState({}, null, 'products');
            }

        if (prevProps.selectedKey !== this.props.selectedKey || 
            prevProps.selectedType !== this.props.selectedType || 
            prevProps.selectedStyle !== this.props.selectedStyle) {
                if (this.props.selectedKey === "women") {
                    console.log('called women in ProductsList')
                    this.setState({ gender: 1 }, () =>
                        this.props.getGenderItems(this.state.gender, this.props.selectedStyle, this.props.selectedType)
                    )
                    // Update URL path
                    // if(this.state.section !== 'women') window.history.pushState({}, null, 'women');
                }
                if (this.props.selectedKey === "men") {
                    console.log('called men in ProductsList')
                    console.log(this.props.selectedType, this.props.selectedStyle)
                    this.setState({ gender: 0 }, () =>
                        this.props.getGenderItems(this.state.gender, this.props.selectedStyle, this.props.selectedType)
                    )
                    // Update URL path
                    // if(this.state.section !== 'men') window.history.pushState({}, null, 'men');
                }
        }
    }

    render() {
        let items, uniques; 
        if(this.props.items !== undefined) {
            items = this.props.items;
            uniques = [...new Map(items.map(item => [item['name'], item])).values()];
        } else items = [];
        
        const productList = uniques.map((item) => (
            <Col {...layout} key={item.clothes_id}>
                <Tooltip title={item.name}>
                    <Card hoverable
                        bodyStyle={{ paddingRight: "10px", paddingLeft: "10px", whiteSpace: 'pre-line' }}
                        style={{ width: 190, margin: "20px" }}
                        cover={<img alt={item.name} src={item.img} />}
                        onClick={()=>this.props.goDetails(item.clothes_id, item.name)}
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
        updateSelectedType: (selectedType, selectedKey) => { 
            dispatch({ type: "UPDATE_TYPE", selectedType: selectedType, selectedKey: selectedKey }) 
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)