import React from 'react';
import MHeader from './header';
import MFooter from './footer';
import {Card,Typography,Row,Col} from 'antd';
const {Title}=Typography;

class MService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{height:"100%"}}>
                <MHeader bg='#000'/>
                <img src={require('../../assets/images/service1.png')} alt='' style={{width:'100%',paddingTop:45}}/>
                <img src={require('../../assets/images/service2.png')} alt='' style={{width:'100%',marginTop:'-91px'}}/>
                <MFooter />
            </div>
         );
    }
}
 
export default MService;