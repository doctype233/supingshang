import React from 'react';
import './index.scss';
import FootInfo from '../../components/FootInfo';
import banner from '../../assets/images/product_banner.png';
import product from '../../assets/images/product.png';
import $ from 'jquery';
import { Typography,Row,Col } from 'antd'
const { Title } = Typography;
class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        var header = $('#bg-change');
        window.onscroll = () => {
            header.addClass('show-bg')
        }

    }
    render() {
        return (
            <div id='product'>
                <div className='header-placeholder'></div>
                <div id='banner'>
                    <img src={banner} alt='banner' />
                    <div className='banner-title'>
                        <Title level={2} type='warning'>产品列表</Title><Title level={4} type='secondary'>/ PRODUCT</Title>
                    </div>
                </div>
                <Row className='product-list'>
                    <Col span={8}><img src={product} alt='product' className='product'/></Col>
                    <Col span={8}><img src={product} alt='product' className='product'/></Col>
                    <Col span={8}><img src={product} alt='product' className='product'/></Col>
                    <Col span={8}><img src={product} alt='product' className='product'/></Col>
                    <Col span={8}><img src={product} alt='product' className='product'/></Col>
                    <Col span={8}><img src={product} alt='product' className='product'/></Col>
                    <Col span={8}><img src={product} alt='product' className='product'/></Col>
                    <Col span={8}><img src={product} alt='product' className='product'/></Col>
                </Row>
                <FootInfo />
            </div>
        );
    }
}

export default ProductPage;