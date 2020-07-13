import * as React from 'react';
import { connect } from 'react-redux';
import { getHoroscopeItems, getGenderItems, getTrendItems } from '../redux/productsList/actions';
import { Card, Col, Row } from 'antd';

export class ProductDetailsCompo extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        console.log(this.props.productInfo)
    }

    render() {
        return (
            <div className="row">
                {/* <div className="col-4">
                    <img src={this.props.productInfo.img} />
                </div>

                <div className="col-8">
                    <h3>{this.props.productInfo.name}</h3><br />
                    <p>{this.props.productInfo.price}</p><br />
                    <p>Size: </p><br />
                    <p>Quantity: </p><br />
                    <button>Add to Cart</button>
                </div> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        productInfo: state.productInfo.info
    }
}

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps)(ProductDetailsCompo);