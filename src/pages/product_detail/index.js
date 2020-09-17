import React from 'react';
import { Card, Row, Col, Typography } from 'antd';
import img1 from '../../assets/images/wechat1.jpg';
import { product_list } from '../../utils/utils';
import './index.scss';
const { Title,Text } = Typography;


class ProductDetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type:'',
            product:{},
        }
    }
    componentDidMount() {
        let param=this.props.match.params.name;
        let type=param.split('-')[0];
        let id=param.split('-')[1];
        if(type==='type1'){
            this.setState({
                type:'豪华四对(8只装）'
            })
        }else{
            this.setState({
                type:'至尊五对(10只装）'
            })
        }
        product_list.forEach((item)=>{
            if(item.id==id){
                this.setState({
                    product:item
                })
            }
        })
       
    }
    render() {
        const {type,product}=this.state;
        
        return (
            <div className='product_detail'>
                <Card title='扫码购买' >
                    <Row justify="start" className='card-style'>
                        <Col>
                            <img src={img1} alt='buy-code' width={150} />
                            <Title level={5} type='success'>扫码购买</Title>
                            <Text type="secondary" className='sub-title'>微信购买更便捷</Text>
                        </Col>
                        <Col className='content-right'>
                            <Title level={5}>{type}</Title>
                            <Text type="secondary" className='sub-title'>公:{product.male}两 + 母:{product.female}两</Text>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}

export default ProductDetailPage;