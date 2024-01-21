import logo from './logo.svg';
import './App.css';
import React from 'react';


 // function App() {
  // return (
    // <div>
    //  <h1>Iam in app component!!</h1>
    //  </div>
  // );
// }
// export default App;

    // <div className="App">
    //  <header className="App-header">
      //  <img src={logo} className="App-logo" alt="logo" />
       //  <p>
         //  Edit <code>src/App.js</code> and save to reload.
        // </p>
       // <a
         // className="App-link"
          // href="https://reactjs.org"
          // target="_blank"
          // rel="noopener noreferrer"
        // >
          // Learn React
        // </a>
      // </header>
    // </div>
 // );
// }

// export default App;

class App extends React.Component{
  constructor(){
    super();
    this.state={
      username:'',
      password:''

    }
  }
  updateUsername = (event) => {
     console.log(event.target.value);
     this.setState({username:event.target.value})
  }
  updatePassword = (event) => {
    console.log(event.target.value);
    this.setState({password:event.target.value})
  }
  handleClick =(event) => {
    event.preventDefault();
    console.log("State",this.state);
  }
 render(){
    return(
      <div>
        <form onSubmit={this.handleClick}>
         Username: <input onChange={this.updateUsername} type="text" name="username"></input> <br></br>
         Password: <input onChange={this.updatePassword} type="password" name="password"></input> <br></br>
         <button>Submit</button>
        </form>
      </div>
    )
  }
}
 export default App;