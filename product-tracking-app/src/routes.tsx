import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductAddPage from './pages/ProductAddPage';
import ProductListPage from './pages/ProductListPage';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/add-product" component={ProductAddPage} />
                <Route path="/products" component={ProductListPage} />
            </Switch>
        </Router>
    );
};

export default Routes;