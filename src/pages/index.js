
import Home from './home';

import connectRoute from '../connectRoute';

const HomeWrapper=connectRoute(Home);



export default {
    '/': HomeWrapper,
    '/index': HomeWrapper,
    
};
