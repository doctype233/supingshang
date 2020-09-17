import React from 'react';
import { Carousel, Row, Col, Tabs, List,Typography} from 'antd';
import {withRouter} from 'react-router-dom';
import banner1 from '../../assets/images/m-banner1.jpg';
import img1 from '../../assets/images/n8-1.jpg';
import img2 from '../../assets/images/n8-4.jpg';
import text from '../../assets/images/m-text.png';
import { product_list } from '../../utils/utils';
import MHeader from './header';
import MFooter from './footer';
import './home.scss';
const { TabPane } = Tabs;
const {Title}=Typography;
class MobileHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    onClick1(item){
        this.props.history.push('/mobile/product/type1-'+item.id)
    }
    onClick2(item){
        this.props.history.push('/mobile/product/type2-'+item.id)
    }
    render() {
        return (
            <div className='m-home'>
                <MHeader bg='#000' />
                <Carousel autoplay dotPosition='bottom' className='carousel'>
                    <div>
                        <img src={banner1} />
                    </div>
                    <div>
                        <img src={banner1} />
                    </div>
                    <div>
                        <img src={banner1} />
                    </div>
                    <div>
                        <img src={banner1} />
                    </div>
                </Carousel>
                <Row className='itop'>
                    <Col className='img-box'><img src={img1} alt='定制' /></Col>
                    <Col className='img-box'><img src={img2} alt='提货' /></Col>
                </Row>
                <img src={text} alt='规格选择' className='guige' />
                <Tabs defaultActiveKey="1" centered className='m-tabs'>
                    <TabPane tab="豪华四对装" key="1" className='divider'>
                        <List itemLayout="horizontal" dataSource={product_list}
                            renderItem={item => (
                                <List.Item onClick={this.onClick1.bind(this,item)}>
                                    <List.Item.Meta
                                        avatar={<img src={require(`../../assets/product/658.jpg`)} />}
                                        title={<Title level={3} type='warning' className='m-p-price'>¥{item.price1}</Title>}
                                        description={`公蟹 (${item.male}两）x 4只 + 母蟹（${item.female}两) x 4只`}
                                    />
                                </List.Item>
                            )}
                             className='m-product-list'
                        />
                    </TabPane>
                    <TabPane tab="至尊五对装" key="2">
                    <List itemLayout="horizontal" dataSource={product_list}
                            renderItem={item => (
                                <List.Item onClick={this.onClick2.bind(this,item)}>
                                    <List.Item.Meta
                                        avatar={<img src={require(`../../assets/product/658.jpg`)} />}
                                        title={<Title level={3} type='warning' className='m-p-price'>¥{item.price2}</Title>}
                                        description={`公蟹 (${item.male}两）x 5只 + 母蟹（${item.female}两) x 5只`}
                                    />
                                </List.Item>
                            )}
                             className='m-product-list'
                        />
                    </TabPane>
                </Tabs>
                <MFooter />
            </div>
        );
    }
}

export default withRouter(MobileHome);