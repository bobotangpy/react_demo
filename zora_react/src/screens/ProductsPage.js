import * as React from "react";
import NavBar from "../components/NavBarGuest";
import { NavBarUser } from "../components/NavBarUser";
import ProductsTypeMenu from "../components/ProductsTypeMenu";
import ProductsStyleMenu from "../components/ProductsStyleMenu";
import ProductsList from "../components/ProductsList";
import ProductDetails from "../components/ProductDetails";
import { Footer } from "../components/Footer";
import Background from "../images/landing_bg.jpg"
import { Layout } from 'antd';
import { connect } from "react-redux";
import { getHoroscopeItems, getGenderItems } from '../redux/productsList/actions';

const { Header, Sider, Content } = Layout;

export class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            section: window.location.href.split('/').pop(),
            horoscope: "Virgo",
            selectedType: this.props.selectedType,
            selectedStyle: this.props.selectedStyle,
            switchToDetails: false,
            item_id: "",
            item_name: ""
        }
    }

    componentDidUpdate(prevProps) {
        window.scrollTo(0, 0);
        if((prevProps.selectedType !== this.props.selectedType || prevProps.selectedKey !== this.props.selectedKey)) {
            if(this.props.selectedKey === "products")  {
                this.props.getHoroscopeItems(this.state.horoscope, this.props.selectedStyle);
                setTimeout(()=> {this.setState({switchToDetails: false})}, 200)
            }

            if(this.props.selectedKey !== "products") {
                if (this.props.selectedKey === "women") {
                    this.props.getGenderItems("1", this.props.selectedStyle, this.props.selectedType)
                    setTimeout(()=> {this.setState({switchToDetails: false})}, 200)
                }
                if (this.props.selectedKey === "men") {
                    this.props.getGenderItems("0", this.props.selectedStyle, this.props.selectedType)
                    setTimeout(()=> {this.setState({switchToDetails: false})}, 200)
                }
            }
        }
        // if(prevProps.selectedKey !== this.props.selectedKey || 
        //     prevProps.selectedType !== this.props.selectedType || 
        //     prevProps.selectedStyle !== this.props.selectedStyle) {
        //         if(this.props.selectedKey === "products")  {
        //             this.props.getHoroscopeItems(this.props.horoscope, this.props.selectedStyle);
        //         }
        //         if(this.props.selectedKey !== "products") {
        //             if (this.props.selectedKey === "women") {
        //                 this.props.getGenderItems("1", this.props.selectedStyle, this.props.selectedType)
        //                 console.log(this.props.items)
        //             }
        //             if (this.props.selectedKey === "men") {
        //                 this.props.getGenderItems("0", this.props.selectedStyle, this.props.selectedType)
        //                 console.log(this.props.items)
        //             }
        //         }
        // }
    }

    goToDetails = (id, name) => {
        this.setState({switchToDetails: true, item_id: id, item_name: name})
    }

    backToList = () => {
        this.setState({switchToDetails: false})
    }

    render() {
        const background = () => {
            if(this.props.isAuthenticated !== true) {
                return {
                    margin: '0px',
                    background: `linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.1)), url(${Background}) fixed no-repeat center`,
                    position: 'relative',
                    minHeight: '100vh'
                }
            } else {
                let sign = require(`../images/${localStorage.getItem('horoscope')}_bg.png`);
                return {
                    margin: '0px',
                    background: `url(${sign}) center left fixed no-repeat`,
                    position: 'relative',
                    minHeight: '100vh'
                }
            }
        }

        const renderNavbar = () => {
            if(this.props.isAuthenticated === true) {
                return <NavBarUser />
            } else {
                return <NavBar />
            }
        }

        const renderContent =()=>{
            if(this.state.switchToDetails === false){
                return <ProductsList {...this.state} goDetails={this.goToDetails} />
            } else {
                return (
                    <ProductDetails {...this.state} />
                )
            }
        }
        
        return (
            <div>
                {renderNavbar()}

                <div className="bodyContainer row" style={background()}>
                    <Layout style={background()}>
                        <div className="col-3">
                            <Sider style={{minWidth: "fit-content"}}>
                                <ProductsTypeMenu {...this.state} />
                            </Sider>
                        </div>

                        <div className="text-center col-8">
                        <Header>
                            <ProductsStyleMenu />
                        </Header>

                        <Content className="pt-5 pl-3" style={{marginBottom: "50px"}}>
                            {renderContent()}
                        </Content>
                        </div>

                    </Layout>
                </div>

                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedKey: state.productsType.selectedKey,
        selectedType: state.productsType.selectedType,
        selectedStyle: state.productsStyle.selectedStyle,
        isAuthenticated: state.auth.isAuthenticated,
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage)