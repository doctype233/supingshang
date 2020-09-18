import React from 'react';
import {Card,Row,Col} from 'antd';
import wechat from '../../assets/images/wechat1.jpg';
import './index.scss';
import FootInfo from '../../components/FootInfo';


class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{height:"100%"}} id='contact'>
                <Card style={{height:"100%",paddingTop:200}}>
                    <Row justify='center'>
                        <Col sm={24} ><img src={wechat} alt='wechat store' width={200}/></Col>
                        <Col sm={24} style={{marginTop:30}}>
                            <p level={4}>企业电话:<a href='tel'>0512-67248808</a></p>
                            <p level={4}>业务联系:<a href='tel'>15062355455</a></p>
                        </Col>
                    </Row>
                </Card>
                <FootInfo />
            </div>
         );
    }
}
 
export default ContactPage;