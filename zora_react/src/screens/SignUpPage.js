import * as React from "react";
import { connect } from "react-redux";
import moment from 'moment';
import NavBar from "../components/NavBarGuest";
import LoginModal from "../components/Login";
import { Footer } from "../components/Footer";
import { signUpAction } from "../redux/signup/actions";
import calculateHoroscope from "../components/CalculateHoroscope";
import Bg from "../images/horoscope_bg.jpg";
import { Form, Input, Button, DatePicker } from "antd";

const background = {
    background: `url('${Bg}') fixed repeat repeat`,
    height: "100vh",
    width: "auto",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    // opacity: .8,
    // zIndex: -1
}

const inputField = {
    width: "300px"
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


export class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            horoscope: "",
            errorMsg: ""
        }
    }

    convertDate = (e) => {
        let convertedDate = moment(e._d).format("MM-DD");
        let horoscope = calculateHoroscope(convertedDate);
        this.setState({horoscope: horoscope});
    }

    onChangeField = (field, e) => {
        const state = {};
        state[field] = e.currentTarget.value;
        this.setState(state);
    };

    signUp = () => {
        this.props.signUp(
            this.state.name,
            this.state.email,
            this.state.password,
            this.state.horoscope
        );
    };

    componentDidUpdate() {
        // Pop up Error Message when it receives this.props.errorMessage === 'The email exists'
        // this.state.errorMessage === '' prevents infinite loop
        if (
            this.state.errorMessage === "" &&
            this.props.errorMessage === "The email exists"
        ) {
            this.setState({ errorMessage: "This Email has been used" });
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
                        <Form.Item>
                            <Input
                                onChange={this.onChangeField.bind(this, "name")}
                                type="text"
                                value={this.state.name}
                                placeholder="Name"
                                name="name"
                                style={inputField}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                onChange={this.onChangeField.bind(this, "email")}
                                type="text"
                                value={this.state.email}
                                placeholder="Email"
                                name="email"
                                style={inputField}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                onChange={this.onChangeField.bind(this, "password")}
                                type="password"
                                value={this.state.password}
                                placeholder="Password"
                                name="password"
                                style={inputField}
                            />
                        </Form.Item>
                        <Form.Item>
                            <DatePicker 
                                onChange={this.convertDate}
                                placeholder="Birthday" 
                                name="birthday"
                                style={inputField}
                            />
                        </Form.Item>
                        <div className="login-btn text-center">
                            <Button type="primary" htmlType="submit" onClick={this.signUp}>Sign Up</Button>
                        </div>
                        <div className="login pt-2 text-center row">
                            <div className="col-8 text-right" style={textStyle}>Already a member? </div>
                            <LoginModal className="col-4"/>
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
        errorMessage: state.signUp.signUpErrorMessage,
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