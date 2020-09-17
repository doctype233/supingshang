import React from 'react';
import { Row, Col, Typography } from 'antd';
import './index.scss';
import { group_appreciation } from '../../utils/utils'; //段落文本

import img1 from '../../assets/images/appre_img1.png';
import img2 from '../../assets/images/appre_img2.png';
import img3 from '../../assets/images/appre_img3.png';
import img4 from '../../assets/images/appre_img4.png';
import content_bg from '../../assets/images/img_content_bg.png'
const { Title, Paragraph } = Typography;


class GroupAppreciation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        // var child = document.getElementById("group-appreciation-child");
        // var parent = document.getElementById("group-appreciation");
        // var h = child.offsetHeight;
        // //将子元素的高度赋予父元素
        // child.style.position = 'absolute';
        // parent.style.height = 100 + h + 'px';
        // var eTop = $('#group-appreciation').offset().top;
        // var wTop = $(window).height();

        // window.onscroll = () => {
        //     var dTop = $(document).scrollTop();
        //     if (dTop + wTop - 100 > eTop) {
        //         console.log("??")
        //         this.setState({
        //             show: true
        //         })
        //     }
        // }
    }


    render() {
        const { show } = this.props;
        return (

            <div id='group-appreciation'>

                <div id='group-appreciation-child' className={`child-${show ? 'show' : 'hidden'}`}>
                    <Row>
                        <Col span={12} offset={6} >
                            <Title type='warning'>上一站蟹塘，下一站咱家</Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} offset={6} >
                            <Title level={4} type='secondary'>GROUP APPRECIATION</Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={18} offset={3}>
                            <Paragraph className='about_content' type='secondary'>
                                {group_appreciation}
                            </Paragraph>
                        </Col>
                    </Row>
                    <Row className='img-group'>
                        <Col sm={12} md={6}>
                            <img src={img1} alt='img1' />
                            <div className='content-bg'>
                                <img src={content_bg} alt='' />
                                <div className='content-box'>
                                <Title level={4} type='secondary'>销量领先</Title>
                                <Title level={4} type='secondary'>品质保证</Title>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6}><img src={img2} alt='img2' /><div className='content-bg'>
                            <img src={content_bg} alt='' />
                            <div className='content-box'>
                                <Title level={4} type='secondary'>产地直供</Title>
                                <Title level={4} type='secondary'>品质纯正</Title>
                                </div>
                        </div></Col>
                        <Col sm={12} md={6}><img src={img3} alt='img3' /> <div className='content-bg'>
                            <img src={content_bg} alt='' />
                            <div className='content-box'>
                                <Title level={4} type='secondary'>当天捕捞</Title>
                                <Title level={4} type='secondary'>新鲜美味</Title>
                                </div>
                        </div></Col>
                        <Col sm={12} md={6}><img src={img4} alt='img4' /> <div className='content-bg'>
                            <img src={content_bg} alt='' />
                            <div className='content-box'>
                                <Title level={4} type='secondary'>顺丰空运</Title>
                                <Title level={4} type='secondary'>极速送达</Title>
                                </div>
                        </div></Col>
                    </Row>
                </div>

            </div>
        );
    }
}

export default GroupAppreciation;