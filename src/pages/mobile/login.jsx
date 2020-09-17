import React from 'react';
import './login.scss';
import { Form, Input } from 'antd';
import logo from '../../assets/images/logo.png';
class MLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    onFinish = values => {
        console.log('Received values of form: ', values);
    };
    render() {
        return (
            <div className='m-login'>
                <img src={logo} alt='苏品尚logo' className='m-login-logo'/>
                <Form onFinish={this.onFinish}>
                    <Form.Item name="手机号" rules={[{ required: true, message: '请输入手机号!' }]}>
                        <Input  placeholder="手机号" type='number'/>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default MLogin;