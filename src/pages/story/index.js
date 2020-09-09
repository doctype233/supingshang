import React from 'react';
import './index.scss';
import FootInfo from '../../components/FootInfo';
import banner from '../../assets/images/story_banner.png';
import $ from 'jquery';


class StoryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        var header=$('#bg-change');
        window.onscroll = () => {
            header.addClass('show-bg')
        }

    }
    render() { 
        return ( 
            <div id='story'>
                <div className='header-placeholder'></div>
                <img src={banner} alt='banner'/>
                <div id=''>
                    
                </div>
                <FootInfo />
            </div>
         );
    }
}
 
export default StoryPage;