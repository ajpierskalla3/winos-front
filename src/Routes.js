import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './main/Home';
import Menu from './main/Menu'

const Routes = () => {
    return (
        <BrowserRouter>
            <Menu />
            <switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />

            </switch>
        </BrowserRouter>
    )
}


export default Routes;