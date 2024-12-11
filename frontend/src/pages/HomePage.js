import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OrderPage from './OrderPage';

const HomePage = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/start-order" component={OrderPage} />
            </Switch>
        </Router>
    );
};

export default HomePage;
