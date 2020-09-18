import React from 'react';
import MHeader from './header';
import MFooter from './footer';
import {withRouter} from 'react-router-dom';
import { Input, Button, Row, Col, Typography } from 'antd';
import { MinusOutlined, PlusOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { product_list } from '../../utils/utils';
import './product.scss';
import xy from '../../assets/images/icon-xx-b.png';
import xx from '../../assets/images/icon-cx-b.png';
import $ from 'jquery';
const { Title, Text,Paragraph } = Typography;


class MobileProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            product: {},
            num: 0
        }
    }
    componentDidMount() {
        let route = this.props.match.params.name;
        let type = route.split('-')[0];
        if (type === 'type1') {
            this.setState({
                num: 4
            })
        } else {
            this.setState({
                num: 5
            })
        }
        let id = route.split('-')[1];
        product_list.forEach((item) => {
            if (item.id == id) {
                this.setState({
                    product: item
                })
            }
        })
        let header=$('#m-header');

        window.onscroll = () => {
            var dTop = $(document).scrollTop();
            if(dTop>10){
                header.css({'background-color':'#000'})
            }
        }

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
    onChange(e) {
        this.setState({ count: e.currentTarget.value })
    }
    buy(){
        this.props.history.push('/mobile/buy')
    }
    render() {
        const { count, product, num } = this.state;
        return (
            <div style={{ height: '100%' }}>
                <MHeader />
                <div className='m-banner'></div>
                <div>
                <Row justify='space-between' className='m-product-body'>
                    <Col className='m-btn-group'>
                        <Button.Group>
                            <Button onClick={this.decline} icon={<MinusOutlined style={{ color: '#fff' }} />} />
                            <Input placeholder="" value={count} onChange={this.onChange.bind(this)} style={{ width: 32 }} />
                            <Button onClick={this.increase} icon={<PlusOutlined style={{ color: '#fff' }} />} />
                        </Button.Group>
                    </Col>
                    <Col>
                        <Row>
                            <Col> <Button type="primary" shape="round" icon={<ShoppingCartOutlined />} onClick={this.buy.bind(this)}>买礼卡</Button></Col>
                        </Row>
                    </Col>
                </Row>
                <Row justify='space-between' className='all-padding price-title'>
                    <Col span={12}>
                        <Row>
                            <Col><img src={xy} alt='xy' /></Col>
                            <Col>
                                <Text >公蟹({product?.male}两) x {num}</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col><img src={xx} alt='xx' /></Col>
                            <Col>
                                <Text >母蟹({product?.female}两) x {num}</Text>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12} className='col-center total'>
                        <Title level={3} type='warning' style={{marginBottom:0}}>¥{product[num === 4 ? 'price1' : 'price2']}</Title>
                    </Col>
                </Row>
                </div>
                <div className='info'>
                    <Paragraph type='secondary'>快递:顺丰免费包邮</Paragraph>
                    <Paragraph type='secondary'>
                        更多选购方式请致电:<a href='tel:0512-67248808'>0512-67248808</a>
                    </Paragraph>
                </div>
                <div className='content-img img1'></div>
                <div className='content-img img2'></div>
                <div className='content-img img3'></div>
                <MFooter/>
            </div>

        );
    }
}

export default withRouter(MobileProduct);