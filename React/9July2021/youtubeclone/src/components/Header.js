import React from 'react';
import { NavLink,HashRouter,Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

class Header extends React.Component{
   
    render(){
        return (
            <div>

        <HashRouter>

       &nbsp; &nbsp; &nbsp; <NavLink to="/login">Login</NavLink> &nbsp; &nbsp; &nbsp;
       <NavLink to= "/register">Register</NavLink>

        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>


        </HashRouter>
       

            </div>
        )
    }

}

export default Header;