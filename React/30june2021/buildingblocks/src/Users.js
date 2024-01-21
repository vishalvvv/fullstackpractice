  import React from 'react';
class Users extends React.Component{
    renderList = () =>{
        var usersList=this.props.allUsers.map( user => {
            return <li key={user.id}>{user.name}{user.address}</li>
        })
    
        return usersList;
    }
     addUser = () => {
         alert("addUser called!!");
         var user= {
             id:105,
             name:"ria",
             address:"towlichowki"
       }
       this.props.updateUser(user);
     }
    render(){
        console.log("users render");
        return(
            <div>
                <h1>Iam a users component</h1>
                <button onClick={this.addUser}>Add new user</button>
              <ul>
               {this.renderList()}
              </ul>
            </div>
        )
}
}
export default Users;