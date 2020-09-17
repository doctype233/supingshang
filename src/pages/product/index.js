import React from 'react';
import './index.scss';
import FootInfo from '../../components/FootInfo';

import $ from 'jquery';
import { Typography } from 'antd';
import { Route, Switch,withRouter} from 'react-router-dom';
import ProductList from './product_list.js';
import ProductDetailPage from '../product_detail/index';


class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        

        var header = $('#bg-change');
        window.onscroll = () => {
            header.addClass('show-bg')
        }
        var li=$('.child-li');
        li.mouseover(function(e){
            $('.tips-box').show();
            // console.log(e.target)
        })
        li.mousemove(function(e){
            var id=e.target.id;
            $('.tips-box').css({top:75+id*50})
        })
        $('.parent-list').mouseout(function(e){
            $('.tips-box').hide()
        })

    }
    render() {
        const {
            location,
        } = this.props;
        return (
            <div id='product' key={this.props.location.key}>
                <div className='header-placeholder'></div>
                <Switch location={location}>
                    <Route exact path='/pc/product' component={ProductList} />
                    <Route exact path='/pc/product/:name' component={ProductDetailPage} />
                </Switch>
                <FootInfo />
            </div>
        );
    }
}

export default withRouter(ProductPage);