import React, { useState } from 'react';
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

export const HomePage = (props) => {
  const [cartModalOpen, setCartModalOpen] = useState(false);

  const getModalState = (val) => {
    setCartModalOpen(val)
  }

  const updateTypeMenu = (type, selectedKey) => {
    props.updateTypeMenu(type, selectedKey);
    props.history.push({ pathname: `/${selectedKey}` })
  }

  const renderNavbar = () => {
    if (props.isAuthenticated === true) {
      return <NavBarUser getModalState={getModalState} />
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
            <a onClick={() => updateTypeMenu("", "products")}><img className="cover" layout="fill" src={Slide1} alt="First slide" /></a>
          </div>
          <div>
            <a onClick={() => updateTypeMenu("2", "women")}><img className="cover" layout="fill" src={Slide2} alt="Second slide" /></a>
          </div>
          <div>
            <a onClick={() => updateTypeMenu("2", "men")}><img className="cover" layout="fill" src={Slide3} alt="Third slide" /></a>
          </div>
        </Carousel>

        {/*** Shop Men & Women ***/}
        <div className="shop_cards_container row" id="cardsDiv">
          <div className="col-lg-6 col-xs-12" id="shop_cards">
            <a onClick={() => updateTypeMenu("2", "women")}><img src={ShopWomen} className="img-fluid" alt="shop women" /></a>
          </div>
          <div className="col-lg-6 col-xs-12" id="shop_cards">
            <a onClick={() => updateTypeMenu("2", "men")}><img src={ShopMen} className="img-fluid" alt="shop men" /></a>
          </div>
        </div>
      </div>

      {/*** Footer ***/}
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    selectedType: state.productsType.selectedType,
    selectedKey: state.productsType.selectedKey
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTypeMenu: (selectedType, selectedKey) => {
      dispatch({ type: "UPDATE_TYPE", selectedType: selectedType, selectedKey: selectedKey })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);