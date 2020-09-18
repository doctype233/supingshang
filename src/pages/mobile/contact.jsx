import React from 'react';
import MHeader from './header';
import MFooter from './footer';
import {Card,Typography,Row,Col} from 'antd';
import wechat from '../../assets/images/wechat1.jpg';
const {Title}=Typography;

class MContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{height:"100%"}}>
                <MHeader bg='#000'/>
                <Card style={{height:"100%",paddingTop:'80px'}}>
                    <Row justify='center'>
                        <Col><img src={wechat} alt='wechat store' width={200}/></Col>
                        <Col style={{marginTop:30}}>
                            <p level={4}>企业电话:<a href='tel'>0512-67248808</a></p>
                            <p level={4}>业务联系:<a href='tel'>15062355455</a></p>
                        </Col>
                    </Row>
                </Card>
                <MFooter />
            </div>
         );
    }
}
 
export default MContact;