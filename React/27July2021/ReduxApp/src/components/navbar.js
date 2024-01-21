import React from 'react';
import { HashRouter,NavLink,Route } from 'react-router-dom';
import Login from '../containers/Login';
import User from '../containers/User';
import Register from '../containers/Register';

export class Navbar extends React.Component{

    render(){
        return(
            <div>
                 <HashRouter>

                
                <NavLink to="/login">Login</NavLink> <br></br>
                <NavLink to="/register">Register</NavLink><br></br>
                <NavLink to="/products">Products</NavLink><br></br>

                   <Route path="/login" component={Login}></Route>
                   <Route path="/register" component={Register}></Route>
                   <Route path="/products" component={User}></Route>

                </HashRouter>
            </div>
        )
    }
     
}