import React from "react";
/*import axios from "axios"; */
class App extends React.Component {
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(
      response => response.json()
    ) . then(
      data => console.log(data)
    )
    
    
  /*  axios.get("https://jsonplaceholder.typicode.com/todos/1").then(
      response => console.log(response.data)
    )  */
  }
  render(){
    return(
      <div></div>
    )
  }
}
export default App;