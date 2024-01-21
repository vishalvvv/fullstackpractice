import React from 'react';
import axios from 'axios';
class Product extends React.Component{
 constructor(){
    super();
    this.state = {
        name:"",
        description:"",
        richDescription:"",
        image:"",
        brand:"",
        price:0,
        category:"43t7op955t6gd2bh",
        countInStock:0,
        rating:0,
        isFeatured:true
    
    }
 }
 updateField =(event) => {
    var name = event.target.name;
    var value = event.target.value;
    console.log(name,value);
    this.setState({[name]:event.target.value});
 }
 submitForm = (event) => {
 event.preventDefault();
 console.log(this.state);
 axios.post("http://localhost:8089/api/v1.0.0/product/add").then(
    response => {
        console.log(response);
    }
 )
 }
    render(){
        return(
            <div>
                <form onSubmit={this.submitForm}>
                 Name : <input type="text" name="name" onChange={this.updateField} placeholder="use name here"></input><br></br> <br></br>
                Description : <input type="text"name="description" onChange={this.updateField} placeholder="description here"></input><br></br> <br></br>
                richDescription: <input type="text"name="richDescription" onChange={this.updateField} placeholder="richDescription here"></input><br></br> <br></br>
                image url: <input type="text"name="image-url" onChange={this.updateField} placeholder="image url here"></input><br></br> <br></br>
                brand: <input type="text" name="brand" onChange={this.updateField} placeholder="brand here"></input><br></br> <br></br>
                price: <input type="number" name="price" onChange={this.updateField} placeholder="price here"></input><br></br> <br></br>
                countInStock: <input type="number" name="countInStock" onChange={this.updateField} placeholder="countInStock here"></input><br></br> <br></br>
                rating: < input type="number" name="rating" onChange={this.updateField} placeholder="rating here"></input><br></br> <br></br>
                <button>AddProduct</button>
                </form>
                {this.state.name}
            </div>
        )
    }
}
export default Product;