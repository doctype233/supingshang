import React from 'react';
import { Carousel, BackTop } from 'antd';
import CompanyAbout from '../../components/company-about';
import GroupAppreciation from '../../components/group-appreciation';
import Footer from '../../components/footer';
import FootInfo from '../../components/FootInfo';
import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import './index.scss';
import $ from 'jquery';
import "animate.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

        window.onscroll = () => {
            this.moves($('#group-appreciation'), 'animate__animated animate__fadeInUp')
            this.moves($('#company-about'), 'animate__animated animate__fadeInUp');
            this.moves($('#foot-left'), 'animate__animated animate__fadeInLeft');
            this.moves($('#foot-right'), 'animate__animated animate__fadeInRight');
            this.moves($('#foot-title'), 'animate__animated animate__fadeIn');
            this.moves($('#phone'), 'animate__animated animate__flipInX');
        }
    }
    moves(ele, movename) {
        let a, b, c, d;
        a = ele.offset().top;
        b = ele.offset().height;
        c = $(window).scrollTop();
        d = $(window).height();
        if (d + c > a) {
            ele.addClass(movename);
        } else {
            ele.removeClass(movename);
        }
    }
    componentWillUnmount(){
        window.removeEventListener()
    }
    render() {
        return (
            <div>
                <div id='banner' >
                    <Carousel autoplay dotPosition='bottom' className='carousel'>
                        <div>
                            <img src={banner1} />
                        </div>
                        <div>
                            <img src={banner2} />
                        </div>
                        <div>
                            <img src={banner1} />
                        </div>
                        <div>
                            <img src={banner2} />
                        </div>
                    </Carousel>

                </div>
                <CompanyAbout />
                <GroupAppreciation />
                <Footer />
                <FootInfo />
                <BackTop />
            </div>
        );
    }
}

export default Home;