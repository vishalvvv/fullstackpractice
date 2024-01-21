import React from 'react';
import { NavLink,HashRouter,Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Contact from './Contact';
class Header extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <HashRouter>
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  
   <NavLink className="navbar-brand" to="/home" >Amazon</NavLink> 
  
  
  <ul className="navbar-nav">
    <li className="nav-item">
      <NavLink className="nav-link"  to="/login" >Login</NavLink>
    </li>
    <li className="nav-item">
      < NavLink className="nav-link"  to="/register" >Register</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link"  to="/contact" >Contact</NavLink>
    </li>
  </ul>
</nav>

 <Route path="/login" component={Login}></Route>
<Route path="/register" component={Register}></Route>
<Route path="/contact" component={Contact}></Route> 
</HashRouter>
      </div>
    )
  }
}
export default Header;