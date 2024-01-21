import React from 'react';
import {NavLink,HashRouter,Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';


class Header extends React.Component{

    render(){
        return(
            <div>
                <HashRouter>

    &nbsp;&nbsp;&nbsp; <NavLink to="/login">Login</NavLink>
     <NavLink to="/register">Register</NavLink>

     <Route path="/login" component={Login}></Route>
     <Route path="/register" component={Register}></Route>
     <Route path="/dashboard" component={Dashboard}></Route>

     

                </HashRouter>
            </div>
        )
    }
}
export default Header;
