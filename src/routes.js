/**
 * External Dependencies
 */
import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import ProductPage from './pages/product/index';
import Home from './pages/home/index';
import MobileProduct from './pages/mobile/product';
import PageNavbar from './components/navbar';

class Routes extends React.Component {
    
    render() {
        const {
            location,
        } = this.props;

        return (
           <div>
               <PageNavbar />
                <Switch
                location={location}
            >
                <Route path='/pc/index' component={Home} />
                <Route path='/pc/product' component={ProductPage} />
                { /* 404 */}
                {/* <Route
                    render={ () => (
                        <NotFoundPage />
                    ) }
                /> */}
                
            </Switch>
           </div>
        );
    }
}

export default withRouter(Routes);
