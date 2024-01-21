import './App.css';
 import React from 'react';
import Users from './Users';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      users: [
        {
          id:101,
          name:"vishal",
          address:"hyd"
        },
        {
          id:102,
          name:"aneesha",
          address:"hyd"
        },
          {
          id:103,
          name:"chirag",
          address:"jalandhar"
            },  
            {
              id:104,
              name:"trishna",
              address:"hyd"
                }          
      ]
    }
  }

   render(){
     console.log("app render");
     return(
       <div>

    <Users allUsers={this.state.users} updateUser={ user =>
    {
      var updatedArray=this.state.users;
      updatedArray.push(user);
      
      this.setState({users:updatedArray});
    }
  }/>
  {this.state.users.length}
       </div>
     )
   }
   }
    export default App;
    