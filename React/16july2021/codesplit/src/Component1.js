import React from 'react';
import axios from 'axios';
class Component1 extends React.Component{
    constructor(){
        super();
        this.state={

            products:[]
        }
    }

        displayProds = () =>{
          let list =  this.state.products.map(product =>{
        return <li key={product.id}>{product.title}</li>
            })
            return list;
        }

   componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then(
        response => { console.log(response);
        this.setState({products:response.data});
        }
    )
   }

   render(){
    return(
        <React.Fragment>
            <ul>
                {this.displayProds()}
            </ul>
        </React.Fragment>
    )
   }
        
    }
 
export default Component1;