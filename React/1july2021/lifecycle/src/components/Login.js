import React from "react";
class Login extends React.Component{
    constructor(){
        super();
        console.log("login-constructor called");
        this.state ={
            counter:1
        }
    }
    componentDidMount(){
        console.log("login-component mounted");
    }
    componentDidUpdate(){
        console.log("login-component did update")
    }
    inc = () => {
    this.setState ({counter:this.state.counter+1});
    }
    render(){
        console.log("render called");
        return(
            <div>
<h1>im login</h1>
<button onClick={this.inc}>increment</button>
            </div>
        )
    }
    componentWillUnmount(){
        console.log("login-component unmounted");
    }
}
export default Login;