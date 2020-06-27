import * as React from "react";
import { Modal, Form, Input, Button, Checkbox } from "antd"
import "../css/Login.css";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const onFinish = values => {
    console.log('Success:', values);
};

const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};

export default class LoginModal extends React.Component {
    constructor() {
        super();
        this.state = {
            modalVisible: false
        }
    }

    setModalVisible(modalVisible) {
        this.setState({ modalVisible });
    }

    render() {
        return (
            <div>
                <a href="#" className="pr-4" onClick={() => this.setModalVisible(true)}>Login</a>
                <Modal
                    title=""
                    visible={this.state.modalVisible}
                    footer={null}
                // onOk={this.handleOk}
                >
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit" ghost>
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