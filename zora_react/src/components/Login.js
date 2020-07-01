import * as React from "react";
import { connect } from "react-redux";
import { loginUser } from "../redux/auth/actions";
import { Modal, Form, Input, Button, Checkbox } from "antd"
import "../css/Login.css";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
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
        }
    }

    setModalVisible(modalVisible) {
        this.setState({ modalVisible });
    }

    onChangeField = (field, e) => {
        const state = {};
        state[field] = e.target.value;
        this.setState(state);
    };

    login = (e) => {
        e.preventDefault();
        this.props.login(this.state.email, this.state.password);
        this.setModalVisible(false);
    }

    render() {
        return (
            <div>
                <a href="#" className="pr-4" onClick={() => this.setModalVisible(true)}>Login</a>
                <Modal
                    title=""
                    visible={this.state.modalVisible}
                    footer={null}
                >
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                            onChange={this.onChangeField.bind(this, "email")}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                            onChange={this.onChangeField.bind(this, "password")}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit" ghost onClick={this.login}>
                                Login
                        </Button>
                            <Button className="ml-2" type="default" onClick={() => { this.setModalVisible(false) }}>
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
        password: state.password
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