import React from 'react';
import { Carousel,BackTop} from 'antd';
import CompanyAbout from '../../components/company-about';
import GroupAppreciation from '../../components/group-appreciation';
import Footer from '../../components/footer';
import FootInfo from '../../components/FootInfo';
import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import './index.scss';
import $ from 'jquery';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show:false,
            show1:false,
        }
    }
    componentDidMount(){

        var child = document.getElementById("company-about-child");
        var parent = document.getElementById("company-about");

        var group_child = document.getElementById("group-appreciation-child");
        var group = document.getElementById("group-appreciation");

        var h = child.offsetHeight;
        var h1=group_child.offsetHeight;

        //将子元素的高度赋予父元素
        child.style.position='absolute';
        parent.style.height =100+h+'px';
        group_child.style.position='absolute';
        group.style.height =100+h1+'px';

        window.onscroll = () => {
            var dTop = $(document).scrollTop();//滚动高度
            var watchHeight=document.documentElement.clientHeight; //可视区高度

            var cTop = $('#company-about').offset()?.top;
            var gTop = $('#group-appreciation').offset()?.top;

            if (dTop>=cTop+h-watchHeight) {

                this.setState({
                    show:true
                })
            }
            if (dTop>=gTop+h1-watchHeight) {
                console.log(dTop,gTop,h1,watchHeight)
                this.setState({
                    show1:true
                })
            }
        }
    }


    render() {
        const {show,show1}=this.state;
        return (
            <div>
                <div id='banner'>
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
                <CompanyAbout show={show}/>
                <GroupAppreciation  show={show1}/>
                <Footer/>
                <FootInfo />
                <BackTop />
            </div>

        );
    }
}

export default Home;