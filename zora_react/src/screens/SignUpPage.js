import * as React from "react";
import { connect } from "react-redux";
import NavBar from "../components/NavBarGuest";
import { Footer } from "../components/Footer";
import Bg from "../images/horoscope_bg.jpg";
import { Form, Input, Button } from "antd";
import LoginModal from "../components/Login";

const background = {
    background: `url('${Bg}') fixed repeat repeat`,
    height: "100vh",
    opacity: .8,
    width: "auto",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    zIndex: -1
}

const inputField = {
    width: "300px"
}
const textStyle = {
    color: "white"
}

export class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            errorMsg: ""
        }
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
            this.state.password
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
            <div>
                <NavBar />

                <div className="login-container" style={background}>
                    <Form className="login-form text-center pt-5">
                        <h2 style={textStyle}>Sign Up</h2>
                        <Form.Item>
                            <Input
                                onChange={this.onChangeField.bind(this, "name")}
                                type="text"
                                value={this.state.name}
                                placeholder="Name"
                                style={inputField}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                onChange={this.onChangeField.bind(this, "email")}
                                type="text"
                                value={this.state.email}
                                placeholder="Email"
                                style={inputField}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                onChange={this.onChangeField.bind(this, "password")}
                                type="text"
                                value={this.state.password}
                                placeholder="Password"
                                style={inputField}
                            />
                        </Form.Item>
                        <div className="login-btn text-center">
                            <Button type="primary" onClick={this.signUp}>Sign Up</Button>
                        </div>
                        <div className="login pt-2 text-center row">
                            <div className="col-8 text-right" style={textStyle}>Already a member? </div>
                            <LoginModal className="col-4"/>
                        </div>
                    </Form>
                </div>

                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // errorMessage: state.signUp.signUpErrorMessage,
        // isSignUped: state.signUp.isSignUped
    };
};
const mapDispatchToProps = dispatch => {
    return {
        // signUp: (name, email, password) => {
        //     dispatch(signUpAction(name, email, password));
        // }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpPage);