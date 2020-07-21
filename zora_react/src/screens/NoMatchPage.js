import React from 'react';
import NavBar from "../components/NavBarGuest";
import { NavBarUser } from "../components/NavBarUser";
import { Footer } from "../components/Footer";
import Background from "../images/landing_bg.jpg"
import { connect } from 'react-redux';

export const NoMatchPage = (props) => {
    const background = () => {
        if (props.isAuthenticated !== true) {
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
        if (props.isAuthenticated === true) {
            return <NavBarUser />
        } else {
            return <NavBar />
        }
    }

    return (
        <div>
            {renderNavbar()}

            <div className="bodyContainer" style={background()}>
                <h3 className="pt-5 pl-3 pr-3 text-center" style={{color: "white"}}>
                    Sorry, we couldn't find what you're looking for.
                </h3>
            </div>

            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    }
}

export default connect(mapStateToProps)(NoMatchPage)