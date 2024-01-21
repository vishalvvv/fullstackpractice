import React from 'react';
import axios from 'axios';

class Product extends React.Component{

     constructor(){
          super();
          this.state= {
            name: "",
            description: "",
            richDescription: "",
            image: "",
            brand: "",
            price: 0,
            category: "60ba004e79527eb5ca3ab71e",
            countInStock: 0,
            rating: 0,
            isFeatured: true
          }

           //this.updateName = this.updateName.bind(this);
     }

      updateField =(event) => {
         var name=event.target.name;
         var value=event.target.value;
         console.log(name,value);
         this.setState({[name]:event.target.value});
      }

      submitForm= (event) => {
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

     Name: <input type="text" name="name"  onChange={this.updateField}  placeholder="product name here"></input> <br></br><br></br>
     description: <input name="description" onChange={this.updateField}  type="text" placeholder="description here"></input> <br></br><br></br>
     richDescription: <input name="richDescription" onChange={this.updateField}  type="text" placeholder="rich description here"></input> <br></br><br></br>
     image url: <input name="image" type="text" onChange={this.updateField}  placeholder="rich description here"></input> <br></br><br></br>
     brand: <input name="brand" type="text" onChange={this.updateField}  placeholder="brand here"></input> <br></br><br></br>
     price: <input name="price" type="number" onChange={this.updateField}  placeholder="price here"></input> <br></br><br></br>
     countInStock: <input name="countInStock" onChange={this.updateField}  type="number" placeholder="enter count"></input> <br></br><br></br>
     rating: <input name="rating" onChange={this.updateField}  type="number" placeholder="rating here"></input> <br></br><br></br>
      <button>Add Product</button>
                    </form>

                     {this.state.name}
             </div>
         )
     }

}

export default Product;

/*

"name": "POCO M3 (Cool Blue, 64 GB)  (6 GB RAM)",
        "description": "The POCO M3 is a stylish personal device that offers immersive visuals, seamless performance, and long battery life for uninterrupted functioning. This smartphone features a Premium Design to let you flaunt style, 6 GB LPDDR4X RAM for smooth performance, and an FHD+ Display for clear and detailed visuals.",
        "richDescription": "Premium DesignThe POCO M3 features a textured back panel and a premium leather-like finish to offer an elegant look to this smartphone. Also, it has a side-mounted fingerprint sensor that adds a premium style and convenience.",
        "image": "https://rukminim1.flixcart.com/image/416/416/kklhbbk0/mobile/h/i/q/m3-mzb087ain-poco-original-imafzxf8zqkcgwfv.jpeg?q=70",
        "brand": "POCO",
        "price": 10999,
        "category": "60ba004e79527eb5ca3ab71e",
        "countInStock": 10,
        "rating": 4,
        "isFeatured": true,

*/