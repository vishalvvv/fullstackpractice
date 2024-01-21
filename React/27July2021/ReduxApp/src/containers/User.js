import React from 'react';
import { bindActionCreators } from "redux";
import {connect} from 'react-redux';
import { fetchProducts } from '../actions/index';

class User extends React.Component{
       componentDidMount(){
           console.log("component did mount");
         this.props.fetchProducts();
       }

       renderList = () => {
            let array= this.props.products.map(product => {
                 return <li key={product._id}>{product.name}</li>
             })
             return array;
       }
       render(){
              if(!this.props.products){
                   return  <div>
                       Loading....
                   </div>
              }
              else
              {
                  return (<div>
                      <ul>
                      {this.renderList()}
                      </ul>
                       
                  </div>)
              }
       }

}

// to get app state!
function mapStateToProps(appState){
   return {products:appState.products}
}

// to bind fetchProducts function to component
function mapDispatchToProps(dispatch){
     return bindActionCreators({fetchProducts:fetchProducts},dispatch);

}

export default connect(mapStateToProps,mapDispatchToProps)(User);
