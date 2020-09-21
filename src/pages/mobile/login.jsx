import React from 'react';
import './login.scss';
import { Form, Input,Button,message,Row,Col } from 'antd';
import {withRouter} from 'react-router-dom';
import logo from '../../assets/images/logo.png';
// import {URL} from '../../utils/config';
import {_POST} from '../../utils/request';
import axios from 'axios';

class MLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text:'获取验证码',
            time:60,
            disabled:false,
            timer:null,
            tel:""
        }
    }
    onFinish(values){
        console.log('Received values of form: ', values);
        if(values.code===undefined){
            message.error('验证码为空，请重填！');
        }else{
            let data=new FormData();
            let cookie=localStorage.getItem('cookie');
            data.append('telephone',values.phone);
            data.append('sign_no',values.code)
            axios.post('/api/pdaapi/Login/login',data).then(res=>{
                console.log(res)
                if(res.data.code===200){
                    this.props.history.push('/mobile/index');
                    localStorage.setItem('isLogin',true)
                }
            })
        }
    };
    onClick(){
        const {time}=this.state;
        if(time===60){
            this.sendCode();
           this.interval();
        }
    }
    sendCode(){
        let tel = this.state.tel;
        if(tel===''){
            message.error('请输入手机号！');
            return ;
        }
        // _POST(URL.sendCode,{telephone:tel}).then(res=>{
        //     console.log(res)
        // })
        let data=new FormData();
        data.append('telephone',tel);
        var config = {
            method: 'post',
            url: '/api/pdaapi/Sign/send_sign',
            // headers: { 
             
            // },
            data : data
          };
        axios(config).then(res=>{
            console.log(res)
        })
    }
    interval(){
        this.state.timer=setInterval(()=>{
            let time=this.state.time;
            if(time===0){
                console.log('time==0')
                this.setState({
                    text:'重新发送',
                    time:60,
                    disabled:false
                })
                clearInterval(this.state.timer)

            }else{
                this.setState({
                    text:'重新发送'+(time-1).toString(),
                    disabled:true,
                    time:time-1
                })
            }
        },1000)
    }
    componentWillUnmount(){
        if(this.state.timer!=null){
            clearInterval(this.state.timer)
        }
    }
    onChange(e){
        this.setState({
            tel:e.currentTarget.value
        })
    }
    render() {
        const {disabled,text,tel}=this.state;
        return (
            <div className='m-login'>
                <img src={logo} alt='苏品尚logo' className='m-login-logo' />
                <div className='form-box'>
                    <Form onFinish={this.onFinish.bind(this)}>
                        <Form.Item name="phone" rules={[{ required: true, message: '请输入手机号!' }]}>
                            <Input placeholder="手机号" type='number' value={tel} onChange={this.onChange.bind(this)}/>
                        </Form.Item>
                        <Form.Item name="code" >
                            <Input placeholder="验证码"/>
                        </Form.Item>
                        <Row justify='end' className='validate-box'>
                            <Col><Button onClick={this.onClick.bind(this)} disabled={disabled} >{text}</Button></Col>
                        </Row>
                        <Form.Item >
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                    </Form.Item>
                    </Form>
                    
                </div>
            </div>
        );
    }
}

export default withRouter(MLogin);