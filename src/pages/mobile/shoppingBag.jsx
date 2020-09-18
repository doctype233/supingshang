import React from 'react';
import MHeader from './header';
import {List} from 'antd';

class MobileShoppingBag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const data=[{

        }]
        return ( 
            <div className='m-shopping-bag'>
                <MHeader bg='#000' nobag={true}/>
                
            </div>
         );
    }
}
 
export default MobileShoppingBag;