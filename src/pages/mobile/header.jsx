import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import { Menu,Row,Col, Button,Divider,Typography} from 'antd';
import './header.scss';
import shopping from '../../assets/images/shopping.png';
const {Paragraph}=Typography;


class MHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            open:false
        }
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
            open: false,

        });
    };
    toggleOpen = () => {
        this.setState({
            collapsed: false,
            open: !this.state.open,
        });
    };
    goLogin(){
        this.props.history.push('/mobile/login')
    }
    render() {
        const { collapsed,open } = this.state;
        const {bg}=this.props;
        return (
            <div>
                <div id='m-header' style={bg?{background:bg}:{background:'transparent'}}>
                    <div id='headerList' className={collapsed ? "open" : ''} onClick={this.toggleCollapsed}></div>
                    <div className='shopping-cart' onClick={this.toggleOpen}><img src={shopping} alt='shopping-cart' width={23} /></div>
                </div>
                <div className={`menu-root ${collapsed ? "slide" : ''}`}>
                    <Menu
                        mode="inline"
                        theme="dark"
                    >
                        <Menu.Item key="1" >
                            <Link to='/mobile/index'>首页</Link>
                        </Menu.Item>
                        <Menu.Item key="2" >
                            <Link to='/mobile/list'>产品选购</Link>
                        </Menu.Item>
                        <Menu.Item key="3" >
                            <Link to='/mobile/online'>在线提货</Link>
                        </Menu.Item>
                        <Menu.Item key="4" >
                            <Link to='/mobile/contact'>联系我们</Link>
                        </Menu.Item>
                    </Menu>
                </div>
                <div className={`shopping-bag ${open ? "slide" : ''}`}>
                    <div className='box'>
                    <Row  justify='center'>
                        <Col>登录后可查看购物车</Col>
                    </Row>
                    <Divider />
                    <Row justify='center'>
                        <Button type="primary" onClick={this.goLogin.bind(this)}>点击登录</Button>
                    </Row>
                    <Divider />
                    <Paragraph type='secondary' style={{fontSize:12}}>
                        更多选购方式请致电:<a href='tel:0512-67248808'>0512-67248808</a>
                    </Paragraph>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(MHeader);