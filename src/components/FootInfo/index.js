import React from 'react';
import {Typography,Menu } from 'antd';
import {Link} from 'react-router-dom';
import './index.scss';
import img1 from '../../assets/images/wechat1.jpg';
const { Title } = Typography;

class FootInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id='foot-info'>
                <div className='foot-head flex-between'>
                    <Title type="warning">蟹正皇</Title>
                    <div>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['']} id='foot-menu'>
                            <Menu.Item key="0"><Link to='/index'>首页</Link></Menu.Item>
                            <Menu.Item key="4"><Link to='/pc/contact'>联系我们</Link></Menu.Item>
                        </Menu>
                    </div>
                </div>
                <div className='divider'></div>
                <div className='flex-between sub'>
                    <div>
                       <h4 className='subtitle'>官方客服电话</h4>
                        <Title level={2} type="warning" id='phone'>4006902019/15212973333</Title>
                    </div>
                    <div className='sub-right'>
                        <img  src={img1} alt='wechat1'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FootInfo;