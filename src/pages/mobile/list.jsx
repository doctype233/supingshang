import React from 'react';
import { withRouter } from 'react-router-dom';
import MHeader from './header';
import {Tabs,List,Typography} from 'antd';
import { product_list } from '../../utils/utils';
import './list.scss';
import MFooter from './footer';

const {Title}=Typography;
const { TabPane } = Tabs;

class MobileList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    onClick1(item){
        this.props.history.push('/mobile/product/type1-'+item.id)
    }
    onClick2(item){
        this.props.history.push('/mobile/product/type2-'+item.id)
    }
    render() { 
        return ( 
            <div className='m-list'>
                <MHeader bg='#000'/>
                <div>
                    <img src={require('../../assets/images/product-list-banner.png')} alt='' className='banner'/>
                </div>
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
 
export default withRouter(MobileList);