import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./container/AuthComponent";
import Search from "./container/SearchComponent";

function Routes() {
    return (
        <Router>

            <Switch>
                <Route path="/" component={Login} exact />
                <Route path="/search" component={Search} exact />
                <Redirect to="/" />
            </Switch>
            <ToastContainer />
        </Router>
    );
}

export default Routes;
