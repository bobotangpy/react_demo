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
const layout = {
    Sider: {
        xs: { span: 3 },
        sm: { span: 8 },
        md: { span: 8 },
        lg: { span: 8 },
    },
    Content: {
        xs: { span: 21 },
        sm: { span: 16 }
    }
};

export class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            section: window.location.href.split('/').pop(),
            horoscope: "Virgo",
            selectedType: "",
            selectedKey: "",
            type: "",
            key: "",
            switchToDetails: false,
            item_id: "",
            item_name: ""
        }
    }

    componentDidUpdate(prevProps) {
        console.log('UPDATE in Products PAGE')
        console.log('key:',this.props.selectedKey, 'type:',this.props.selectedType, 'style:',this.props.selectedStyle)
        window.scrollTo(0, 0);
        if((prevProps.selectedType !== this.props.selectedType || 
            prevProps.selectedKey !== this.props.selectedKey || 
            prevProps.selectedStyle !== this.props.selectedStyle)) {
            if(this.props.selectedKey === "products")  {
                this.props.getHoroscopeItems(this.state.horoscope, this.props.selectedStyle);
                setTimeout(()=> {this.setState({switchToDetails: false})}, 200)
            }

            if(this.props.selectedKey !== "products") {
                if (this.props.selectedKey === "women") {
                    if(this.state.section !== 'women') window.history.pushState({}, null, 'women');
                    this.props.getGenderItems("1", this.props.selectedStyle, this.props.selectedType)
                    setTimeout(()=> {this.setState({switchToDetails: false})}, 200)
                }
                if (this.props.selectedKey === "men") {
                    if(this.state.section !== 'men') window.history.pushState({}, null, 'men');
                    this.props.getGenderItems("0", this.props.selectedStyle, this.props.selectedType)
                    setTimeout(()=> {this.setState({switchToDetails: false})}, 200)
                }
            }
        }
    }

    goToDetails = (id, name) => {
        this.setState({switchToDetails: true, item_id: id, item_name: name})
    }

    backToList = () => {
        this.setState({switchToDetails: false})
    }

    updateTypeKey = (type, key) => {
        console.log('from type menu',type, key)
        this.setState({ selectedType: type, selectedKey: key, type: type, key: key })
        this.props.updateSelectedType(type, key)
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
                    <Layout style={background()} {...layout}>
                        <Sider style={{minWidth: "fit-content"}}
                            breakpoint="lg"
                            collapsedWidth="0"
                            onBreakpoint={broken => {
                                console.log(broken);
                            }}
                            onCollapse={(collapsed, type) => {
                                console.log(collapsed, type);
                            }}
                        >
                            <ProductsTypeMenu updateTypeKey={this.updateTypeKey} />
                        </Sider>

                        <div className="text-center">
                        <Header style={{display: "inline-flex"}}>
                            <ProductsStyleMenu />
                        </Header>

                        <Content className="pt-5 pl-5 ml-5" style={{marginBottom: "50px"}}>
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
        updateSelectedType: (selectedType, selectedKey) => { 
            dispatch({ type: "UPDATE_TYPE", selectedType: selectedType, selectedKey: selectedKey }) 
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage)