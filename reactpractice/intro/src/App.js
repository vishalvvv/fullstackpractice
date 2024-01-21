import React,{useState} from 'react';
import Login from './Login';
import Signup from './Signup';
function App() {
  const[name,setName] = useState("the matrix");
  return (
    <div>
      <h1> welcome to {name}</h1>
      <Login />
      <Signup/>
        </div>
  );
}

export default App;
