import * as React from "react";
import { connect } from "react-redux";
import { loginUser } from "../redux/auth/actions";
import { Modal, Form, Input, Button, Checkbox } from "antd"
import "../css/Login.css";

const layout = {
    // labelCol: { span: 4 },
    // wrapperCol: { span: 16 },
    labelCol: {
        xs: {span: 24},
        sm: {span: 6},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 12},
    }
};

const onFinish = () => {
    console.log('Success');
};

const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};

export class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            email: "",
            password: "",
            loginErrorMessage: ""
        }
    }

    formRef = React.createRef();

    componentDidUpdate(prevProps) {
        if((this.props.isOpen == true) && (prevProps.isOpen !== this.props.isOpen)) {
            this.setState({modalVisible: true})
        }

        if(this.state.loginErrorMessage === "" && 
          this.props.loginErrorMessage === "Incorrect email or password.") {
            this.setState({loginErrorMessage: "Incorrect email or password."});
        }
// NOT working!!!!
        if(this.state.loginErrorMessage === "" && prevProps.isAuthenticated === false && this.props.isAuthenticated === true ) {
            console.log(this.props.isAuthenticated)
        this.props.hideModal();
        this.setModalVisible(false);
        }
    }

    setModalVisible(modalVisible) {
        this.setState({ modalVisible });
    }

    onCancel() {
        this.formRef.current.resetFields();
        this.setModalVisible(false);
        this.props.hideModal();
    }

    onChangeField = (field, e) => {
        const state = {};
        state[field] = e.target.value;
        this.setState(state);
    };

    login = (e) => {
        e.preventDefault();
        this.props.login(this.state.email, this.state.password);
    }

    render() {       
        const error = {
            marginTop: "-10px",
            marginBottom: "20px",
            color: "red",
            display: this.state.loginErrorMessage.length !== 0 ? "block" : "none"
        }

        return (
            <div>
                {/* <a href="#" className="pr-4" onClick={() => this.setModalVisible(true)}>Login</a> */}
                <Modal
                    title=""
                    visible={this.state.modalVisible}
                    footer={null}
                >
                    <Form
                        {...layout}
                        ref={this.formRef}
                        name="basic"
                        // initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item className="loginLabel"
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                            onChange={this.onChangeField.bind(this, "email")}
                        >
                            <Input className="loginField" />
                        </Form.Item>

                        <Form.Item className="loginLabel"
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                            onChange={this.onChangeField.bind(this, "password")}
                        >
                            <Input.Password className="loginField" />
                        </Form.Item>

                        {/* <Form.Item name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item> */}

                        <span className="text-center" style={error}>
                            {this.state.loginErrorMessage}
                        </span>

                        <Form.Item style={{justifyContent: "center"}}>
                            <Button type="primary" htmlType="submit" ghost onClick={this.login}>
                                Login
                            </Button>
                            <Button className="ml-2" type="default" 
                                    onClick={() => this.onCancel()}>
                            {/* onClick={() => { this.setModalVisible(false); this.props.hideModal() }}> */}
                                Cancel
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        email: state.email,
        password: state.password,
        isAuthenticated: state.auth.isAuthenticated,
        loginErrorMessage: state.auth.loginErrorMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => {
            dispatch(loginUser(email, password))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal)