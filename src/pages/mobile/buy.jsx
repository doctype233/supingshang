import React from 'react';
import MHeader from './header';
import { Button, Row, Col, List,Modal ,Input} from 'antd';
import './buy.scss';
import { PlusSquareOutlined, MinusOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';

class MobileBuy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
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
    render() {
        const { data, count, info, total,address,initAddress } = this.state;

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
                    <Col className='m-del'>
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
                            <Button type='dashed' onClick={this.address.bind(this)}>{address||initAddress}<PlusSquareOutlined style={{ verticalAlign: 'middle', fontSize: 15 }} /></Button>
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
                    title="请输入收货地址"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Input value={address} placeholder='请输入收货地址'/>
                </Modal>
            </div>
        );
    }
}

export default MobileBuy;