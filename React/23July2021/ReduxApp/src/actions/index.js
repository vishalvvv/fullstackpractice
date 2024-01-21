//function that brings data from external source(api calls) and sends 
//that data to  reducer

import axios from 'axios';

 export function fetchProducts(){

    console.log("I am called");

  var promise = axios.get("http://localhost:8089/api/v1.0.0/product/list");

  return {
      type:"FETCH_PRODUCTS",
       payload : promise
  }

 }