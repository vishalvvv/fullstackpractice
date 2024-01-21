import React from 'react';
import axios from 'axios';
class Login extends React.Component{

     constructor(){
         super();
         this.state= {
             username:'',
             password: ''
         }
     }
      loginUser = (event) =>{
         event.preventDefault();
         console.log(this.state);
         axios.post("http://localhost:8089/api/v1.0.0/user/login",this.state).then(
             response =>{
                 console.log(response);
                  if(response.data.token){
                      localStorage.setItem('token',response.data.token);
                      this.props.history.push('/dashboard');
                  }
             }
         )
      }
    render(){
          console.log("login!!");
        return <div>
               &nbsp; &nbsp; <form>
                <input placeholder="enter username" className="form-control"  type="text" onChange={event => this.setState({username:event.target.value})}></input> <br></br>
                    <input placeholder="enter password" className="form-control"  type="password" onChange={event => this.setState({password:event.target.value})}></input>
                     <button className="btn btn-danger" onClick={this.loginUser}>Login</button>
                </form>
        </div>
    }

}
export default Login;