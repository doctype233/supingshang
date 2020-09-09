import React from 'react';
import {Typography,Menu } from 'antd';
import {Link} from 'react-router-dom';
import './index.scss';
import img1 from '../../assets/images/wechat1.png';
import img2 from '../../assets/images/wechat2.png';
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
                            <Menu.Item key="0"><Link to='/'>首页</Link></Menu.Item>
                            <Menu.Item key="1"><Link to='/nav1'>品牌故事</Link></Menu.Item>
                            <Menu.Item key="2"><Link to='/nav2'>菜式欣赏</Link></Menu.Item>
                            <Menu.Item key="3"><Link to='/nav5'>行业咨询</Link></Menu.Item>
                            <Menu.Item key="4"><Link to='/nav6'>联系我们</Link></Menu.Item>
                        </Menu>
                    </div>
                </div>
                <div className='divider'></div>
                <div className='flex-between sub'>
                    <div>
                       <h4 className='subtitle'>官方客服电话</h4>
                        <Title level={2} type="warning">4006902019/15212973333</Title>
                    </div>
                    <div className='sub-right'>
                        <img  src={img1} alt='wechat1'/>
                        <div className='gap-10'></div>
                        <img  src={img2} alt='wechat2'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FootInfo;