import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyProvider from './MyProvider';
import ProductList from './ProductList';

class App extends React.Component{
  render(){
    return(
      <MyProvider>
        <div className='App'>
       <ProductList/>
        </div>

        
      </MyProvider>
    );
  }
}
  

export default App;
