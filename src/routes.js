/**
 * External Dependencies
 */
import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import ProductPage from './pages/product/index';
import Home from './pages/home/index';


class Routes extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            location,
        } = this.props;

        return (
            <Switch
                location={location}
            >
                <Route path='/index' component={Home} />
                <Route path='/product' component={ProductPage} />
                <Redirect path="/" to="/index" />
                { /* 404 */}
                {/* <Route
                    render={ () => (
                        <NotFoundPage />
                    ) }
                /> */}
                
            </Switch>
        );
    }
}

export default withRouter(Routes);
