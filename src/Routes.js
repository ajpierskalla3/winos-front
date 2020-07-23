import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './main/Home';
import Menu from './main/Menu';
import PrivateRoute from './auth/PrivateRoutes';
import Dashboard from './user/Dashboard';
import AdminDashboard from './user/AdminDashboard';
import AdminRoute from './auth/adminRoute';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct'



const Routes = () => {
    return (
        <BrowserRouter>
            <switch>
                <PrivateRoute path="/" exact component={Home} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
                <AdminRoute path='/create/category' exact component={AddCategory} />
                <AdminRoute path='/create/product' exact component={AddProduct} />




            </switch>
        </BrowserRouter>
    )
}


export default Routes;