import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Layout,Menu } from 'antd';
import './index.scss';
import logo from '../../assets/images/logo1.png';

const {Header}=Layout;
class PageNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'term',
        }
    }
    componentDidMount(){
       
    }
    handleClick = e => {
        this.setState({
            current: e.key,
        });
        // localStorage.setItem('current',e.key)
        this.props.history.push("/" + e.key)
    };
    render() {
        return (
            <Header id='header'>
                <div className="logo"><img src={logo} alt='logo'/></div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']} className={`header-menu`} id='bg-change'>
                    <Menu.Item key="0"><Link to='/pc/index'>首页</Link></Menu.Item>
                    <Menu.Item key="2"><Link to='/pc/product'>产品列表</Link></Menu.Item>
                    <Menu.Item key="3"><Link to='/pc/nav3'>在线提货</Link></Menu.Item>
                    <Menu.Item key="4"><Link to='/pc/nav4'>售后保障</Link></Menu.Item>
                    <Menu.Item key="6"><Link to='/pc/nav6'>联系我们</Link></Menu.Item>
                </Menu>
            </Header>
        );
    }
}

export default withRouter(PageNavbar);