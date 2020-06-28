import * as React from 'react';
import { connect } from 'react-redux';
import { getProductsList } from '../redux/productsList/actions';
import { Card, Col, Row, Layout } from 'antd';

const { Header, Sider, Content } = Layout;

const { Meta } = Card;

export class ProductsList extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        getProductsList(this.props.selectedType, this.props.selectedStyle);
        console.log(this.props.items)
    }
    
    render() {
        return (
            <Row gutter={12}>
                <Col span={8}>
                    <Card hoverable
                        style={{ width: 190 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card hoverable
                        style={{ width: 190 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card hoverable
                        style={{ width: 190 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
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
        getProductsList: (type, style) => { dispatch(getProductsList(type, style)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)