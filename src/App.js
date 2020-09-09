import React from 'react';
import './App.less';

import { Route, HashRouter } from 'react-router-dom';
import PageNavbar from './components/navbar';
import Routes from './routes'
import 'bootstrap/dist/css/bootstrap.min.css';

class PageWrap extends React.Component {

  render() {
    const { history, location } = this.props;
    return (
      <div>
        <Route history={history}>
          <>
            <Route component={PageNavbar} />
          </>
        </Route>
        <div className='content'>
          <Routes location={location} />
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    if (window.name == '') {
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
