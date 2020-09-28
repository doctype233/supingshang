import React from 'react';
import MHeader from './header';
import { Button, Row, Col, List,Modal ,Input} from 'antd';
import './buy.scss';
import { PlusSquareOutlined, MinusOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';


class MobileBuy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{ text: '',
            value: "0"}],
            count: 1,
            info: [{
                text: '优惠券',
            }, {
                text: '快递费用',
                value: "0"
            }, {
                text: '支付方式',
                type: '微信'
            }],
            total: 0,
            initAddress:'您当前没有收货地址，请添加',
            address: '',
            name:'',
            tel:'',
            visible: false
        }
    }
    componentDidMount() {
        let data = [
            {

            }
        ]
        this.setState({
            data
        })
        // this.getAddressList();

    }
    getAddressList(){
        axios.post('/api/pdaapi/index/get_address_list').then(res=>{
            console.log(res)
        })
    }
    address() {
        this.setState({
            visible: true
        })
    }
    increase = () => {
        const { count } = this.state;
        if (count > 98 || count < 1) {
            return;
        }
        this.setState({
            count: count + 1
        });
    };

    decline = () => {
        const { count } = this.state;
        if (count > 98 || count <= 1) {
            return;
        }
        this.setState({ count: count - 1 });
    };
    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };
    onChange(e){
        console.log(e.currentTarget);
        let v=e.currentTarget.value;
        if(e.currentTarget.id==='name'){
            this.setState({
                name:v
            })
        }
        if(e.currentTarget.id==='tel'){
            this.setState({
                tel:v
            })
        }
        if(e.currentTarget.id==='address'){
            this.setState({
                address:v
            })
        }
        
    }
    del(){
        
    }
    render() {
        const { data, count, info, total,address,name,tel,initAddress } = this.state;
        let add=address+" "+name+" "+tel;
        const des = <Row justify="space-between">
            <Col>¥658 x {count}</Col>
            <Col>
                <Row>
                    <Col>
                        <Button.Group className='m-btn-group'>
                            <Button onClick={this.decline} icon={<MinusOutlined style={{ fontSize: 10 }} />} />
                            <Button onClick={this.increase} icon={<PlusOutlined style={{ fontSize: 10 }} />} />
                        </Button.Group>
                    </Col>
                    <Col className='m-del' onClick={this.del.bind(this)}>
                        <DeleteOutlined style={{ fontSize: 16, color: '#f5222d' }} />
                    </Col>
                </Row>
            </Col>
        </Row>;
        return (
            <div id='mobile-buy'>
                <MHeader bg='#000' nobag={true} />
                <div className='buy-box'>
                    <Row justify='center'>
                        <Col>
                            <Button type='dashed' onClick={this.address.bind(this)}>{add.length<3?initAddress:add}<PlusSquareOutlined style={{ verticalAlign: 'middle', fontSize: 15 }} /></Button>
                        </Col>
                    </Row>
                    <h4 className='ant-list-item-meta-title buy-title'>商品清单:</h4>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<img src={require('../../assets/product/658.jpg')} alt='' height={60} />}
                                    title={<span>苏品尚大闸蟹</span>}
                                    description={des}
                                />
                            </List.Item>
                        )}
                    />

                </div>
                <div className='info-list'>
                    <List
                        itemLayout="horizontal"
                        dataSource={info}
                        renderItem={item => (
                            <List.Item >
                                <Row justify='space-between' className='info-item'>
                                    <Col>{item.text}:</Col>
                                    <Col>{item.value ? item.value + '元' : ""}{item.type ? item.type : ""}</Col>
                                </Row>
                            </List.Item>
                        )}
                    />
                </div>
                <div style={{ height: 220 }}></div>
                <div className='info-footer'>
                    <Row justify='space-between'>
                        <Col><p style={{ fontSize: 14, lineHeight: "30px" }}>应付金额:¥{total}</p></Col>
                        <Col>
                            <Button type='primary'>确认付款</Button>
                        </Col>
                    </Row>
                </div>
                <Modal
                    title="请填写收货信息"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    className='buy-modal'
                >   
                    <Input value={name} placeholder='收件人姓名' id='name' onChange={this.onChange.bind(this)}/>
                    {''}
                    <Input value={tel} placeholder='收件人电话' id='tel' onChange={this.onChange.bind(this)}/>
                    <Input value={address} placeholder='收货地址' id='address' onChange={this.onChange.bind(this)}/>
                </Modal>
            </div>
        );
    }
}

export default MobileBuy;