// import logo from './logo.svg';
// import './App.css';

//function App() {
  //return (
   // <div className="App">
     // <header className="App-header">
       //  <img src={logo} className="App-logo" alt="logo" />
       // <p>
       //   Edit <code>src/App.js</code> and save to reload.
      //  </p>
        // q<a
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


 // import User from "./User";

// function App(){
  // return(
   //  <div>
   //  <h1>Iam app component!!</h1>
   //  <User></User>
   //  </div>
   //  )
 //  }


 import React from 'react';
 import axios from 'axios';

 class App extends React.Component{

  componentDidMount(){
    axios.get("http://jsonplaceholder.typicode.com/users").then(
      (users) => {
        console.log(users);
      },
      (error) => {
        console.log(error);
      }
    )
  }

     render(){
       return(
         <div>
           <h1>Iam in app component!!</h1>
         </div>
       )
     }
 }
 
export default App;