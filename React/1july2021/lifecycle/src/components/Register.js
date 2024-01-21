import React from 'react';
class Register extends React.Component{
    constructor(){
        super();
        this.state = {
            counter:1
            }
            console.log("register constructor called");
    }
    componentDidMount(){
        console.log(" register component mounted");
    }
    componentDidUpdate(){
        console.log("register component did update");
    }
    inc = () => {
        this.setState({counter:this.state.counter+1});
    }
    render(){
        console.log("render called");
        return(
            <div>
                <form >
                    <input type="text" name="username" ></input>
                    <input type="text" name="password"></input>
                </form>

                <h1>im in register</h1>

                <button onClick={this.inc}>increment</button>

            </div>
        )
    }
    componentWillUnmount(){
        console.log("regster component unmounted");
    }
}
export default Register;