import React from 'react';
import {Link} from 'react-router-dom';

import plus from '../../assets/images/icon-plus.png';
import tit4 from '../../assets/images/tit-4.png';
import tit5 from '../../assets/images/tit-5.png';
import { product_list } from '../../utils/utils';

import './index.scss';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="dzx-list">
                    <div className="con">
                        <div className="left">
                            <div className="top active-1">
                                <span className="span1 cur">礼品卡</span>
                                <span className="span2 ">现货礼盒</span>
                            </div>
                            <div className='li-list'>
                                <ul className='parent-list'>
                                    {
                                        (product_list || []).map((item, index) => {
                                            return <li key={index} id={index.toString()} className='child-li'>
                                                <span className='xx' id={index.toString()}>雄蟹<em id={index.toString()}>{item.male}</em>两</span>
                                                <b id={index.toString()}><img src={plus} alt='img'/></b>
                                                <span className='cx' id={index.toString()}>雌蟹<em id={index.toString()}>{item.female}</em>两</span>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="right">
                            <div className='list-item'>
                                <div className='li list-3'>
                                    <div className='tit'>
                                        <img src={tit4} alt="豪华四对(8只装)" />
                                    </div>
                                    <div className='dl parent-list'>
                                        {/* <a className="dd" href="#">
                                            <span className="n">
                                                388<em>.00</em>
                                            </span>
                                        </a> */}
                                        {
                                            (product_list || []).map((item, index) => {
                                                return <Link className="dd child-li" to={'/pc/product/'+"type1-"+index.toString()} key={index} id={index.toString()}>
                                                    <span className="n" id={index.toString()}>
                                                        {item.price1}<em>.00</em>
                                                    </span>
                                                </Link>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='list-item'>
                                <div className='li list-3'>
                                    <div className='tit'>
                                        <img src={tit5} alt="至尊五对(10只装)" />
                                    </div>
                                    <div className='dl parent-list'>
                                      
                                        {
                                            (product_list || []).map((item, index) => {
                                                return <Link className="dd child-li" to={'/product/'+"type2-"+index.toString()} key={index} id={index.toString()}>
                                                    <span className="n" id={index.toString()}>
                                                        {item.price2}<em>.00</em>
                                                    </span>
                                                </Link>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tips-box"></div>
                    </div>
                                        
                </div>
         );
    }
}
 
export default ProductList;