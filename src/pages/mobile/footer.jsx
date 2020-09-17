import React from 'react';
import './footer.scss';


class MFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id='m-footer'>
                <div className='copyright'>
                    更多选购方式,请关注苏品尚官方微信公众号：supinshang77
                </div>
                <div className='copyright'>
                    Copyright ©2019 上海券耕贸易有限公司版权所有
                </div>
            </div>
        );
    }
}

export default MFooter;