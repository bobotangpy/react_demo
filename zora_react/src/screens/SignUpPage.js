import * as React from "react";
import { connect } from "react-redux";
import moment, { invalid } from 'moment';
import NavBar from "../components/NavBarGuest";
import LoginModal from "../components/Login";
import { Footer } from "../components/Footer";
import { signUpAction } from "../redux/signup/actions";
import calculateHoroscope from "../components/CalculateHoroscope";
import Bg from "../images/horoscope_bg.jpg";
import { Form, Input, Button, DatePicker, message } from "antd";
import "../css/SignUpPage.css";

const background = {
    background: `linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.1)), url(${Bg}) fixed center`,
    height: "100vh",
    width: "auto",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
}

const inputField = {
    width: "300px",
    borderRadius: "6px"
}
const textStyle = {
    color: "white"
}

const onFinish = () => {
    console.log('Success');
};

const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};

// Fix horoscope validation & email checking in backend not working

export class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
            name: "",
            nameValid: false,
            email: "",
            emailValid: false,
            password: "",
            passwordValid: false,
            date: "",
            horoscope: "",
            horoscopeValid: false,
            formValid: false,
            errorMsg: {name: "", email: "", password: "", horoscope: ""},
            signUpErrorMessage: ""
        }
    }

    convertDate = (e) => {
        if (e !== null) {
            let convertedDate = moment(e._d).format("MM-DD");
            let horoscope = calculateHoroscope(convertedDate);
            this.setState({ horoscope: horoscope });
            console.log(this.state.horoscope)
        }
    }

    onChangeField = (e) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        this.setState({ [name]: value }, () => this.validateFields(name, value));
    };

    validateFields = (fieldName, value) => {
        let fieldError = this.state.errorMsg;
        let nameValid = this.state.nameValid;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let horoscopeValid = this.state.horoscopeValid;

        switch(fieldName){
            case "name":
                if (value.length < 3) {
                    nameValid = false;
                    fieldError.name = 'Must be at least 3 characters long.'
                } else {
                    nameValid = true
                    fieldError.name = ""
                }
                break;

            case "email":
                // checks for format _@_._
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    emailValid = false;
                    fieldError.email = 'Invalid email format.'
                } else {
                    emailValid = true;
                    fieldError.email = ""
                }
                break;

            case "password":
                // must be 6 chars & contain a number
                if (value.length < 6) {
                    passwordValid = false;
                    fieldError.password = 'Password must be at least 6 characters long and contain a number.';
                } else if (!/\d/.test(value)) {
                    passwordValid = false;
                    fieldError.password = 'Password must contain a number.';
                } else {
                    passwordValid = true;
                    fieldError.password = ""
                }
                break;
            
            case "horoscope":
                value.length !== 0 && this.state.horoscope.length !== 0 ? horoscopeValid = true : horoscopeValid = false;
                break;

            default: 
                break;
        }
        this.setState({errorMsg: fieldError, 
            nameValid: nameValid, emailValid: emailValid, passwordValid: passwordValid, horoscopeValid: horoscopeValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({
            formValid: this.state.nameValid && this.state.emailValid && this.state.passwordValid && this.state.horoscopeValid
        })
    }

    signUp = () => {
        this.props.signUp(
            this.state.name,
            this.state.email,
            this.state.password,
            this.state.horoscope
        );
    };

    showLoginModal = () => {
        this.setState({ openModal: true })
    }

    hideLoginModal = () => {
        this.setState({ openModal: false })
    }

    componentDidUpdate() {
        // Pop up Error Message when it receives this.props.errorMessage === 'The email exists'
        // this.state.errorMessage === '' prevents infinite loop
        if (
            this.state.signUpErrorMessage === "" &&
            this.props.signUpErrorMessage === "The email exists"
        ) {
            this.setState({ signUpErrorMessage: "This Email has been used" });
        }
        // Redirect to another page once sign up successfully
        if (this.props.isSignUped === true) {
            this.props.history.push("/");
        }
    }

    render() {
        return (
            <React.Fragment>
                <NavBar />

                <div className="login-container" style={background}>
                    <Form className="login-form text-center pt-5"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <h2 style={textStyle}>Sign Up</h2>
                        <Form.Item style={{ marginLeft: "-20px", marginBottom: "0" }}
                                    required={true}
                                    validateStatus={this.state.nameValid}
                                    help={this.state.errorMsg.name}
                        >
                            <Input
                                onChange={this.onChangeField.bind(this)}
                                type="text"
                                name="name"
                                value={this.state.name}
                                placeholder="Name"
                                style={inputField}
                            />
                        </Form.Item>
                        <Form.Item style={{ marginLeft: "-20px", marginBottom: "0" }}
                                    required={true}
                                    validateStatus={this.state.emailValid}
                                    help={this.state.errorMsg.email}
                        >
                            <Input
                                onChange={this.onChangeField.bind(this)}
                                type="text"
                                name="email"
                                value={this.state.email}
                                placeholder="Email"
                                style={inputField}
                            />
                        </Form.Item>
                        <Form.Item style={{ marginLeft: "-20px", marginBottom: "0" }}
                                    required={true}
                                    validateStatus={this.state.passwordValid}
                                    help={this.state.errorMsg.password}
                        >
                            <Input
                                onChange={this.onChangeField.bind(this)}
                                type="password"
                                name="password"
                                value={this.state.password}
                                placeholder="Password"
                                style={inputField}
                            />
                        </Form.Item>
                        <Form.Item style={{ marginLeft: "-20px" }}>
                            <DatePicker
                                onChange={this.convertDate}
                                name="horoscope"
                                placeholder="Birthday"
                                style={inputField}
                                format={"MM-DD"}
                            />
                        </Form.Item>
                        <div className="login-btn text-center">
                            <Button type="primary" htmlType="submit" onClick={this.signUp}
                                    style={this.state.formValid ? {display: "block"} : {display: "none"}}
                            >Sign Up</Button>
                        </div>
                        <div className="login pt-3 text-center row">
                            <div className="col-12 text-center" style={textStyle}>Already a member?
                                <a className="login-text" onClick={this.showLoginModal}> Login</a>
                            </div>
                            <LoginModal isOpen={this.state.openModal} hideModal={this.hideLoginModal} />
                        </div>
                    </Form>
                </div>

                <Footer />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        signUpErrorMessage: state.signUp.signUpErrorMessage,
        isSignUped: state.signUp.isSignUped
    };
};
const mapDispatchToProps = dispatch => {
    return {
        signUp: (name, email, password, horoscope) => {
            dispatch(signUpAction(name, email, password, horoscope));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);