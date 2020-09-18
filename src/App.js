import React from 'react';
import './App.less';

import { Route, HashRouter ,Switch,Redirect} from 'react-router-dom';
import Routes from './routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import MobileProduct from './pages/mobile/product';
import MobileHome from './pages/mobile/home';
import MobileLogin from './pages/mobile/login';
import MobileShoppingBag from './pages/mobile/shoppingBag';
import MobileList from './pages/mobile/list';
import MContact from './pages/mobile/contact';

class PageWrap extends React.Component {

  render() {
    const { history, location } = this.props;
    return (
      <div style={{height:'100%'}}>
        {/* <Switch>
          <Route path='/' component={ProductPage} />
        </Switch>
        <div className='content'>
          <Routes location={location} />
        </div> */}
        <Switch>
            <Route path='/mobile/shopping_bag' component={MobileShoppingBag} />
            <Route path='/mobile/product/:name' component={MobileProduct} />
            <Route path='/mobile/list' component={MobileList}/>
            <Route path='/mobile/index' component={MobileHome} />
            <Route path='/mobile/login' component={MobileLogin}/>
            <Route path='/mobile/contact' component={MContact}/>
            <Route path='/pc/' component={Routes}/>
            <Redirect path="/" to="/pc/index" />
            
        </Switch>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    if (window.name === '') {
      console.log('首次被加载');
      window.name = 'isLoad';
      localStorage.clear();
    } else if (window.name === 'isLoad') {
      console.log('页面被刷新')
    }
  }
  render() {
    return (
      <HashRouter>
        <PageWrap />
      </HashRouter>
    );
  }
}

export default App;
