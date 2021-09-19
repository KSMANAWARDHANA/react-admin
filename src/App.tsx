/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import { BrowserRouter,Route } from 'react-router-dom';
import Users from './pages/Users/Users';
import Register from './pages/Register';
import Login from './pages/Login';
import UserCreate from './pages/Users/UserCreate';
import UserEdit from './pages/Users/UserEdit';
import Roles from './pages/roles/Roles';
import RoleCreate from './pages/roles/RoleCreate';
import RoleEdit from './pages/roles/RoleEdit';
import Products from './pages/Products/Products';
import ProductCreate from './pages/Products/ProductCreate';
import Orders from './pages/orders/Orders';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Route path={'/'} exact component={Dashboard}/>
        <Route path={'/users'} exact component={Users}/>
        <Route path={'/register'} exact component={Register}/>
        <Route path={'/login'} component={Login}/>
        <Route path={'/users/create'} component={UserCreate}/>
        <Route path={'/users/:id/edit'} component={UserEdit}/>
        <Route path={'/roles'} exact component={Roles}/>
        <Route path={'/roles/create'} component={RoleCreate}/>
        <Route path={'/roles/:id/edit'} component={RoleEdit}/>
        <Route path={'/products'} exact component={Products}/>
        <Route path={'/products/create'} component={ProductCreate}/>
        <Route path={'/orders'} exact component={Orders}/>
</BrowserRouter>
    </div>
  );
}

export default App;


