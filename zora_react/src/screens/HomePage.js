import React from 'react';
import { Carousel } from 'antd';
import NavBar from '../components/NavBarGuest';
import { NavBarUser } from '../components/NavBarUser';
import Background from '../images/landing_bg.jpg';
import Slide1 from '../images/slide_1.jpg';
import Slide2 from '../images/slide_2.jpg';
import Slide3 from '../images/slide_3.jpg';
import ShopWomen from '../images/shop_women.jpg';
import ShopMen from '../images/shop_men.jpg';
import '../css/HomePage.css';
import { Footer } from '../components/Footer';
import { connect } from 'react-redux';

const background = {
  margin: '0px',
  background: `linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.1)), url(${Background}) fixed no-repeat center`,
  position: 'relative',
  backgroundSize: 'cover'
}

export class HomePage extends React.Component {

  componentDidMount() {
    console.log(localStorage.getItem('token'))
  }

  render() {
    const renderNavbar = () => {
      if(this.props.isAuthenticated === true) {
          return <NavBarUser />
      } else {
          return <NavBar />
      }
    }

    return (
      <div>
        {renderNavbar()}
        
        <div className="body_container" style={background}>
          <Carousel autoplay className="ml-0 mr-0 pt-3 pl-3 pr-3">
            <div>
              <a href="/products"><img className="cover" layout="fill" src={Slide1} alt="First slide" /></a>
            </div>
            <div>
              <a href="/women"><img className="cover" layout="fill" src={Slide2} alt="Second slide" /></a>
            </div>
            <div>
              <a href="/men"><img className="cover" layout="fill" src={Slide3} alt="Third slide" /></a>
            </div>
          </Carousel>
          {/*** Shop Men & Women ***/}
          <div className="shop_cards_container row" id="cardsDiv">
            <div className="col-lg-6 col-sm-12" id="shop_cards">
              <a href="/women"><img src={ShopWomen} className="img-fluid" alt="shop women" /></a>
            </div>
            <div className="col-lg-6 col-sm-12" id="shop_cards">
              <a href="/men"><img src={ShopMen} className="img-fluid" alt="shop men" /></a>
            </div>
          </div>
        </div>

        {/*** Footer ***/}
        <Footer />
      </div>
    )
    
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(HomePage);