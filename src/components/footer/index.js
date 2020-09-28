import React from 'react';
import { Row, Col, Typography } from 'antd';
import footer_bg from '../../assets/images/footer-bg.jpg';
import left from '../../assets/images/footer-left.png';
import right from '../../assets/images/footer-right.png';
import './index.scss';
import {footer_content} from '../../utils/utils';

const { Title } = Typography;
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id='footer'>

                <img src={footer_bg} alt='' className='footer-bg' />
                <div className='footer-title' id='foot-title'>
                    <Row>
                        <Col span={12} offset={6} >
                            <Title type='warning'>有机产品</Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} offset={6} >
                            <Title level={4} type='secondary'>COOK EVERY DISH CAREFULLY</Title>
                        </Col>
                    </Row>
                </div>
                <img src={left} alt='' className='left-img' id='foot-left'/>
                <div className='right-img' id='foot-right'>
                    <img src={right} alt='' />
                    <div className='footer-content'>
                    <p>
                        {footer_content}
                    </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Footer;