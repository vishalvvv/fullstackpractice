import React from "react";
import HOC from "./HOC";
class User extends React.Component{
    render(){
        return(
            <React.Fragment>
         User,count  {this.props.count}
         <button onClick={this.props.handleClick}> Usercount </button>
            </React.Fragment>
        )
    }
}
const UserHOC=HOC(User,135);
export default UserHOC;
