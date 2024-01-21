import React from 'react';
import axios from 'axios';
class Login extends React.Component{
    constructor(){
        super();
        this.state={
            username:'',
            password:''
        }
    }
    loginUser = (event) =>{
        event.preventDefault();
        console.log(this.state);
        axios.post("")
    }
    render(){
        console.log("login!!!");
        return <div>
           &nbsp; &nbsp; <form>
            <input placeholder="enter username" className="form-control" size="100" type="text" onChange={event => this.setState({username:event.target.value})}></input> <br></br>
            <input placeholder="enter password" className="form-control" size="100" type="text" onChange={event => this.setState({password:event.target.value})}></input>
                    <button className="btn btn-danger" onClick={this.loginUser}>Login</button>
            </form>
        </div>
    }
}

export default Login;