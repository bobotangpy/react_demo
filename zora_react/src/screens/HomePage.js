import React from 'react';
import { Carousel } from 'antd';
import Navbar from '../components/NavBarGuest';
import Background from '../images/landing_bg.jpg';
import Slide1 from '../images/slide_1.jpg';
import Slide2 from '../images/slide_2.jpg';
import Slide3 from '../images/slide_3.jpg';
import ShopWomen from '../images/shop_women.jpg';
import ShopMen from '../images/shop_men.jpg';
import '../css/HomePage.css';

const background = {
  margin: '0px',
  background: `url(${Background}) fixed no-repeat center`,
  position: 'relative',
  backgroundSize: 'cover'
}

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="body_container" style={background}>
          <Carousel autoplay className="ml-0 mr-0 pt-3 pl-3 pr-3">
            <div>
              <a href="#"><img className="cover" layout="fill" src={Slide1} alt="First slide" /></a>
            </div>
            <div>
              <a href="#"><img className="cover" layout="fill" src={Slide2} alt="Second slide" /></a>
            </div>
            <div>
              <a href="#"><img className="cover" layout="fill" src={Slide3} alt="Third slide" /></a>
            </div>
          </Carousel>
          {/*** Shop Men & Women ***/}
          <div className="shop_cards_container row" id="cardsDiv">
            <div className="col-lg-6 col-sm-12" id="shop_cards">
              <a href="#"><img src={ShopWomen} className="img-fluid" alt="shop women" /></a>
            </div>
            <div className="col-lg-6 col-sm-12" id="shop_cards">
              <a href="#"><img src={ShopMen} className="img-fluid" alt="shop men" /></a>
            </div>
          </div>
        </div>

        {/*** Footer ***/}
        <footer className="py-3 bg-light">
          <div className="container">
            <p className="m-0 text-center">Copyright &copy; Zora 2020</p>
          </div>
        </footer>
      </div>
    )
  }
}