import React from 'react';
import { Row, Col, Typography } from 'antd';
import './index.scss';
import { company_about } from '../../utils/utils'; //段落文本
import about from '../../assets/images/about.png';
const { Title, Paragraph } = Typography;


class CompanyAbout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    
    render() {
        const {show}=this.props;
        return (

            <div id='company-about'>

                <div id='company-about-child' className={`child-${show?'show':'hidden'}`}>
                    <Row>
                        <Col span={12} offset={6} >
                            <Title type='warning'>公司简介</Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} offset={6} >
                            <Title level={4} type='secondary'>ABOUT US</Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={16} offset={4}>
                            <Paragraph className='about_content' type='secondary'>
                                {company_about}
                            </Paragraph>
                        </Col>
                    </Row>
                    <Row sm={24} md={18} offset={3}>
                        <img  src={about} className='about-pic'/>
                    </Row>
                </div>

            </div>
        );
    }
}

export default CompanyAbout;